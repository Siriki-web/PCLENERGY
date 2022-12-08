import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import human from '../../assets/human-figurines.png'
import TitlePage from '../../components/TitlePage'
import OurIndustry from '../OurIndustry';
import Footer from '../Footer';
import RecentPost from '../RecentPost';
import { dataOurInsights } from '../../data/dataOurInsights'
import { GrTwitter } from 'react-icons/gr'
import { GrFacebookOption } from 'react-icons/gr'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiDownload } from 'react-icons/fi';


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

const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 490px;
    height: 70px;
    border: 1px solid #EFA21F;

    @media only screen and (max-width: 500px){
        width: auto;
    }
    `    

const Icon = styled.div`
    height: 20px;
    width: 20px;
    background-image: linear-gradient(#32B34A, #EFA21F);
    border-radius: 50%;
    margin: 5px;
    `    

const Input = styled.input`
    background-color: #333333;
    color: white;
    border: none;
    margin-bottom: 15px; 
    width: 490px;
    height: 45px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
 `    

const Textarea = styled.textarea`
    background-color: #333333;
    color: white;
    border: none;
    margin-bottom: 15px;
    width: 490px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
` 

const Button = styled.button`
    border-radius: 5px;
    padding: 12px 18px;
    border: none;
    color: white;
    background-color: #EFA21F;
`

const DivDownload = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 71%;
    border: 1px solid #EFA21F;
    height: 40px;
    margin-bottom: 20px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    `

const DivIconFiDownload = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    height: 30px;
    width: 30px;
    margin-right: 5px;
    background-color: #EFA21F;
    border-radius: 5px;
    `   

const DivInputSearch = styled.input`
    width: 330px;
    height: 35px;
    border-radius: 5px;
    border: none;
    `     

const ContainerLeft = styled.div`
    margin-left: 150px;
    margin-right: 70px;
    width: 33%;

    @media only screen and (max-width: 500px){
        width: 90%;
        margin-left: 0;
        margin-right: 0;
    }
    `   

const ContainerRight = styled.div`
    @media only screen and (max-width: 500px){
        width: 90%;
    }
    `


const Description = styled.p`
    color: white;
    font-size: 1rem;
    text-align: justify;

    @media only screen and (max-width: 500px){
        width: 80%;
    }
    `

const ImgDescription = styled.img`
    height: 280px;
    width: 500px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    `    

const PrincipalContainer = styled.div`
    background-color: #0D0D0D;
    
    @media only screen and (max-width: 500px){
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    } `

const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    background-color: #333333;
    padding: 20px;
    border-radius: 5px;
    width: 65%;

    @media only screen and (max-width: 500px){
        width: auto;
    }
    `    

const TitlePost = styled.h2`
    color: #EFA21F;
    text-align: left;
    font-size: 1rem;
`    

const Form = styled.form`
    @media only screen and (max-width: 500px){
        width: auto;
        margin-bottom: 40px;
    }`


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

const TitleH3 = styled.h3`
    font-weight: normal;
    margin-left: 200px;
    color: white;
    margin-bottom: 30px;

    @media only screen and (max-width: 500px){
        margin-left: 0;
        padding-left: .5rem;
        margin-top: 50px;
    }
    `



const Articles = ({categoryPost, picture, date, comment, titlePost, author, description}) => {
    return (
        <PrincipalContainer>
            <Cover>
                <CoverOverlay>
                    <Nav />
                </CoverOverlay>
                <TitlePage name="our insights" paragraph="Renewable Energy for a Sustainable World." />
            </Cover>
            <div style={{ paddingTop: "120px", marginBottom: "90px" }}>
                <TitleH3>
                    <span style={{color: "#EFA21F"}}>Home 
                        <MdKeyboardArrowRight style={{height: "15px"}}/>Our Insights 
                        <MdKeyboardArrowRight style={{height: "15px"}}/>{categoryPost}
                        <MdKeyboardArrowRight style={{height: "15px"}}/>
                    </span> How to Add Battery Backup to an Existing Grid... ... ... ... 
                </TitleH3>
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <ContainerLeft>
                        <ImgDescription src={picture} alt="" />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ color: "white", fontSize: ".5rem" }}>{date}</p>
                            <div style={{ width: "1px", height: "25px", backgroundColor: "#EFA21F" }}></div>
                            <p style={{ color: "white", fontSize: ".5rem" }}><span style={{ color: "#EFA21F" }}>Author: </span>{author}</p>
                            <div style={{ width: "1px", height: "25px", backgroundColor: "#EFA21F" }}></div>
                            <p style={{ color: "white", fontSize: ".5rem" }}><span style={{ color: "#EFA21F" }}>Comments: </span>{comment}</p>
                        </div>
                        <TitlePost>{titlePost}</TitlePost>

                        <Description>{description}</Description>

                        <DivIcon>
                            <p style={{ color: "white", marginLeft: "50px" }}>Share This Insight?</p>
                            <div style={{ display: "flex", marginRight: "50px" }}>
                                <Icon><GrTwitter style={{padding: "2px"}}/></Icon>
                                <Icon><GrFacebookOption style={{padding: "2px"}}/></Icon>
                            </div>
                        </DivIcon>
                        <h2 style={{ color: "#EFA21F", textAlign: "left" }}>COMMENTS</h2>
                        <Form>
                            <Input type="text" placeholder='Enter Name' /> <br />
                            <Textarea name="" id="" cols="30" rows="10" placeholder='Enter your Comment'></Textarea><br />
                            <Button>LEAVE A COMMENT</Button>
                        </Form>
                    </ContainerLeft>

                    <ContainerRight>
                        <DivDownload>
                            <p style={{ color: "#EFA21F", marginLeft: "5px" }}>Free Download</p>
                            <DivIconFiDownload><FiDownload /></DivIconFiDownload>
                        </DivDownload>
                        <DivSearch>
                            <div style={{ paddingBottom: "25px" }}>
                                <h3 style={{ color: "white", }}>Looking For Insights?</h3>
                                <DivInputSearch type="search" placeholder='Search Here' />
                            </div>
                        </DivSearch>
                        <RecentPosts>
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
                        </RecentPosts>
                    </ContainerRight>
                </div>
            </div>
            <OurIndustry />
            <Footer />
        </PrincipalContainer>
    );
};

export default Articles;