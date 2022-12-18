import React from 'react';
import styled from 'styled-components';
import ButtonLearnMore from '../ButtonLearnMore';
import TheService from '../TheService';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background-color: #000000;
    padding-bottom: 40px;
    `

const TitleServices = styled.h1`
    margin-top:0;
    margin-bottom: 5px;
    padding-top: 50px;
    text-transform: uppercase;
    font-size: 90px;
    color: #EFA21F;
    text-align: center;

    @media only screen and (max-width: 500px){
        font-size: 1.5rem;
        line-height: 100px;
    }
    `

const TextServices = styled.p`
    font-size: 25px;
    text-align: center;
    color: white;
    margin-bottom: 70px;

    @media only screen and (max-width: 500px){
        font-size: 1rem;
        padding: 1rem;
    } 
    `        

const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    `    

const OurServices = () => {
    return (
        <Container>
            <TitleServices>our services</TitleServices>
            <TextServices>Make the energy choice that's good for business - and the planet.</TextServices>
            <div className="wow animate__animated animate__heartBeat">
                <TheService />
            </div>
            <ImageDiv>
                <Link style={{textDecoration: "none"}} to='/service'>
                    <ButtonLearnMore />
                </Link>
            </ImageDiv>
        </Container>
    );
};

export default OurServices;