import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogContext from '../context/logContext';

const Fixed = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    border: 1px solid black;
`;

const ExpandButton = styled.div`
    background-color: lightgray;
    width: 200px;
`;

const LogContainer = styled.div`
    padding: 10px;
    height: 400px;
    max-height: 400px;
    overflow-y: scroll;
`;
const List = styled.ul`
    padding: 0px;
`;
const ListItem = styled.li`
    list-style-type: none;
`;

export default function LogDisplay() {
    const [expanded, setExpanded] = useState(false);
    const logContext = useContext(LogContext);
    const [logs, setLogs] = useState(null);

    useEffect(() => {
        console.log(logContext.logs);
        if (logContext.logs) {
            setLogs(logContext.logs);
        }
    }, [logContext.logs]);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <Fixed>
            <ExpandButton onClick={handleExpand} >Game Log</ExpandButton>
            {expanded &&
                <LogContainer>
                    {logs ?
                        <List>
                            {Object.keys(logs).map((log, idx) => (
                                <ListItem key={`log${idx}`}>{logs[log]}</ListItem>
                            ))}
                        </List>
                        :
                        <p>No Logs</p>
                    }
                </LogContainer>
            }
        </Fixed>
    )

}