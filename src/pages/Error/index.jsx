import React from 'react';
import Nav from '../../components/Nav'
import styled from 'styled-components'
import error from '../../assets/404.svg'

const Error = () => {

    const ErrorWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: 30px;
        align-items: center;
    `

    const TitreH1 = styled.h1`
        font-weight: 300;
        color: white;
        `
    const CardImage = styled.img`
        max-width: 800px;

        @media only screen and ( max-width: 500px){
            width: 100%;
        }
        `
    const TitreH2 = styled.h2`
        font-weight: 300;
        color: white;
        margin-top: 20px;
        font-size: 16px;
    
        `

    return (
        <div style={{ backgroundColor: "#070707" }}>
            <Nav />
            <ErrorWrapper>
                <TitreH1>Oups...</TitreH1>
                <CardImage src={error} alt="Cette page n'existe pas" />
                <TitreH2>There seems to be a problem</TitreH2>
            </ErrorWrapper>
        </div>

    );
};

export default Error;