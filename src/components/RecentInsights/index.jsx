import React from 'react';
import plak_solaire from '../../assets/plaque-solaire.png'
import arrow_gold from '../../assets/arrow_orange.png'
import styled from 'styled-components';
import arrow_up from '../../assets/arrow-up.png'


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

const Paragraph = styled.p`
    color: #EFA21F;
    font-size: 22px;
    line-height: 28px;
    margin-top: 0px;
    margin-bottom: 0px;
    `

const SecondParagraph = styled.p`
    color: white;
    font-size: 18px;
    line-height: 30px;
    `

const DateAndAuthor = styled.div`
    display: flex;
    justify-content: space-between;
    `

const NameAuthor = styled.p`
    font-size: 12px;
    line-height: 25px;
    color: white;
`        

const Button = styled.button`
    background: none;
    color: #EFA21F;
    display: flex;
    align-items: center;
    border: none;

    @media all and (max-width: 1024px){
        margin-bottom: 20px;
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

const RecentInsights = () => {
    return (
        <div style={{ backgroundColor: "#0D0D0D", paddingTop: "20px", paddingBottom: "70px"}}>
            <TitleInsight>recent insights</TitleInsight>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                <div>
                    <ImgPlak src={plak_solaire} alt="" />
                    <DateAndAuthor>
                        <NameAuthor>30th October, 2022</NameAuthor>
                        <NameAuthor>Daniels Williams</NameAuthor>
                    </DateAndAuthor>
                    <Paragraph>How to Add Battery Backup to an <br />Existing Grid Tied Solar System by <br />Yourself!</Paragraph>
                    <SecondParagraph>
                        The Boolean Tech has a zeal in this sector <br />
                        that makes us one of the most sought after <br />
                        development companies in the region. The <br />
                        Boolean Tech has a zeal in this sector that.
                    </SecondParagraph>
                    <Button>READ NOW <img style={{marginLeft: "10px", height: "8px"}} src={arrow_gold} alt="" /></Button>
                </div>
                <div>
                    <ImgPlak src={plak_solaire} alt="" />
                    <DateAndAuthor>
                        <NameAuthor>30th October, 2022</NameAuthor>
                        <NameAuthor>Daniels Williams</NameAuthor>
                    </DateAndAuthor>
                    <Paragraph>How to Add Battery Backup to an <br />Existing Grid Tied Solar System by <br />Yourself!</Paragraph>
                    <SecondParagraph>
                        The Boolean Tech has a zeal in this sector <br />
                        that makes us one of the most sought after <br />
                        development companies in the region. The <br />
                        Boolean Tech has a zeal in this sector that.
                    </SecondParagraph>
                    <Button>READ NOW <img style={{marginLeft: "10px", height: "8px"}} src={arrow_gold} alt="" /></Button>
                </div>
                <div>
                    <ImgPlak src={plak_solaire} alt="" />
                    <DateAndAuthor>
                        <NameAuthor>30th October, 2022</NameAuthor>
                        <NameAuthor>Daniels Williams</NameAuthor>
                    </DateAndAuthor>
                    <Paragraph>How to Add Battery Backup to an <br />Existing Grid Tied Solar System by <br />Yourself!</Paragraph>
                    <SecondParagraph>
                        The Boolean Tech has a zeal in this sector <br />
                        that makes us one of the most sought after <br />
                        development companies in the region. The <br />
                        Boolean Tech has a zeal in this sector that.
                    </SecondParagraph>
                    <Button>READ NOW <img style={{marginLeft: "10px", height: "8px"}} src={arrow_gold} alt="" /></Button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "70px"}}>
                <ButtonMoreArticle>more articles <img style={{marginLeft: "5px", height: "12px"}} src={arrow_up} alt="" /></ButtonMoreArticle>
            </div>
        </div>
    );
};

export default RecentInsights;