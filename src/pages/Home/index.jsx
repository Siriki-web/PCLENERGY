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



const Home = () => {

    return (
        <div>
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
        </div>

    );
};

export default Home;