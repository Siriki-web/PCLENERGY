import React from 'react';
import right_arrow from '../../assets/right-arrow.png'
import logo from '../../assets/logo-pcll.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import '../../style/NavStyle.css'
import { useState } from 'react';




const StyledLink = styled(Link)`
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 15px;

    ${(props) =>
        props.$isFullLink &&
        `color: white;
        border-radius: 5px;
        background-image: linear-gradient(to right, #2BAF49, #EE6B2A);
        text-transform: uppercase;

        @media all and (max-width: 1024px){
            margin-right: 60px;
            }
        `
    }
    `

const DivNav = styled.div`
    display: flex; 
    align-items: center;
    padding-top: 20px;
    margin-left: 65px;
    `

const Img = styled.img`
    height: 75px;
    width: 79px;
    margin-right: 70px;

    @media all and (max-width: 1024px) {
        margin-left: -50px;
    }
    `


const Nav = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const Close = () => setClick(false)

    return (
        <div className={click ? "main-container" : ""} onClick={() => Close()}>
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <DivNav>
                    <Img src={logo} alt="logo du site" />
                    <ul className={click ? "navMenu active" : "navMenu"}>
                        <li className="navItem">
                            <StyledLink to="/" className='navLinks' activeClassName="active" onClick={click ? handleClick : null} >Home</StyledLink>
                        </li>
                        <li className="navItem">
                            <StyledLink to="/about" className='navLinks' activeClassName="active" onClick={click ? handleClick : null} >About</StyledLink>
                        </li>
                        <li className="navItem">
                            <StyledLink to="/service" className='navLinks' activeClassName="active" onClick={click ? handleClick : null} >Our Services</StyledLink>
                        </li>
                        <li className="navItem">
                            <StyledLink to="/insight" className='navLinks' activeClassName="active" onClick={click ? handleClick : null} >Our Insights</StyledLink>
                        </li>
                        <li className="navItem">
                            <StyledLink to="/contact" className='navLinks' activeClassName="active" onClick={click ? handleClick : null} >Contact Us</StyledLink>
                        </li>
                        <button style={{background: "none", border: "none"}}>
                            <StyledLink to="/download" $isFullLink>Download report <img style={{ width: "15px", marginLeft: "4px" }} src={right_arrow} alt="" /></StyledLink>
                        </button>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                </DivNav>
            </nav>
        </div>
    );
};

export default Nav;