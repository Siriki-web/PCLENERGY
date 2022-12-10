import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrow_gold from '../../assets/arrow_orange.png'


const Image = styled.img`
    height: 280px;
    width: 500px;

    @media all and (max-width: 1024px){
        width: 100%;
    }
    `

const DataPost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const Para = styled.p`
    font-size: .875rem;
    color: white;

    @media only screen and (max-width: 500px){
        font-size: .775rem;
    }
    `

const TitlePost = styled.h1`
    font-size: 13px;
    color: #EFA21F;
    `

const Button = styled.button`
    display: flex;
    align-items: center;
    color: #EFA21F;
    background: none;
    border: none;
    margin-bottom: 35px;
    margin-left: -5px;

     @media all and (max-width: 1024px){
        margin-bottom: 20px;
    }
    `

const LineHeight = styled.div`
    background-color: orange;
    height: 30px;
    width: 1px;
    `

const InsightItem = ({ id, picture, date, author, comment, titlePost, contentPost }) => {

    return (
        <div>
            <Image src={picture} alt="" />
            <DataPost>
                <Para>{date}</Para>
                <LineHeight></LineHeight>
                <Para><span style={{ color: "#EFA21F" }}>Author:</span> {author}</Para>
                <LineHeight></LineHeight>
                <Para><span style={{ color: "#EFA21F" }}>Comments:</span>{comment}</Para>
            </DataPost>
            <TitlePost>{titlePost}</TitlePost>
            <p>{contentPost}</p>
            <div key={id}>
                <Link to={`/insight/${id}`}>
                    <Button>READ NOW <img style={{ height: "8px", marginLeft: "5px" }} src={arrow_gold} alt="" /> </Button>
                </Link>
            </div>
        </div>
    );
};

export default InsightItem;