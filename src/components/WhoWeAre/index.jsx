import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import usine_solaire from '../../assets/usine-solaire.png'
import ButtonLearnMore from '../ButtonLearnMore';


const ContainerWhoWeAre = styled.div`
    background-color: #0D0D0D;
    display: flex;
    justify-content: space-around;
    // flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 50px;
    height: 100%;
    `

const StyleParagraph = styled.p`
    color: white;
    font-size: 1rem;
    text-align: justify;
    line-height: 45px;
    font-weight: 300;

    @media all and (max-width: 1024px){
        font-size: 1rem;
        line-height: 30px;
        }

    @media only screen and (max-width: 500px){
        padding: 1rem;
        text-align: justify;

    }    
    `

const TitleWhoWeAre = styled.h1`
    color: #EFA21F;
    font-size: 70px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 50px;
    margin-bottom: 40px;

    @media all and (max-width: 1024px){
        text-align: center;
        font-size: 1.625rem;
        }
        
    `

const ImgUsine = styled.img`
    height: 600px;
    width: 450px;
    margin-top: 25px;

    @media all and (max-width: 1024px){
        width: 100%;
    }

    @media only screen and (max-width:500px){
        display: none;
    }
    `

const DivButton = styled.div`
    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    `

const WhoWeAre = () => {
    return (
        <ContainerWhoWeAre>
            <ImgUsine src={usine_solaire} alt="" />
            <DivText>
                <TitleWhoWeAre>WHO WE ARE</TitleWhoWeAre>
                <StyleParagraph>PCL Energy is an Energy Consulting firm that provides sustainable 
                    energy solutions that allow our clients to maximize their energy 
                    efficiency and operational performance while reducing their carbon 
                    footprint and operational costs. we also provide our clients with 
                    innovative energy technology solutions for the modernization of their 
                    facilities and Energy Infrastructure. <br /> We’re your <span style={{ color: "#EFA21F" }}>No 1</span> Energy Consulting Firm in the whole of Africa!<br />
                    We’re providing Consulting services in all of Africa and its Environs. Our Services are the most efficient and reasonably priced in the 
                    industry.
                </StyleParagraph>
                <DivButton>
                    <Link style={{textDecoration: "none"}} to='/about'>
                        <ButtonLearnMore />
                    </Link>
                </DivButton>
            </DivText>
        </ContainerWhoWeAre>
    )
};

export default WhoWeAre;