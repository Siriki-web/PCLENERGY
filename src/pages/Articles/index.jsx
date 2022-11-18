import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import human from '../../assets/human-figurines.png'
import mariana from '../../assets/mariana-proenca.png';
import { dataOurInsights } from '../../data/dataOurInsights'
import { GrTwitter } from 'react-icons/gr'
import { GrFacebookOption } from 'react-icons/gr'
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import RecentPost from '../../components/RecentPost';
import { FiDownload } from 'react-icons/fi';



const OurInsights = styled.div`
    position: absolute;
    top: 310px;
    right: 15%;
    background-color: black;
    height: 210px;
    width: 945px;
    color: white;
    border-radius: 5px;
    `

const TitleInsight = styled.h1`
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;
    `

const ParagrahInsight = styled.p`
    text-align: center;
    `



const Articles = () => {
    return (
        <div style={{ backgroundColor: "#0D0D0D" }}>
            <div style={{
                position: "relative",
                backgroundImage: `url("${human}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "415px"
            }}>
                <div style={{
                    position: "absolute",
                    background: 'rgba(0,0,0,0.8)',
                    opacity: '0.8',
                    height: '100%',
                    width: '100%'
                }}>
                    <Nav />
                </div>
                
                <OurInsights>
                    <TitleInsight>OUR INSIGHTS</TitleInsight>
                    <ParagrahInsight>Renewable Energy for a Sustainable World.</ParagrahInsight>
                </OurInsights>
            </div>
            <div style={{paddingTop: "120px", marginBottom: "90px"}}>
                <h3 style={{fontWeight: "normal", marginLeft: "150px", color: "white"}}><span>Home Our Insights Articles</span> How to Add Battery Backup to an Existing Grid... ... ... ... </h3>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <img style={{height: '280px', width: '500px'}} src={mariana} alt="" />
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style={{color: "white"}}>30th October, 2022</p>
                            <div style={{width: "1px", height: "25px", backgroundColor: "#EFA21F"}}></div>
                            <p style={{color: "white"}}><span style={{color: "#EFA21F"}}>Author:</span>Daniels Williams</p>
                            <div style={{width: "1px", height: "25px", backgroundColor: "#EFA21F"}}></div>
                            <p style={{color: "white"}}><span style={{color: "#EFA21F"}}>Comments:</span>5</p>
                        </div>
                        <h2 style={{color: "#EFA21F"}}>How to Add Battery Backup to an Existing Grid Tied <br />Solar System by Yourself!</h2>
                        <p style={{color: "white"}}>The Boolean Tech has a zeal in this sector that makes us one of the most sought after <br /> development companies in the region. The Boolean Tech has a zeal in this sector that. <br /> The key requirement of this work package is the development of a database (and <br /> supporting summary report), compiling information for potential renewable energy <br /> business and technology solutions to help overcome environmental and climatic <br /> challenges in the NPA programme region. Technology solutions cover installation, <br /> operation and maintenance of equipment, not the design and manufacture of <br /> components. <br /><br /> The objective of the database is to identify the main environmental and climatic <br /> challenges, and outline technological and business solutions to these challenges, creating <br /> a database of these for 8 different categories of renewable energy technology. It is <br /> designed for use by new and existing renewable energy businesses, to inform them of <br /> the challenges they may face in developing their business and how these will be <br /> overcome. <br /><br /> A range of examples (where available) have been highlighted on how the challenges <br /> identified have been overcome. Specific regional related innovations and smart solutions <br /> from local business on technology driven RE-solutions have been documented, with the <br /> intention of passing on this knowledge to other regions in the NPA not involved in the <br /> GREBE Project. <br /><br /> Global climate change impacts Europe in many ways, including: changes in average and <br /> extreme temperature and precipitation, warmer oceans, rising sea level and shrinking <br /> snow and ice cover on land and at sea. These weather phenomenons have led to a <br /> range of impacts on ecosystems, socio-economic sectors and human health and safety. <br /> There is no doubt that the changes in climate will have a strong impact in our daily life, <br /> whether we accept extreme weather conditions as a new phenomenon or not. <br /><br /> Adaptation to the past history data, present observed and future predicted impacts will <br /> in the coming decades be needed, as well as be complementary to global climate <br /> mitigation actions. Narvik Science Park has made a report on this in the GREBE-Project.</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "10px", width: "600px", height: "70px", border: "1px solid #EFA21F"}}>
                            <p style={{color: "white", marginLeft: "50px"}}>Share This Insight?</p>
                            <div style={{display: "flex", marginRight: "50px"}}>
                                <div style={{height: "20px", width: "20px", backgroundImage: "linear-gradient(#32B34A, #EFA21F)", borderRadius: "50%"}}><GrTwitter /></div>
                                <div style={{height: "20px", width: "20px", backgroundImage: "linear-gradient(#32B34A, #EFA21F)", borderRadius: "50%"}}><GrFacebookOption /></div>
                            </div>
                        </div>
                        <h2 style={{color: "#EFA21F"}}>COMMENTS</h2>
                        <form>
                            <input style={{backgroundColor: "#333333", color: "white", border: "none", marginBottom: "15px", width: "500px", height: "45px"}} type="text" placeholder='Enter Name'/> <br />
                            <textarea style={{backgroundColor: "#333333", color: "white", border: "none", marginBottom: "15px", width: "500px"}} name="" id="" cols="30" rows="10" placeholder='Enter your Comment'></textarea><br />
                            <button style={{borderRadius: "5px", padding: "12px 18px", border: "none", color: "white", backgroundColor: "#EFA21F"}}>LEAVE A COMMENT</button>
                        </form>
                    </div>

                    <div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "65%", border: "1px solid #EFA21F", height: "40px", marginBottom: "20px"}}>
                            <p style={{color: "#EFA21F"}}>Free Download</p>
                            <div style={{display: "flex", justifyContent: "center", color: "white", alignItems: "center", height: "30px", width: "30px", marginRight: "5px", backgroundColor: "#EFA21F", borderRadius: "5px"}}><FiDownload /></div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#333333",
                            padding: "20px",
                            borderRadius: "5px",
                            width: "65%"
                            }}>
                            <div style={{ paddingBottom: "25px" }}>
                                <h3 style={{ color: "white", }}>Looking For Insights?</h3>
                                <input style={{ width: "330px", height: "35px", borderRadius: "5px", border: "none" }} type="search" placeholder='Search Here' />
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#333333",
                            borderRadius: "5px",
                            padding: "20px",
                            width: "65%",
                            marginTop: "30px"
                        }}>
                            <div>
                                <h3 style={{ color: "white" }}>Recent Posts</h3>
                                <div>
                                    {dataOurInsights.map(({ id, picture, titlePost, date }) =>
                                        <div key={id}>
                                            <RecentPost picture={picture} date={date} titlePost={titlePost} />
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurIndustry />
            <Footer />
        </div>    
    );
};

export default Articles;