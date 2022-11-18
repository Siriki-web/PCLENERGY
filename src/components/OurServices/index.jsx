import React from 'react';
import styled from 'styled-components';
import services from '../../assets/service.PNG'
import ButtonLearnMore from '../ButtonLearnMore';


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
    `

const TextServices = styled.p`
    font-size: 25px;
    text-align: center;
    color: white;
    margin-bottom: 70px;
    `    

const ImgServices = styled.img`
    display: block;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
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
            <ImgServices src={services} alt="" />
            <ImageDiv><ButtonLearnMore /></ImageDiv>
        </Container>
    );
};

export default OurServices;