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
import { Link } from 'react-router-dom'



const ContainerQualityAssurance = styled.div`
    background-color: #0D0D0D;
    @media only screen and (max-width: 500px){
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    
    }
    `

const HeaderQualityAssurance = styled.div`
    position: relative;
    background-image: url(${quality_assurance});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;

    @media only screen and (max-width: 500px){
        width: 100%;
    }
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
    margin-top: 50px;
    height: 140px;

    @media only screen and (max-width: 500px){
       display: none;
        }
`

const H1 = styled.h1`
    margin-top: -120px;
    font-size: 70px;
    color: #EFA21F;
    text-align: center;

    @media all and (max-width: 1024px){
        font-size: 2rem;
        margin-top: -0px;
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
    @media only screen and (max-width: 500px){
        margin-left: 30px;
    }
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

    @media only screen and (max-width: 500px){
        font-size: 15px;
        text-align: justify;
       
    }
    `    

const DivStyle = styled.div`
    display: flex;
    align-items: baseline;

    @media all and (max-width: 1024px){
        padding-left: 2rem;
        padding-right: 2rem;
        }
    `    

const H3 = styled.h3`
    color: white;

    @media all and (max-width: 1024px){
        margin-left: 1.9rem;
        }
}
`

const Text = styled.p`
    color: white;
    line-height: 40px;
    text-align: justify;

    @media only screen and (max-width: 500px){
        font-size: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: justify;
    }
    `

const Br = styled.br`
    @media only screen and (max-width: 500px){
        display: none;
    }
    `

const DivQ = styled.div`
    display: flex;
    align-items: center; 

    @media all and (max-width: 1024px){
        padding-left: 2rem;
        padding-right: 2rem;
        }
`

const TitreH2 = styled.h2`
    text-align: left;
    font-size: 20px;
    color: #EFA21F;

    @media all and (max-width: 1024px){
        padding-left: 2rem;
        }
    `

const Org = styled.p`
    color: white;

    @media only screen and (max-width: 500px){
        font-size: 1rem;
        }
    `

const DivQu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 500px){
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `    

const LeftSection = styled.div`
    width: 38%;

    @media only screen and (max-width: 500px){
        width: 100%;
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
                        <DivQu>
                            <ImageQuality src={img_text} alt="" />
                            <H1>QUALITY ASSURANCE</H1>
                        </DivQu>
                    </UnderHeader>
                </HeaderQualityAssurance>
            </div>
            <Container>
                <LeftSection>
                    <H3><span style={{color: "#EFA21F" }}>Our Services <MdKeyboardArrowRight style={{height: "15px"}}/></span> Quality Assurance</H3>
                    <TitreH2>Quality Assurance</TitreH2>
                    <Text>
                        PCL Energy provides the very best of services, one of which is <span style={{ color: "#EFA21F" }}>QUALITY 
                        ASSURANCE</span> Services. We offer you an unexampled Experience cutting 
                        across the Energy Sector. We provide this service across Nigeria and 
                        beyond. As a result, we can help you to assure quality across all your 
                        business processes and runnings.<br /><br />
                        Our out- point Quality Assurance Services include:
                    </Text>
                    <DivQ>
                        <CircleButton></CircleButton>
                        <Org>Organisation Of Quality Assurance Training Courses</Org>
                    </DivQ>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Backing In Defining A Quality Assurance Program That Meets The Full <Br />
                        Compass Of All Regulatory Conditions.</PgH>
                    </DivStyle>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Performing Pre-award or Pre-qualification checks, including a <Br />
                            complete review of suppliers' quality assurance program to meet <Br />
                            Government or Purchasers' Conditions</PgH>
                    </DivStyle>
                    <Img src={gra} alt="" />
                </LeftSection>

                {/* Services */}
                <div>
                    <h2 style={{ color: "#EFA21F", textAlign: "left", fontSize: "20px" }}>Other Services Provided by <br />PCL Energy</h2>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/training-service" style={{color: 'white'}}>Training service</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/energy-concept" style={{color: 'white'}}>Energy Concept</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/bankable" style={{color: 'white'}}>Bankable Feasibility Studies</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/partnership" style={{color: 'white'}}>Public Private Partnership (PPP)</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/program-project-management" style={{color: 'white'}}>Program And project Management</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/support-function" style={{color: 'white'}}>Support Functions Outsourcing</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/strategic-advisory" style={{color: 'white'}}>Strategic Advisory Services</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/software" style={{color: 'white'}}>Software Deployment Development</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/master-plans" style={{color: 'white'}}>Master Plans</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/operation-maintenace" style={{color: 'white'}}>Operation And maintenance Consultancy</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="" style={{color: 'white'}}>Pre-Feasibility Studies</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/transaction-advisory" style={{color: 'white'}}>Transaction Advisory & Due Diligence</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/lobbying" style={{color: 'white'}}>Lobbying & Government Relations</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/portfolio-advisory" style={{color: 'white'}}>Portfolio Advisory</Link></Pg>
                    </DivServices>
                </div>
            </Container>
            <OurIndustry />
            <Footer />
        </ContainerQualityAssurance>

    );
};

export default QualityAssurance;