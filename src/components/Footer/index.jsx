import React from 'react';
import logo from '../../assets/logo-white.png'
import right_arrow from '../../assets/right-arrow.png'
import { Link } from 'react-router-dom'
import { GrLinkedinOption } from 'react-icons/gr'
import { GrTwitter } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import styled from 'styled-components';


const InputText = styled.input`
    width: 300px;
    height: 40px;
    margin-right: 20px;
    background-color: #2C2C2C;
    border: none;
    color: white;
    `

const ButtonSubmitted = styled.button`
    border: none;
    color: white;
    padding: 12px 17px;
    background-image: linear-gradient(to right, #2BAF49, #EE6B2A);
    
    @media only screen and (max-width: 500px){
        margin-top: 10px;
        border-radius: 0;
        margin-left: 0;
        font-weight: bold;
    }
    `

const Container = styled.div`
    background-color: black;
    `

const UnderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
    padding-bottom: 50px;

    @media all and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `

const ImgLogo = styled.img`
    margin-left: 20px;
    width: 90px;
    `

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-right: 20px;

    @media only screen and (max-width: 500px){
        margin: 10px;
    }
`

const FirstRowLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;

    @media all and (max-width: 1024px){
        flex-direction: column;
        margin-right: 20px;
        margin-left: -120px;
    }
    `

const SecondRowLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
    margin-bottom: 10px;

    @media all and (max-width: 1024px){
        flex-direction: column;
        margin-bottom: 0;
    }
    `


const DivIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;

    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
        margin-right: 20px;
        margin-left: -60px;
    }
    `

const IconSocialNetwork = styled.div`
    background-image: linear-gradient(to bottom, #2BAF49, #EE6B2A);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 20px;

    @media only screen and (max-width: 500px){
    
    }
`

const Copyright = styled.p`
    color: white;
    text-align: center;
    padding-bottom: 30px;

    @media all and (max-width: 1024px){
        text-align: center;
        margin-left: 0;
    }
    `

const Divizer = styled.hr`
    border: none;
    background-color: #EFA21F;
    height: 1px;
    `

const SubscribeNewsletter = styled.div`
    @media all and (max-width: 1024px){
        margin-left: 18px;
        margin-bottom: 30px;
    }
    `

const LinkMob = styled.div`
    @media only screen and (max-width: 500px){
        display: flex;

    }`

const Logo = styled.div`
    display: flex;

    @media only screen and (max-width: 500px){
        margin-left: -75px;
    }
    `


const Footer = () => {
    return (
        <Container>
            <UnderContainer>
                <div>
                    <ImgLogo src={logo} alt="" /> <br />
                    <SubscribeNewsletter>
                        <p style={{ color: "white" }}>Subscribe to Our Newsletter</p>
                        <InputText type="email" /><ButtonSubmitted>SUBMIT <img style={{ width: "15px", marginLeft: "4px" }} src={right_arrow} alt="" /></ButtonSubmitted>
                    </SubscribeNewsletter>
                </div>
                <div>
                    <LinkMob>
                        <FirstRowLink>
                            <StyledLink to='/contact'>Contact Us</StyledLink>
                            <StyledLink to='/faq'>FAQ</StyledLink>
                        </FirstRowLink>
                        <SecondRowLink>
                            <StyledLink to='/privacy'>Privacy Policy</StyledLink>
                            <StyledLink to='/legal'>Legal Policy</StyledLink>
                        </SecondRowLink>
                    </LinkMob>

                    <DivIcon>
                        <Logo>
                            <IconSocialNetwork><GrLinkedinOption style={{ padding: "11px", color: "white" }} /></IconSocialNetwork>
                            <IconSocialNetwork><GrTwitter style={{ padding: "11px", color: "white" }} /></IconSocialNetwork>
                            <IconSocialNetwork><MdEmail style={{ padding: "11px", color: "white" }} /></IconSocialNetwork>
                            <IconSocialNetwork><GrFacebookOption style={{ padding: "11px", color: "white" }} /></IconSocialNetwork>
                        </Logo>
                    </DivIcon>
                </div>
            </UnderContainer>
            <Divizer />
            <Copyright>&copy; PCL Energy {new Date().getFullYear()}</Copyright>
        </Container>

    );
};

export default Footer;