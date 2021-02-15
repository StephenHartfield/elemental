import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getUtilityLayout from '../helper-functions/getUtilityLayout';

const Fixed = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: -120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function UtilityOverlay({ card, showOverlay, elementPool }) {

    const handleOffUtility = () => {
        showOverlay(null);
    }

    return (
        <Fixed onClick={handleOffUtility}>
            {card && getUtilityLayout(card, elementPool)}
        </Fixed>
    )
}