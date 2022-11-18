import React from 'react';
import right_arrow from '../../assets/right-arrow.png'
import logo from '../../assets/logo-pcll.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import '../../style/NavStyle.css'

const StyledLink = styled(Link)`
    padding: 10px;
    // margin: 20px;
    color: white;
    text-decoration: none;
    font-size: 15px;
  }
    ${(props) =>
        props.$isFullLink &&
        `color: white;
        border-radius: 5px;
        background-image: linear-gradient(to right, #2BAF49, #EE6B2A);
        text-transform: uppercase;
        `
    }
  
   
    `

const DivNav = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    margin-left: 25px;
    
    `

const Img = styled.img`
    height: 75px;
    width: 79px;
    margin-right: 50px;
    `


const Nav = () => {
    return (
        <DivNav>
            <Img src={logo} alt="logo du site" />
            <StyledLink className='menu-link' to="/">Home</StyledLink>
            <StyledLink className='menu-link' to="/about">About us</StyledLink>
            <StyledLink className='menu-link' to="/service">Our Services</StyledLink>
            <StyledLink className='menu-link' to="/insight">Our Insights</StyledLink>
            <StyledLink className='menu-link' to="/contact">Contact Us</StyledLink>
            <StyledLink to="/download" $isFullLink>Download report <img style={{width: "15px", marginLeft: "4px"}} src={right_arrow} alt="" /></StyledLink>
        </DivNav>
    );
};

export default Nav;