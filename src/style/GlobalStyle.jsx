import React from 'react';
import { createGlobalStyle } from 'styled-components';
import "../assets/css/font.css"
import { Helmet } from 'react-helmet';


const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Outfit', Helvetica, Arial, sans-serif;
        // margin: 0;
        // box-sizing: border-box;
        text-decoration: none;
    }

    body {
        margin: 0px;
        box-sizing: border-box;
    }
`
const GlobalStyle = () => {
    // useEffect(() => {
    //     document.title = "PCL ENERGY"
    // }, [])
    return (
        <div>
            <StyledGlobalStyle />
            <Helmet>
                <meta charSet='utf-8' />
                <title>PCL ENERGY</title>   
                <meta name="description" content="The best source of energy for the better tomorrow" />
            </Helmet>
        </div>
    );
};

export default GlobalStyle;