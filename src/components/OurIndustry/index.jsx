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
        font-size: 30px;
        text-align: justify;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `

    const Br = styled.br`
        @media only screen and (max-width: 500px){
            display: none;
            
        }
    `


// const ButtonDownloade = styled.button`
//     display: flex;
//     align-items: center;
//     border: none;
//     padding: 12px 15px;
//     color: white;
//     border-radius: 5px;
//     background-image: linear-gradient(to right, #EE6B2A, #2BAF49);
//     text-align: center;
//     &:hover{
//         border: 1px solid #EFA21F;
//         color: #EFA21F;
//         background: rgb(0,0,0,0.9);
//     }
//     `

// const Image = styled.img`
//     height: 10px;
//     margin-left: 5px;
//     `



const OurIndustry = () => {
    return (
        <ContainerIndustry>
            <Container>
                <StyleH2>Our Industry Experience Enables Us To Provide <Br />
                    In-depth Material Sourcing, Financing And <Br />
                    Supply Chain Expertise For Every Step!
                </StyleH2>
                {/* <ButtonDownload>DOWNLOAD REPORT <Image src={arrow_right} alt="" /></ButtonDownload> */}
                <ButtonDownload />
            </Container>
        </ContainerIndustry>
    );
};

export default OurIndustry;