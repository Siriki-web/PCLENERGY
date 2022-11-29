import React from 'react';
import styled from 'styled-components';
import usine_solaire from '../../assets/usine-solaire.png'
import ButtonLearnMore from '../ButtonLearnMore';


const ContainerWhoWeAre = styled.div`
    background-color: #0D0D0D;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 50px;
    height: 100%;
    `

const StyleParagraph = styled.p`
    color: white;
    font-size: 20px;
    line-height: 45px;
    font-weight: 300;

    @media all and (max-width: 1024px){
        font-size: 1rem;
        line-height: 30px;
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
    height: 710px;
    width: 540px;
    margin-top: 25px;

    @media all and (max-width: 1024px){
        width: 100%;
    }
    `

const DivButton = styled.div`
    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `

const WhoWeAre = () => {
    return (
        <ContainerWhoWeAre>
            <ImgUsine src={usine_solaire} alt="" />
            <div>
                <TitleWhoWeAre>WHO WE ARE</TitleWhoWeAre>
                <StyleParagraph>PCL Energy is an Energy Consulting firm that provides sustainable <br />
                    energy solutions that allow our clients to maximize their energy <br />
                    efficiency and operational performance while reducing their carbon <br />
                    footprint and operational costs. we also provide our clients with <br />
                    innovative energy technology solutions for the modernization of their <br />
                    facilities and Energy Infrastructure. <br /><br /> We’re your <span style={{ color: "#EFA21F" }}>No 1</span> Energy Consulting Firm in the whole of Africa! <br /><br />
                    We’re providing Consulting services in all of Africa and its Environs. <br /> Our Services are the most efficient and reasonably priced in the <br />
                    industry.
                </StyleParagraph>
                <DivButton><ButtonLearnMore /></DivButton>
            </div>
        </ContainerWhoWeAre>
    )
};

export default WhoWeAre;