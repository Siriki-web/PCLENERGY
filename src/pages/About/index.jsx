import React from 'react';
import image_about from '../../assets/img-header-about.png'
import { dataPerson } from '../../data/dataPerson'
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
        font-size: 50px;
        text-align: center;
        }
    `

const StyleParagraph = styled.p`
    color: white;
    font-size: 20px;
    line-height: 45px;
    font-weight: 300;

    @media all and (max-width: 1024px){
        font-size: 16px;
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
    `

const ParagraphTeam = styled.p`
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 70px;
    `

// // const CardEnergy = styled.div`
// //     position: absolute;
// //     bottom: -643px;
// //     right: 440px;
// //     opacity: 1;
// //     color: white;
// //     width: 175px; 
// //     height: 140px; 
// //     background-image: linear-gradient(to right, #EFA21F, #32B34A);
// `    

const DivButton = styled.div`
    @media all and (max-width: 1024px){
        display: flex;
        justify-content: center;
    }
    `


const About = () => {

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
                    <div>
                        <TitleWhoWeAre>who we are</TitleWhoWeAre>
                        <StyleParagraph>PCL Energy is an Energy consulting firm that provides sustainable <br />
                            energy solutions that allow our clients to maximize their energy <br />
                            efficiency and operational performance while reducing their <br />
                            carbon footprint and operational costs. we also provide our <br />
                            clients with innovative energy technology solutions for the <br />
                            modernization of their facilites and Energy Infractructure. <br /><br />
                            We're your No 1 Energy Consulting Firm in the whole of Africa! <br /><br />
                            We're providing Consulting services in all of Africa and its <br />
                            Environs. Our Services are the most efficient and reasonably <br />priced in the industry.
                        </StyleParagraph>
                        <DivButton><ButtonLearnMore /></DivButton>
                    </div>
                    <div>
                        <ImgUsine src={usine_solaire} alt="" />
                        {/* <CardEnergy>
                                <h3 style={{marginLeft: "10px", marginTop: "50px"}}>ENERGY IS THE FUTURE, MAKE IT BRILLIANT</h3>
                        </CardEnergy> */}
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