import styled from "styled-components";
import arrow from '../../assets/arrow-up.png'
import React from 'react';
import Nav from "../Nav";


const Lines = styled.div`
    width: 410px;
    height: 1px;
    background-color: white;
    `

const Welcome = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: 40px;
    margin-left: 80px;
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
    margin-top: 5px
    `

const ParagraphWelcome = styled.p`
    text-transform: uppercase;
    margin-right: 5px;
    color: white;
    font-weight: 300;
    font-size: 20px;           
    `

const ParagraphPCL = styled.p`
    margin-left: 80px;
    margin-bottom: 35px;
    color: white;
    font-size: 21px;
    line-height: 30px;
    `    

const TitleH1 = styled.h1`
    line-height: 80px;
    margin-left: 80px;
    margin-top: 10px;
    margin-bottom: 2px;
    font-size: 74px;
    font-weight: 800;
`    


const Header = () => {
    return (
        <div style={{ marginBottom: "80px",
            position: "absolute",
            background: 'rgba(0,0,0,0.8)',
            opacity: '0.8',
            height: '100%',
            width: '100%' }}>
            <Nav />
            <Welcome>
                <ParagraphWelcome>welcome to pcl energy</ParagraphWelcome>
                <Lines></Lines>
            </Welcome>
            <TitleH1>
                <span style={{ color: "white" }}>The Best Source Of <br />Energy For The</span><br />
                <span style={{ color: "#EFA21F" }}>Better Tomorrow.</span>
            </TitleH1>
            <ParagraphPCL>
                PCL Energy is your Environmentally friendly Energy Company offering a broad <br />
                portfolio of Energy technologies, products and solutions Accross Africa.
            </ParagraphPCL>
            <Button>DISCOVER MORE <img style={{
                width: "15px",
                height: "15px",
                marginLeft: "5px"
            }} src={arrow} alt="arrow oblique" /></Button>
        </div>
    );
};

export default Header;