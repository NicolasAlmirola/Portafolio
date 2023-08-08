import React from 'react';
import styled from 'styled-components';

const Espaciado = () => {
    return <SeparatorLine />;
};

export default Espaciado;

const SeparatorLine = styled.div`
    width: 2px;
    height: 50px;
    background-color: white;
    opacity: 0.6;
    margin: 0.5rem 0;
`;
