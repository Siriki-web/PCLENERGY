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
    `

const TitlePages = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;

    @media all and (max-width: 1024px){
        font-size: 50px;
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
    `

const TitlePage = ({ name, paragraph }) => {
    return (
        <Div>
            <ContainerTitle>
                <TitlePages>{name}</TitlePages>
                <Paragraph>{paragraph}</Paragraph>
            </ContainerTitle>
        </Div>
            
        
    );
};

export default TitlePage;