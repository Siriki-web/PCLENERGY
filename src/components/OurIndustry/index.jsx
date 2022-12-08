import React from 'react';
import img_our_industry from '../../assets/image-our-industry.png'
// import arrow_right from '../../assets/right-arrow.png'
import styled from 'styled-components';
import ButtonDownload from '../ButtonDownload';



const ContainerIndustry = styled.div`
    position: relative;
    background-image: url(${img_our_industry});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

    @media all and (max-width: 1024px){
        width: 100%;
        height: 400px;
    }
    `

const Container = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const StyleH2 = styled.h2`
    margin-top: 0;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    color: white;

    @media only screen and (max-width: 500px){
        font-size: 1.2rem;
        text-align: center;
        width: 88%;
        
    }
    `

    const Br = styled.br`
        @media only screen and (max-width: 500px){
            display: none;
            
        }
    `


const OurIndustry = () => {
    return (
        <ContainerIndustry>
            <Container>
                <StyleH2>Our Industry Experience Enables Us To Provide <Br />
                    In-depth Material Sourcing, Financing And <Br />
                    Supply Chain Expertise For Every Step!
                </StyleH2>
                <ButtonDownload />
            </Container>
        </ContainerIndustry>
    );
};

export default OurIndustry;