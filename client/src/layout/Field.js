import React from 'react';
import styled from 'styled-components';
import ItemCard from '../cards/ItemCard';

const StyledField = styled.div`
    height: 300px;
    width: 80%;
    background-color: #c2c1a7;
    transform: ${props => props.pos === 'top' ?
        'rotate(180deg)' :
        ''
    };
    display: flex;
    justify-content: center;
`;

const Items = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
`;

export default function Field({ field, orientation, showOverlay }) {

    return (
        <StyledField pos={orientation}>
            <Items>
                {field && field.map((itemSection, idx) => (
                    <ItemCard card={itemSection.item} showOverlay={showOverlay} faceUp={true} key={`${orientation}${idx}`} />
                ))}
            </Items>
        </StyledField>
    )
}