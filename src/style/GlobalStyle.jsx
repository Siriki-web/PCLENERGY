import React from 'react';
import { createGlobalStyle } from 'styled-components';
import "../assets/css/font.css"
import { useEffect } from 'react';

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Outfit', Helvetica, Arial, sans-serif
    }

    body {
        margin: 0;
    }
`
const GlobalStyle = () => {
    useEffect(() => {
        document.title = "PCL ENERGY"
    }, [])
    return (
        <StyledGlobalStyle />
    );
};

export default GlobalStyle;