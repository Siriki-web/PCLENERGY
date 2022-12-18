import React from 'react';
import styled from 'styled-components';
// import { titleOfPage } from '../../data/titleOfPage';


const ContainerTitle = styled.div`
    background-color: black;
    height: 210px;
    width: 945px;
    color: white;
    border-radius: 5px;
    z-index: 1;

    @media only screen and (max-width: 500px){
        height: 140px;
    }
    `

const TitlePages = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;

    @media only screen and (max-width: 500px){
        font-size: 3rem;
        line-height: 40px;
    }
    `

const Paragraph = styled.p`
    text-align: center;
    color: white;
    `

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -105px;

    @media only screen and (max-width: 500px){
        margin-top: 2px;
    }
    `

const TitlePage = ({ name, paragraph }) => {
    return (
        <Div className="wow animate__animated animate__fadeInUp">
            <ContainerTitle>
                <TitlePages>{name}</TitlePages>
                <Paragraph>{paragraph}</Paragraph>
            </ContainerTitle>
        </Div>
            
        
    );
};

export default TitlePage;