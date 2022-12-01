import React from 'react';
import { createGlobalStyle } from 'styled-components';
import "../assets/css/font.css"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Outfit', Helvetica, Arial, sans-serif
    }

    body {
        margin: 0;
        box-sizing: border-box;
        
    }
`
const GlobalStyle = () => {
    useEffect(() => {
        document.title = "PCL ENERGY"
    }, [])
    return (
        <div>
            <StyledGlobalStyle />
            <Helmet>
                {/* <title>My Title</title> */}
                <meta name="description" content="The best source of energy for the better tomorrow" />
            </Helmet>
        </div>
    );
};

export default GlobalStyle;