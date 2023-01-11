import styled from "styled-components";
import arrow from '../../assets/arrow-up.png'
import React from 'react';
import Nav from "../Nav";
import { Link } from "react-router-dom";




const ContainerHome = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    `

const Lines = styled.div`
    width: 370px;
    height: 1px;
    background-color: white;

     @media only screen and (max-width: 500px){
        width: 100px;
        margin-right: 10px;
    }
    `

const Welcome = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: 40px;
    margin-left: 80px;

    @media only screen and (max-width: 500px){
        margin-left: 2px;
    }
    `

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 12px 25px;
    background-image: linear-gradient(to right, #EE6B2A, #2BAF49);
    border: none; 
    color: white;
    border-radius: 5px; 
    margin-left: 80px; 
    margin-top: 5px;
    cursor: pointer;
    `

const DivButton = styled.div`
    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
        margin-right: 80px;
    }
    `

const ParagraphWelcome = styled.p`
    text-transform: uppercase;
    margin-right: 5px;
    color: white;
    font-weight: 300;
    font-size: 20px;           

    @media only screen and (max-width: 500px){
        padding-left: .75rem;
        
    }
    `

const ParagraphPCL = styled.p`
    margin-left: 80px;
    margin-bottom: 35px;
    color: white;
    font-size: 20px;
    line-height: 30px;
    width: 52%;

    @media only screen and (max-width: 500px){
        padding-left: 12px;
        font-size: 1rem;
        text-align: justify;
        width: 92%;
        margin-left: 0;
    }
    `

const TitleH1 = styled.h1`
    line-height: 80px;
    margin-left: 80px;
    margin-top: 10px;
    margin-bottom: 2px;
    font-size: 74px;
    font-weight: 900;
    text-align: left;

    @media only screen and (max-width: 500px){
        margin-left: 12px;
        font-size: 2rem;
        line-height: 60px;
    }
`


const Header = () => {
    return (
        <ContainerHome>
            <Nav />
            <Welcome className="wow animate__animated animate__fadeInLeft">
                <ParagraphWelcome>welcome to pcl energy</ParagraphWelcome>
                <Lines></Lines>
            </Welcome>
            <TitleH1 className="wow animate__animated animate__fadeInLeft">
                <span style={{ color: "white" }}>The Best Source Of <br />Energy For The</span><br />
                <span style={{ color: "#EFA21F" }}>Better Tomorrow.</span>
            </TitleH1>
            <ParagraphPCL className="wow animate__animated animate__fadeInLeft">
                PCL Energy is your Environmentally friendly Energy Company offering a broad 
                portfolio of Energy technologies, products and solutions Accross Africa.
            </ParagraphPCL>
            <DivButton className="wow animate__animated animate__fadeInLeft">
                <Link style={{textDecoration: "none"}} to='/service'>
                    <Button>DISCOVER MORE <img style={{
                        width: "15px",
                        height: "15px",
                        marginLeft: "5px"
                    }} src={arrow} alt="arrow oblique" />
                    </Button>
                </Link>
            </DivButton>
        </ContainerHome>
    );
};

export default Header;