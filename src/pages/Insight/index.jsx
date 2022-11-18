import React from 'react';
import human from '../../assets/human-figurines.png'
import Nav from '../../components/Nav';
import styled from 'styled-components';
import { dataOurInsights } from '../../data/dataOurInsights'
import { useState } from 'react';
import Categories from '../../components/Categories';
import InsightItem from '../../components/InsightItem';
import RecentPost from '../../components/RecentPost';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

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


const Insight = () => {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = dataOurInsights.reduce((acc, ins) => acc.includes(ins.categoryPost) ? acc : acc.concat(ins.categoryPost), [])

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
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory} />

            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "50px", marginTop: "30px" }}>
                <div style={{ marginLeft: "70px" }}>
                    {dataOurInsights.map(({ id, picture, author, titlePost, contentPost, comment, date, categoryPost }) =>
                        !activeCategory || activeCategory === categoryPost ? (
                            <div key={id}>
                                <InsightItem
                                    picture={picture}
                                    author={author}
                                    titlePost={titlePost}
                                    contentPost={contentPost}
                                    comment={comment}
                                    date={date}
                                />
                            </div>
                        ) : null
                    )
                    }
                </div>
                <div>
                    <div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#707070",
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
                            backgroundColor: "#707070",
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
                    <div style={{
                        backgroundColor: "#707070",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "65%",
                        marginTop: "35px"
                    }}>
                        <h3 style={{ color: "white" }}>Categories</h3>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ color: "white" }}>Reports</p>
                                <p style={{ color: "white" }}>Insights</p>
                                <p style={{ color: "white" }}>Articles</p>
                                <p style={{ color: "white" }}>All</p>
                            </div>
                            <div style={{}}>
                                <p><span style={{ height: "20px", width: "20px", backgroundColor: "#EFA21A", borderRadius: "50%", display: "flex", justifyContent: "center", fontSize: "12px", alignItems: "center", color: "white" }}>1</span></p>
                                <p><span style={{ height: "20px", width: "20px", backgroundColor: "#EFA21A", borderRadius: "50%", display: "flex", justifyContent: "center", fontSize: "12px", alignItems: "center", color: "white" }}>3</span></p>
                                <p><span style={{ height: "20px", width: "20px", backgroundColor: "#EFA21A", borderRadius: "50%", display: "flex", justifyContent: "center", fontSize: "12px", alignItems: "center", color: "white" }}>1</span></p>
                                <p><span style={{ height: "20px", width: "20px", backgroundColor: "#EFA21A", borderRadius: "50%", display: "flex", justifyContent: "center", fontSize: "12px", alignItems: "center", color: "white" }}>5</span></p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: "#707070",
                        padding: "20px",
                        borderRadius: "5px",
                        width: "65%",
                        marginTop: "35px"
                    }}>
                        <h3 style={{ color: "white" }}>Tags</h3>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ color: "white" }}>
                                <p>Wind Turbines</p>
                                <p>Wind Turbines</p>
                                <p>Hydro Plants</p>
                            </div>
                            <div style={{ color: "white" }}>
                                <p><span style={{ color: "#EFA21F" }}>Solar Panels</span></p>
                                <p>Solar Panels</p>
                                <p>Charge Control</p>
                            </div>
                            <div style={{ color: "white" }}>
                                <p>Battery Materials</p>
                                <p>Battery Materials</p>
                                <p>Fossil Ressources</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurIndustry />
            <Footer />
            <Link to="/quality-assurance" >Quality Assurance</Link>
            <Link to="/article" >Articles</Link>
        </div>
    );
};

export default Insight;