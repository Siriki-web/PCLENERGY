import React from 'react';
import image_about from '../../assets/img-header-about.png'
import { dataPerson } from '../../data/dataPerson'
import { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import ButtonLearnMore from '../../components/ButtonLearnMore'
import usine_solaire from '../../assets/usine-solaire.png'
import OurPartners from '../../components/OurPartner';
import OurValue from '../../components/OurValue';
import Ourhistory from '../../components/OurHistory';
import MeetOurTeam from '../../components/MeetOurTeam';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import TitlePage from '../../components/TitlePage';


const ContainerAbout = styled.div`
    position: relative;
    background-image: url(${image_about});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;        
    `

const SubContainerAbout = styled.div`
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    `

const WhoWheAre = styled.div`
    background-color: #080402;
    opacity: 1;
    `

const ImgUsine = styled.img`
    position: relative;
    height: 710px;
    width: 540px;
    margin-top: 25px;

    @media all and (max-width: 1024px){
        width: 100%;
    }
    `

const TitleWhoWeAre = styled.h1`
    color: #EFA21F;
    font-size: 70px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 50px;

    @media all and (max-width: 1024px){
        font-size: 1.625rem;
        text-align: center;
        }
    `

const StyleParagraph = styled.p`
    color: white;
    font-size: 1rem;
    text-align: justify;
    line-height: 45px;
    font-weight: 300;

    @media all and (max-width: 1024px){
        font-size: 1rem;
        line-height: 30px;
        }

    @media only screen and (max-width: 500px){
        padding: 1rem;

    }    
    `

const ContainerWhoWeAre = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 150px;
    `

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-right: 40px;
    `

const ContainerMeetOurTeam = styled.div`
    background: linear-gradient(#000000, #100000);
    padding-bottom: 20px;
    `

const TitleMeetOurTeam = styled.h1`
    text-transform: uppercase;
    text-align: center;
    color: #EFA21F;
    font-size: 90px;
    margin-top: 0px;
    padding-top: 50px;
    margin-bottom: 5px;
    font-weight: 900;

    @media all and (max-width: 1024px){
        font-size: 1.625rem;
    }
    `

const ParagraphTeam = styled.p`
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 70px;
    `
 
const DivButton = styled.div`
    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
    }
    `

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    `


const About = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
        <div>
            <ContainerAbout>
                <SubContainerAbout>
                    <Nav />
                </SubContainerAbout>
                <TitlePage name="about us" paragraph="Renewable Energy for a Sustainable World." />
            </ContainerAbout>
            <WhoWheAre>
                <ContainerWhoWeAre>
                    <DivText >
                        <TitleWhoWeAre>who we are</TitleWhoWeAre>
                        <StyleParagraph>PCL Energy is an Energy consulting firm that provides sustainable 
                            energy solutions that allow our clients to maximize their energy 
                            efficiency and operational performance while reducing their 
                            carbon footprint and operational costs. we also provide our 
                            clients with innovative energy technology solutions for the 
                            modernization of their facilites and Energy Infractructure. <br />
                            We're your No 1 Energy Consulting Firm in the whole of Africa! <br />
                            We're providing Consulting services in all of Africa and its 
                            Environs. Our Services are the most efficient and reasonably priced in the industry.
                        </StyleParagraph>
                        <DivButton><ButtonLearnMore /></DivButton>
                    </DivText>
                    <div>
                        <ImgUsine src={usine_solaire} alt="" />
                    </div>
                </ContainerWhoWeAre>
                <OurPartners />
                <OurValue />
                <Ourhistory />
                <ContainerMeetOurTeam>
                    <TitleMeetOurTeam>meet our team</TitleMeetOurTeam>
                    <ParagraphTeam>Teamwork makes the dream work. </ParagraphTeam>
                    <Ul>
                        {dataPerson.map(({ id, name, fonction, cp_twitter, cp_link, cover }) =>
                            <div key={id}>
                                <MeetOurTeam cover={cover} name={name} fonction={fonction} cp_twitter={cp_twitter} cp_link={cp_link} />
                            </div>)}
                    </Ul>
                </ContainerMeetOurTeam>
                <OurIndustry />
                <Footer />
            </WhoWheAre>

        </div>

    );
};

export default About;