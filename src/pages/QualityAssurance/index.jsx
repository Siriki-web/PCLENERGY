import React from 'react';
import Nav from '../../components/Nav';
import quality_assurance from '../../assets/back-qlity-assur.png'
import img_text from '../../assets/qlity-incruste.png'
import gra from '../../assets/gra.png'
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react';



const ContainerQualityAssurance = styled.div`
    background-color: #0D0D0D;
    `

const HeaderQualityAssurance = styled.div`
    position: relative;
    background-image: url(${quality_assurance});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const TheServices = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 5px;
    border: 5px solid #EFA21F;
    margin-right: 10px;
`

const UnderHeader = styled.div`
    display: flex;
    justify-content: center;
    background: rgba(0,0,0,0.8);
    opacity: 1;
    height: 100%;
    width: 100%;
`

const ImageQuality = styled.img`
    // position: relative; 
    // top: 90px; 
    // left: 125px; 
    margin-top: 50px;
    height: 140px;

    @media all and (max-width: 1024px){
        width: 100%;
        left: 0;
        }
`

const H1 = styled.h1`
    // position: absolute;
    // top: 65px;
    // left: 319px;
    margin-top: -120px;
    font-size: 70px;
    color: #EFA21F;
    text-align: center;

    @media all and (max-width: 1024px){
        left: 0;
        font-size: 50px;
        }
`
const DivServices = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    height: 300px;
    width: 325px;
    margin: 50px;
    `

const Pg = styled.p`
    color: white;
    `

const CircleButton = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #EFA21F;
    margin-right: 5px;
    `

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 40px;
    `


const PgH = styled.p`
    color: white;
    line-height: 35px;

    @media all and (max-width: 1024px){
        font-size: 15px;
    }
    `    

const DivStyle = styled.div`
    display: flex;
    align-items: baseline;

    @media all and (max-width: 1024px){
        padding-left: 25px;
        }
    `    

const H3 = styled.h3`
    margin-left: 125px;
    color: white;

    @media all and (max-width: 1024px){
        margin-left: 0;
        padding-left: 5px;
        }
}
`

const Text = styled.p`
    color: white;
    line-height: 40px;

    @media all and (max-width: 1024px){
        font-size: 12px;
        padding-left: 25px;
    }
    `
const DivQ = styled.div`
    display: flex;
    align-items: center; 

    @media all and (max-width: 1024px){
        padding-left: 25px;
        }
`

const TitreH2 = styled.h2`
    text-align: left;
    font-size: 20px;
    color: #EFA21F;

    @media all and (max-width: 1024px){
        padding-left: 25px;
        }
    `

const QualityAssurance = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    return (
        <ContainerQualityAssurance>
            <div>
                <Nav />
                <HeaderQualityAssurance>
                    <UnderHeader>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <ImageQuality src={img_text} alt="" />
                            <H1>QUALITY ASSURANCE</H1>
                        </div>
                    </UnderHeader>
                </HeaderQualityAssurance>
            </div>
            <H3><span style={{color: "#EFA21F" }}>Our Services <MdKeyboardArrowRight style={{height: "15px"}}/></span> Quality Assurance</H3>
            <Container>
                <div>
                    <TitreH2>Quality Assurance</TitreH2>
                    <Text>
                        PCL Energy provides the very best of services, one of which is <span style={{ color: "#EFA21F" }}>QUALITY <br />
                            ASSURANCE</span> Services. We offer you an unexampled Experience cutting <br />
                        across the Energy Sector. We provide this service across Nigeria and <br />
                        beyond. As a result, we can help you to assure quality across all your <br />
                        business processes and runnings.<br /><br />
                        Our out- point Quality Assurance Services include:
                    </Text>
                    <DivQ>
                        <CircleButton></CircleButton>
                        <p style={{ color: "white" }}>Organisation Of Quality Assurance Training Courses</p>
                    </DivQ>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Backing In Defining A Quality Assurance Program That Meets The Full <br />
                        Compass Of All Regulatory Conditions.</PgH>
                    </DivStyle>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Performing Pre-award or Pre-qualification checks, including a <br />
                            complete review of suppliers' quality assurance program to meet <br />
                            Government or Purchasers' Conditions</PgH>
                    </DivStyle>
                    <Img src={gra} alt="" />
                </div>

                {/* Services */}
                <div>
                    <h2 style={{ color: "#EFA21F", textAlign: "left", fontSize: "20px" }}>Other Services Provided by <br />PCL Energy</h2>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Training Service</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Energy Concept</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Bankable Feasibility Studies</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Public Private Partnership (PPP)</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Program And project Management</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Support Functions Outsourcing</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Strategic Advisory Services</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Software Deployment Development</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Master Plans</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Operation And maintenance Consultancy</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Pre-Feasibility Studies</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Transaction Advisory & Due Diligence</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Lobbying & Government Relations</Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg>Portfolio Advisory</Pg>
                    </DivServices>
                </div>
            </Container>
            <OurIndustry />
            <Footer />
        </ContainerQualityAssurance>

    );
};

export default QualityAssurance;