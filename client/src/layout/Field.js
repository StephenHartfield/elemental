import React from 'react';
import styled from 'styled-components';
import ItemCard from '../cards/ItemCard';

const StyledField = styled.div`
    height: 300px;
    width: 80%;
    background-color: #c2c1a7;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => props.pos === 'top' ?
        'rotate(180deg)' :
        ''
    };
`;

export default function Field({field, orientation}) {

    return (
        <StyledField pos={orientation}>
            {field && field.map((itemSection, idx) => (
                <>
                    <ItemCard card={itemSection.item} faceUp={true} />
                </>
            ))}
        </StyledField>
    )
}