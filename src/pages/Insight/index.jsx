import React from 'react';
import human from '../../assets/human-figurines.png'
import styled from 'styled-components';
import { dataOurInsights } from '../../data/dataOurInsights'
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Categories from '../../components/Categories';
import InsightItem from '../../components/InsightItem';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import TitlePage from '../../components/TitlePage';
import marianna from '../../assets/mariana-proenca.png'


const Cover = styled.div`
    position: relative;
    background-image: url(${human});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
`

const CoverOverlay = styled.div`
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
`

const TheInsights = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
    margin-top: 190px;
    margin-left: 150px;

    @media only screen and (max-width: 500px){
        display: flex;
        flex-wrap: wrap;
        margin-left: 0;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `

const CategoriesInsights = styled.span`
    height: 20px;
    width: 20px;
    background-color: #EFA21A;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    align-items: center;
    color: white;
    `

const DivTags = styled.div`
    background-color: #707070;
    padding: 20px;
    border-radius: 5px;
    width: 65%;
    margin-top: 35px;

    @media all and (max-width: 1024px){
        width: auto;
    }
    `

const Tags = styled.div`
    display: flex;
    justify-content: space-between;
    `


const RecentPosts = styled.div`
    display: flex;
    justify-content: center;
    background-color: #707070;
    border-radius: 5px;
    padding: 20px;
    width: 65%;
    margin-top: 30px;

    @media all and (max-width: 1024px){
        width: auto;
    }
`

const LookingInsights = styled.div`
    display: flex;
    justify-content: center;
    background-color: #707070;
    padding: 20px;
    border-radius: 5px;
    width: 65%;

    @media all and (max-width: 1024px){
        width: auto;
    }
    `

const TheCategories = styled.div`
    background-color: #707070;
    padding: 20px;
    border-radius: 5px;
    width: 65%;
    margin-top: 35px;

    @media only screen and (max-width: 500px){
        width: auto;
    }
    `
const Div = styled.div`
    margin-right: 70px;

    @media all and (max-width: 1024px){
        margin-right:0;
    }
    `

const TitleP = styled.p`
    color: white;
    `
const Pg = styled.p`
    font-size: 15px;
    `

const ColorTextTags = styled.div`
    color: white;
    `
const H3 = styled.h3`
    color: white;
    `

const DivRight = styled.div`
    margin-top: 67px;
    `

const PrincipalContainer = styled.div`
    background-color: #0D0D0D;

    @media only screen and (max-width: 500px){
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    `


const Insight = () => {

    // const [query, setQuery] = useState("")

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const [activeCategory, setActiveCategory] = useState('')
    const categories = dataOurInsights.reduce((acc, ins) => acc.includes(ins.categoryPost) ? acc : acc.concat(ins.categoryPost), [])

    return (
        <PrincipalContainer>
            <Cover>
                <CoverOverlay>
                    <Nav />
                </CoverOverlay>
                <TitlePage name="our insights" paragraph="Renewable Energy for a Sustainable World." />
            </Cover>
            <TheInsights>
                <Div>
                    <Categories
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory} />

                    {
                        dataOurInsights.map(({ id, picture, titlePost, categoryPost }) =>
                            !activeCategory || activeCategory === categoryPost ? (
                                <div key={id}>
                                    <InsightItem
                                        id={id}
                                        picture={picture}
                                        titlePost={titlePost}
                                    />
                                </div>
                            ) : null
                        )
                    }
                </Div>
                <DivRight>
                    <div>
                        <LookingInsights>
                            <div style={{ paddingBottom: "25px" }}>
                                <H3>Looking For Insights?</H3>
                                <input style={{
                                    width: "330px",
                                    height: "35px",
                                    borderRadius: "5px",
                                    border: "none"
                                }} type="search" placeholder='Search Here' />
                                {/* {
                                    dataOurInsights
                                       
                                        .map(({ id, categoryPost }) =>
                                            <div key={id}>
                                                <h1>categoryPost</h1>
                                                <a href={`${id}`}>id</a>
                                            </div>
                                        )
                                } */}
                            </div>
                        </LookingInsights>
                        <RecentPosts>
                            <div>
                                <H3>Recent Posts</H3>
                                <div>
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <a href="https://phillipsconsulting.net/articles_post/ghana-national-gas-company-partners-with-pcl-to-launch-a-corporate-digital-learning-platform/" target="_blank" rel="noreferrer noopener">
                                                <img style={{ width: "110px", height: "85px", borderRadius: "10px" }} src={marianna} alt="" />
                                            </a>
                                            <a href="https://phillipsconsulting.net/articles_post/ghana-national-gas-company-partners-with-pcl-to-launch-a-corporate-digital-learning-platform/" target="_blank" rel="noreferrer noopener">

                                                <div style={{ marginLeft: "20px" }}>
                                                    <p style={{ color: "white", fontSize: "12px" }}>Ghana National Gas Company Partners with pcl. to Launch a Corporate Digital Learning Platform</p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr style={{ width: "300px" }} />

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <a href="https://phillipsconsulting.net/articles_post/leveraging-capacity-building-to-boost-business-growth/" target="_blank" rel="noreferrer noopener">
                                                <img style={{ width: "110px", height: "85px", borderRadius: "10px" }} src={marianna} alt="" />
                                            </a>
                                            <a href="https://phillipsconsulting.net/articles_post/leveraging-capacity-building-to-boost-business-growth/" target="_blank" rel="noreferrer noopener">
                                                <div style={{ marginLeft: "20px" }}>
                                                    <p style={{ color: "white", fontSize: "12px" }}>Leveraging Capacity Building to Boost Business Growth </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr style={{ width: "300px" }} />

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <a href="https://phillipsconsulting.net/articles_post/data-governance-a-precursor-for-digital-transformation/" target="_blank" rel="noreferrer noopener">
                                                <img style={{ width: "110px", height: "85px", borderRadius: "10px" }} src={marianna} alt="" />
                                            </a>
                                            <a href="https://phillipsconsulting.net/articles_post/data-governance-a-precursor-for-digital-transformation/" target="_blank" rel="noreferrer noopener">
                                                <div style={{ marginLeft: "20px" }}>
                                                    <p style={{ color: "white", fontSize: "12px" }}>Data Governance: A Precursor for Digital Transformation </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr style={{ width: "300px" }} />

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <a href="https://phillipsconsulting.net/articles_post/leveraging-big-data-analytics-to-improve-business-performance/" target="_blank" rel="noreferrer noopener">
                                                <img style={{ width: "110px", height: "85px", borderRadius: "10px" }} src={marianna} alt="" />
                                            </a>
                                            <a href="https://phillipsconsulting.net/articles_post/leveraging-big-data-analytics-to-improve-business-performance/" target="_blank" rel="noreferrer noopener">
                                                <div style={{ marginLeft: "20px" }}>
                                                    <p style={{ color: "white", fontSize: "12px" }}>Leveraging Big Data Analytics to Improve Business Performance </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr style={{ width: "300px" }} />

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <a href="https://phillipsconsulting.net/articles_post/embracing-the-culture-of-digital-revolution-in-everyday-work/" target="_blank" rel="noreferrer noopener">
                                                <img style={{ width: "110px", height: "85px", borderRadius: "10px" }} src={marianna} alt="" />
                                            </a>
                                            <a href="https://phillipsconsulting.net/articles_post/embracing-the-culture-of-digital-revolution-in-everyday-work/" target="_blank" rel="noreferrer noopener">
                                                <div style={{ marginLeft: "20px" }}>
                                                    <p style={{ color: "white", fontSize: "12px" }}>Embracing the Culture of Digital Revolution in Everyday Work </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr style={{ width: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </RecentPosts>
                    </div>
                    <TheCategories>
                        <H3>Categories</H3>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <TitleP>Reports</TitleP>
                                <TitleP>Case Study</TitleP>
                                <TitleP>Articles</TitleP>
                                <TitleP>All</TitleP>
                            </div>
                            <div>
                                <p><CategoriesInsights>1</CategoriesInsights></p>
                                <p><CategoriesInsights>1</CategoriesInsights></p>
                                <p><CategoriesInsights>14</CategoriesInsights></p>
                                <p><CategoriesInsights>16</CategoriesInsights></p>
                            </div>
                        </div>
                    </TheCategories>
                    <DivTags>
                        <H3>Tags</H3>
                        <Tags>
                            <ColorTextTags>
                                <Pg>Wind Turbines</Pg>
                                <Pg>Wind Turbines</Pg>
                                <Pg>Hydro Plants</Pg>
                            </ColorTextTags>
                            <ColorTextTags>
                                <Pg><span style={{ color: "#EFA21F" }}>Solar Panels</span></Pg>
                                <Pg>Solar Panels</Pg>
                                <Pg>Charge Control</Pg>
                            </ColorTextTags>
                            <ColorTextTags>
                                <Pg>Battery Materials</Pg>
                                <Pg>Battery Materials</Pg>
                                <Pg>Fossil Ressources</Pg>
                            </ColorTextTags>
                        </Tags>
                    </DivTags>
                </DivRight>
            </TheInsights>
            <OurIndustry />
            <Footer />
        </PrincipalContainer>
    );
};

export default Insight;