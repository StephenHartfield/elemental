import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogContext from '../context/logContext';
import determineHelpText from '../helper-functions/determineHelpText';

const Fixed = styled.div`
    top: 0;
    left: 40%;
    width: 20%;
    position: fixed;
    border: 1px solid black;
`;

const Cont = styled.div`
    width: 100%;
    display: flex;
`;

const ExpandButton = styled.div`
    background-color: ${props => props.never ? 'lightblue' : 'lightgray'};
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: 1px solid gray;
`;

const LogContainer = styled.div`
    padding: ${props => props.expanded ? '10px' : '0px'};
    transition: height .4s ease-out;
    height: ${props => props.expanded ? '40px' : '0px'};
    max-width: 100%;
    max-height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const List = styled.ul`
    padding: 0px;
    margin: 0px;
`;
const ListItem = styled.li`
    list-style-type: none;
`;

export default function Help() {
    const [expanded, setExpanded] = useState(false);
    const [wasAutoExpanded, setWasAutoExpanded] = useState(true);
    const [autoEnabled, setAutoEnabled] = useState(true);
    const logContext = useContext(LogContext);
    const [log, setLog] = useState(null);

    useEffect(() => {
        if (logContext.lastLog) {
            const helpText = determineHelpText(logContext.lastLog);
            setLog(helpText);
        } else {
            setLog("begin");
        }
        if (autoEnabled) {
            setExpanded(true);
            setWasAutoExpanded(true);
        }
        setTimeout(() => {
            if (wasAutoExpanded) {
                setExpanded(false);
            }
        }, 3000);
    }, [logContext.lastLog]);

    const handleExpand = () => {
        setExpanded(!expanded);
        setWasAutoExpanded(false);
    }

    const handleNeverAuto = () => {
        setAutoEnabled(!autoEnabled);
    }

    return (
        <Fixed>
            <Cont>
                <ExpandButton onClick={handleExpand} >Help</ExpandButton>
                <ExpandButton never onClick={handleNeverAuto}>{autoEnabled ? 'manual' : 'auto'}</ExpandButton>
            </Cont>
            <LogContainer expanded={expanded}>
                <List>
                    {expanded && log}
                </List>
            </LogContainer>
        </Fixed>
    )

}