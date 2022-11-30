import React from 'react';
import human from '../../assets/human-figurines.png'
import styled from 'styled-components';
import { dataOurInsights } from '../../data/dataOurInsights'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Categories from '../../components/Categories';
import InsightItem from '../../components/InsightItem';
import RecentPost from '../../components/RecentPost';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import TitlePage from '../../components/TitlePage';


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
    margin-top: 30px;
    margin-left: 150px;

    @media all and (max-width: 1024px){
        display: flex;
        flex-wrap: wrap;
        margin-left: 0;
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

    @media all and (max-width: 1024px){
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

const Insight = () => {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = dataOurInsights.reduce((acc, ins) => acc.includes(ins.categoryPost) ? acc : acc.concat(ins.categoryPost), [])

   

    return (
        <div style={{ backgroundColor: "#0D0D0D" }}>
            <Cover>
                <CoverOverlay>
                    <Nav />
                </CoverOverlay>
                
               <TitlePage name="our insights" paragraph="Renewable Energy for a Sustainable World." />
            </Cover>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory} />

            <TheInsights>
                <Div>
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
                </Div>
                <div>
                    <div>
                        <LookingInsights>
                            <div style={{ paddingBottom: "25px" }}>
                                <H3>Looking For Insights?</H3>
                                <input style={{ 
                                    width: "330px", 
                                    height: "35px", 
                                    borderRadius: "5px", 
                                    border: "none" }} type="search" placeholder='Search Here' />
                            </div>
                        </LookingInsights>
                        <RecentPosts>
                            <div>
                                <H3>Recent Posts</H3>
                                <div>
                                    {dataOurInsights.map(({ id, picture, titlePost, date }) =>
                                        <div key={id}>
                                            <RecentPost picture={picture} date={date} titlePost={titlePost} />
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                        </RecentPosts>
                    </div>
                    <TheCategories>
                        <H3>Categories</H3>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <TitleP>Reports</TitleP>
                                <TitleP>Insights</TitleP>
                                <TitleP>Articles</TitleP>
                                <TitleP>All</TitleP>
                            </div>
                            <div>
                                <p><CategoriesInsights>1</CategoriesInsights></p>
                                <p><CategoriesInsights>3</CategoriesInsights></p>
                                <p><CategoriesInsights>1</CategoriesInsights></p>
                                <p><CategoriesInsights>5</CategoriesInsights></p>
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
                </div>
            </TheInsights>
            <OurIndustry />
            <Footer />
            <Link to="/article" >Articles</Link>
        </div>
    );
};

export default Insight;