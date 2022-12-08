import React from 'react';
import styled from 'styled-components';
// import backImage from "../../assets/fond-header.png"
import backImage from '../../assets/hero-image.jpg'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OurIndustry from '../../components/OurIndustry';
import OurServices from '../../components/OurServices';
import RecentInsights from '../../components/RecentInsights';
import WhoWeAre from '../../components/WhoWeAre';
import WhyChooseUs from '../../components/WhyChooseUs';
import WorkStatistics from '../../components/WorkStatistics';


const SubDiv = styled.div`
    position: relative;
    background-image: url(${backImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 770px;

    @media all and (max-width: 1024px){ 
        padding-bottom: 170px;
    }
    `

const Container = styled.div`
    @media only screen and (max-width: 500px){
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }`

const Home = () => {

    return (
        <Container>
            <SubDiv>
                <Header />
            </SubDiv>
            <WhoWeAre />
            <OurServices />
            <WhyChooseUs />
            <WorkStatistics />
            <RecentInsights />
            <OurIndustry />
            <Footer />
        </Container>

    );
};

export default Home;