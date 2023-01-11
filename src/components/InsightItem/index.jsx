import React from 'react';
import styled from 'styled-components';
import arrow_gold from '../../assets/arrow_orange.png'


const Image = styled.img`
    height: 280px;
    width: 520px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    `

const TitlePost = styled.h1`
    font-size: 13px;
    color: #EFA21F;
    `

const ButtonA = styled.a`
    display: flex;
    align-items: center;
    color: #EFA21F;
    background: none;
    border: none;
    margin-bottom: 35px;
    margin-left: 0;

     @media all and (max-width: 1024px){
        margin-bottom: 20px;
    }
    `

const PrincipalDiv = styled.div`
    width: 75%;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
`

const InsightItem = ({ id, picture, titlePost }) => {

    return (
        <PrincipalDiv className="wow animate__animated animate__fadeInUp">
            <a href={`${id}`} target="_blank" rel="noreferrer noopener">
                <Image src={picture} alt="" />
            </a>
            <TitlePost>{titlePost}</TitlePost>
            <div key={id}>
                <ButtonA href={`${id}`} target="_blank" rel="noreferrer noopener">READ NOW
                     <img style={{ height: "8px", marginLeft: "5px" }} src={arrow_gold} alt="" />
                </ButtonA>
            </div>
        </PrincipalDiv>
    );
};

export default InsightItem;