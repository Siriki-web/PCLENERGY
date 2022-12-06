import React from 'react';
import missions from '../../assets/mission.png'
import binocular from '../../assets/binoculars.png'
import ellips from '../../assets/ellipse.png'
import styled from 'styled-components';


const ContainerValue = styled.div`
    display: flex;
    align-items: center; 
    margin-top: 48px;

    @media only screen and (max-width: 500px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media only screen and (max-width: 820px){
        flex-wrap: wrap;
    }
    `

const VisionAndmission = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 500px){
        padding-left: 1rem;
        paddiing-right: 1rem;
    }
    ` 

const BackOurValue = styled.div`
    background-color: #35281E;
    border-top-right-radius: 55px;
    padding-left: 100px;
    width: 45%;
    height: 700px;

    @media only screen and (max-width: 500px){
        padding-left: 0;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 820px){
        width: 100%;
    }
    `

const ImageEllipse = styled.img`
    height: 650px;
    width: 55%;
    margin-top: 50px;

    @media all and (max-width: 1024px){
        width: 100%;
        height: 100%;
        margin-top: 0;
    }
    `    

const TitleOurValue = styled.h3`
    color: white;
    text-transform: uppercase;
    font-size: 30px;

    @media only screen and (max-width: 500px){
        padding-left: 1rem;
    }
    `  

const MeetsBusiness = styled.h3`
    color: #EFA21F;
    text-transform: capitalize;
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 1024px){
        padding-left: 1rem;
        font-size: 2.5rem;
        line-height: 40px;
    }
    `   

const ParagrahValue = styled.p`
    color: white;
    font-size: 25px;

    @media only screen and (max-width: 500px){
        text-align: justify;
        font-size: 18px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `

const ImageVisionMissipn = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 30px;

    @media only screen and (max-width: 500px){
        width: 40px;
        height: 40px;
    }
    `    

const TitleVisionMission = styled.h3`
    color: #EFA21F;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 10px;

    @media only screen and (max-width:500px){
        font-size: 1.2rem;
    }
    `    

const ParagrahDescribe = styled.p`
    color: white;
    font-size: 20px;

    @media only screen and (max-width: 500px){
        font-size: .875rem;
    
    }
    `

const OurValue = () => {
    return (
        <ContainerValue>
            <BackOurValue>
                <TitleOurValue>our value</TitleOurValue>
                <MeetsBusiness>where technology <br />meets busines.</MeetsBusiness>
                <ParagrahValue>PCL Energy is your Environmentally Friendly Energy consulting firm offering a broad portfolio of Technology solutions and expertise.</ParagrahValue>
                <VisionAndmission>
                    <ImageVisionMissipn src={binocular} alt="" />
                    <div>
                        <TitleVisionMission>vision</TitleVisionMission>
                        <ParagrahDescribe>Providing Energy Solutions Across Africa.</ParagrahDescribe>
                    </div>
                </VisionAndmission>
                <VisionAndmission>
                    <ImageVisionMissipn src={missions} alt="" />
                    <div>
                        <TitleVisionMission>mission</TitleVisionMission>
                        <ParagrahDescribe>Combining Expertise, Investments, and Partnerships to Meet Your Energy needs.</ParagrahDescribe>
                    </div>
                </VisionAndmission>
            </BackOurValue>
            <ImageEllipse src={ellips} alt="" />
        </ContainerValue>
    );
};

export default OurValue;