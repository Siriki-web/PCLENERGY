import React from 'react';
import backImage from "../../assets/fond-header.png"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OurIndustry from '../../components/OurIndustry';
import OurServices from '../../components/OurServices';
import RecentInsights from '../../components/RecentInsights';
import WhoWeAre from '../../components/WhoWeAre';
import WhyChooseUs from '../../components/WhyChooseUs';
import WorkStatistics from '../../components/WorkStatistics';
// import OurIndustry from '../../components/OurIndustry';
// import ButtonLearnMore from '../../components/ButtonLearnMore';

const Home = () => {

    return (
        <div>
            <div style={{
                position: "relative",
                backgroundImage: `url("${backImage}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "770px"}}>
                <Header />
            </div>
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