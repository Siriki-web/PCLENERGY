import React from 'react';
import plak_solaire from '../../assets/plaque-solaire.png'
import arrow_gold from '../../assets/arrow_orange.png'
import styled from 'styled-components';
import arrow_up from '../../assets/arrow-up.png'
import { Link } from 'react-router-dom';


const TitleInsight = styled.h1`
    text-transform: uppercase;
    color: #EFA21F;
    font-size: 90px;
    font-weight: 800;
    text-align: center;

    @media all and (max-width: 1024px){
        font-size: 1.625rem;
    }
`

const ImgPlak = styled.img`
    width: 345px;
    height: 207px;
    `

// const Paragraph = styled.p`
//     color: #EFA21F;
//     font-size: 22px;
//     line-height: 28px;
//     margin-top: 0px;
//     margin-bottom: 0px;
//     `

const SecondParagraph = styled.p`
    color: white;
    font-size: 18px;
    line-height: 30px;
    `

// const DateAndAuthor = styled.div`
//     display: flex;
//     justify-content: space-between;
//     `

// const NameAuthor = styled.p`
//     font-size: 12px;
//     line-height: 25px;
//     color: white;
// `

const Button = styled.button`
    background: none;
    color: #EFA21F;
    display: flex;
    align-items: center;
    border: none;

    @media all and (max-width: 1024px){
        margin-bottom: 20px;
        margin-left: -5px;
    }
    `

const ButtonMoreArticle = styled.button`
    display: flex;
    align-items: center;
    border: none;
    text-transform: uppercase;
    padding: 12px 30px;
    background-image: linear-gradient(to right, #EE6B2A, #30B24A);
    border-radius: 5px;
    color: white;
    `

const DivPrincipal = styled.div`
    background-color: #0D0D0D;
    padding-top: 20px;
    padding-bottom: 70px;
    `

const UnderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    `

const RecentInsights = ({id}) => {
    return (
        <DivPrincipal>
            <TitleInsight>recent insights</TitleInsight>
            <UnderDiv className="wow animate__animated animate__fadeInUp">
                <div>
                    <a href="https://phillipsconsulting.net/articles_post/ghana-national-gas-company-partners-with-pcl-to-launch-a-corporate-digital-learning-platform/">
                        <ImgPlak src={plak_solaire} alt="" />
                    </a>
                    <SecondParagraph>
                        Ghana National Gas Company Partners <br /> with pcl. to Launch a Corporate Digital <br /> Learning Platform 
                    </SecondParagraph>
                    <a href="https://phillipsconsulting.net/articles_post/ghana-national-gas-company-partners-with-pcl-to-launch-a-corporate-digital-learning-platform/ ">
                        <Button>READ NOW <img style={{ marginLeft: "10px", height: "8px" }} src={arrow_gold} alt="" /></Button>
                    </a>
                </div>
                <div>
                    <a href="https://phillipsconsulting.net/articles_post/leveraging-capacity-building-to-boost-business-growth/">
                        <ImgPlak src={plak_solaire} alt="" />
                    </a>
                    <SecondParagraph>
                       Leveraging Capacity Building to Boost <br /> Business Growth 
                    </SecondParagraph>
                    <a href='https://phillipsconsulting.net/articles_post/leveraging-capacity-building-to-boost-business-growth/ '>
                        <Button>READ NOW <img style={{ marginLeft: "10px", height: "8px" }} src={arrow_gold} alt="" /></Button>
                    </a>
                </div>
                <div>
                    <a href="https://phillipsconsulting.net/articles_post/data-governance-a-precursor-for-digital-transformation/ ">
                        <ImgPlak src={plak_solaire} alt="" />
                    </a>
                    <SecondParagraph>
                        Data Governance: A Precursor for Digital <br /> Transformation 
                    </SecondParagraph>
                    <a href='https://phillipsconsulting.net/articles_post/data-governance-a-precursor-for-digital-transformation/ '>
                        <Button>READ NOW <img style={{ marginLeft: "10px", height: "8px" }} src={arrow_gold} alt="" /></Button>
                    </a>
                </div>
            </UnderDiv>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>
                <Link to='/insight'>
                    <ButtonMoreArticle>more articles <img style={{ marginLeft: "5px", height: "12px" }} src={arrow_up} alt="" /></ButtonMoreArticle>
                </Link>
            </div>
        </DivPrincipal>
    );
};

export default RecentInsights;