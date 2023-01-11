import React from 'react';
import styled from 'styled-components';
import due from '../../assets/due-diligence.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';
import gra from '../../assets/gra.png'
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${due});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const H3 = styled.h3`
    // margin-left: 130px;
    color: white;

    @media all and (max-width: 1024px){
        margin-left: 2rem;
        }
}
`

const LeftSection = styled.div`
    width: 38%;

    @media only screen and (max-width: 500px){
        width: 100%;
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

const DivQ = styled.div`
    display: flex;
    align-items: center; 

    @media all and (max-width: 1024px){
        padding-left: 2rem;
        padding-right: 2rem;
        }
`

const CircleButton = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #EFA21F;
    margin-right: 5px;
    `

const TheServices = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 5px;
    border: 5px solid #EFA21F;
    margin-right: 10px;
`

// const Org = styled.p`
//     color: white;

//     @media only screen and (max-width: 500px){
//         font-size: 15px;
//         }
//     `

const PgH = styled.p`
    color: white;
    line-height: 5px;

    @media only screen and (max-width: 500px){
        font-size: 15px;
        text-align: justify;
       
    }
    `

const DivStyle = styled.div`
    display: flex;
    align-items: baseline;
    // line-height: 10px;

    @media all and (max-width: 1024px){
        padding-left: 2rem;
        padding-right: 2rem;
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

const Container2 = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 40px;
    `

const Br = styled.br`
    @media only screen and (max-width: 500px){
        display: none;
    }
    `

const Pg = styled.p`
    color: white;
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



const TransactionAdvisory = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <PrincipalContainer>
            <Container>
                <Nav />
                <Header>
                    <AllServices service="transaction advisory & due diligence" />
                </Header>
            </Container>
            <Container2>
                <LeftSection>
                    <H3><span style={{ color: "#EFA21F" }}>Our Services <MdKeyboardArrowRight style={{ height: "15px" }} /></span>Transaction Advisory & Due Diligence</H3>
                    <TitreH2>Transaction Advisory & Due Diligence</TitreH2>
                    <Text>
                        Capital investment operational expenditures, commercial, contractual and regulatory
                        issues are very complex and require diligent analysis.
                        The bedrock of a successful business is hard work, and challenges are prone to bring
                        a business down, in a bid to curb these uncertainties advisable to avail of
                        professional transaction advisory services.<Br />
                        pcl. energy with the help of their financial due diligence team provides you with
                        outstanding analysis projected to earn networking capital and operational performance.
                        At pcl. energy, we help you with all the tasks attached to your transaction from the
                        start to finish, we are here as your backbone.

                        <br />
                        Focus Areas:
                    </Text>
                    <DivQ>
                        <CircleButton></CircleButton>
                        <PgH>Transaction preparation and planning</PgH>
                    </DivQ>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Documentation handling</PgH>
                    </DivStyle>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Post transaction services</PgH>
                    </DivStyle>
                    <DivStyle>
                        <CircleButton></CircleButton>
                        <PgH>Financial, legal/ tax due diligence</PgH>
                    </DivStyle>
                    <Img src={gra} alt="" />
                </LeftSection>

                {/* Services */}
                <div style={{marginTop: "40px"}}>
                    <h2 style={{ color: "#EFA21F", textAlign: "left", fontSize: "20px" }}>Other Services Provided by <br />PCL Energy</h2>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/strategic-advisory" style={{ color: 'white' }}>Strategic Advisory Services</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/software" style={{ color: 'white' }}>Software Deployment and Development</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/energy-concept" style={{ color: 'white' }}>Energy Concept</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/operation-maintenace" style={{ color: 'white' }}>Operation and maintenance consultancy</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/quality-assurance" style={{ color: 'white' }}>Quality Assurance</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/portfolio-advisory" style={{ color: 'white' }}>Portfolio Advisory</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/support-function" style={{ color: 'white' }}>Support Function Outsourcing</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/training-service" style={{ color: 'white' }}>Training Service</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="bankable" style={{ color: 'white' }}>Bankable Feasibility Studies</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/master-plans" style={{ color: 'white' }}>Master Plans</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="" style={{ color: 'white' }}>Pre-Feasibility Studies</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/partnership" style={{ color: 'white' }}>Public Private Partnership (PPP)</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/lobbying" style={{ color: 'white' }}>Lobbying & Government Relations</Link></Pg>
                    </DivServices>
                    <DivServices>
                        <TheServices></TheServices>
                        <Pg><Link to="/program-project-management" style={{ color: 'white' }}>Program and project Management</Link></Pg>
                    </DivServices>
                </div>
            </Container2>
            <OurIndustry />
            <Footer />
        </PrincipalContainer>
    );
};

export default TransactionAdvisory;