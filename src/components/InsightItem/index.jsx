import React from 'react';
import styled from 'styled-components';
import arrow_gold from '../../assets/arrow_orange.png'
// import { CiSearch } from 'react-icons/ci'



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
    font-size: 10px;
    color: white;
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
    `

const InsightItem = ({ picture, date, author, comment, titlePost, contentPost, categoryPost }) => {
    return (
        <div>
            <Image src={picture} alt="" />
            <DataPost>
                <Para>{date}</Para>
                <div style={{ backgroundColor: "orange", height: "30px", width: "1px" }}></div>
                <Para><span style={{ color: "#EFA21F" }}>Author:</span> {author}</Para>
                <div style={{ backgroundColor: "orange", height: "30px", width: "1px" }}></div>
                <Para><span style={{ color: "#EFA21F" }}>Comments:</span>{comment}</Para>
            </DataPost>
            <TitlePost>{titlePost}</TitlePost>
            <p>{contentPost}</p>
            <Button>READ NOW <img style={{ height: "8px", marginLeft: "5px" }} src={arrow_gold} alt="" /></Button>
        </div>
    );
};

export default InsightItem;