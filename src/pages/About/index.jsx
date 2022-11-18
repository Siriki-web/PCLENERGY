import React from 'react';
import image_about from '../../assets/img-header-about.png'
import Nav from '../../components/Nav';
import styled from 'styled-components';
import ButtonLearnMore from '../../components/ButtonLearnMore'
import usine_solaire from '../../assets/usine-solaire.png'
import OurPartners from '../../components/OurPartner';
import OurValue from '../../components/OurValue';
import Ourhistory from '../../components/OurHistory';
import { dataPerson } from '../../data/dataPerson'
import MeetOurTeam from '../../components/MeetOurTeam';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';


const AboutUs = styled.div`
    position: absolute;
    top: 310px;
    right: 15%;
    background-color: black;
    height: 210px;
    width: 945px;
    color: white;
    `

const TitleAbout = styled.h1`
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;
    `

const ParagrahAbout = styled.p`
    text-align: center;
    `

const WhoWheAre = styled.div`
    background-color: #080402;
    opacity: 1;
    height: 1370px;
    `

const ImgUsine = styled.img`
    // position: relative;
    height: 710px;
    width: 540px;
    margin-top: 25px;
    `

const TitleWhoWeAre = styled.h1`
    color: #EFA21F;
    font-size: 70px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 50px;
    `

const StyleParagraph = styled.p`
    color: white;
    font-size: 20px;
    line-height: 45px;
    font-weight: 300;
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
    height: 700px;
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

// const CarreEnergyFutures = styled.div`
//     position: absolute;
//     top: 500px;
//     height: 313px;
//     width: 419px;
//     background-image: linear-gradient(to right, #32B34A, #EFA21F);
//     `



const About = () => {
    
    return (
        <div>
            <div style={{
                position: "relative",
                backgroundImage: `url("${image_about}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "415px"
            }}>
                <div style={{position: "absolute",
                    background: 'rgba(0,0,0,0.8)',
                    opacity: '0.8',
                    height: '100%',
                    width: '100%'}}>
                    <Nav />
                </div>
                <AboutUs>
                    <TitleAbout>ABOUT US</TitleAbout>
                    <ParagrahAbout>Renewable Energy for a Sustainable World.</ParagrahAbout>
                </AboutUs>
            </div>
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
                        <ButtonLearnMore />
                    </div>
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