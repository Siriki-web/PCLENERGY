import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';

import quality_assurance from '../../assets/quality-assurance.png'
import software_dev from '../../assets/software-development.png'
import strategic_advisory from '../../assets/strategic-advisory.png'
import training_service from '../../assets/training-service.png'
import transaction_advisory from '../../assets/transaction-advisory.png'
import ppm from '../../assets/program-project-management.png'
import portfolio_advisory from '../../assets/portfolio-advisory.png'
import outsourcing from '../../assets/outsourcing2.png'
import master_plans from '../../assets/master-plans.png'
import maintenance_consultancy from '../../assets/maintenance-consultancy.png'
import lobbying from '../../assets/lobbying.png'
import energy_concept from '../../assets/energy-concept.png'
import feasibility from '../../assets/feasibility-studies.png'
import bankable from '../../assets/bankable.png'
import pp from '../../assets/public-private.png'
import arrow_up from '../../assets/arrow-up.png'
import virgule_debout from '../../assets/virgule-debout.svg'
import electric_drive from '../../assets/electric-drive.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import TitlePage from '../../components/TitlePage';





const Cover = styled.div`
    position: relative;
    background-image: url(${electric_drive});
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

const JustServices = styled.div`
    background-color: #0D0D0D;
    `

const TitleH2 = styled.h2`
    text-align: center;
    color: #EFA21F;
    margin-top: 0;
    padding-top: 150px;
    font-size: 80px;
    line-height: 90px;

    @media all and (max-width: 1024px){
        font-size: 1.625rem;
        line-height: 40px;
    }
    `

const CtnService = styled.div`
    background-color: #0D0D0D;
    padding-bottom: 100px;
`

const SusCtnService = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    `

const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 75px;
`

const ButtonContact = styled.button`
    display: flex;
    align-items: center;
    border: none;
    text-transform: uppercase;
    padding: 12px 30px;
    background-image: linear-gradient(to right, #EE6B2A,#30B34A);
    border-radius: 2px;
    color: white;
`

const CtnTestimonials = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`

const LeftBorder = styled.div`
    width: 7%;
    background-image: linear-gradient(#EE6B2A, #30B24A);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    `

const TextCtn = styled.div`
    width: 90%;
    background-color: #000000;
    border-radius: 5px;
    `

const GblCarre = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
`

const Carre = styled.div`
    position: relative;
    height: 65px;
    width: 65px;
    background-image: linear-gradient(#30B24A, #EE6B2A);

    @media all and (max-width: 1024px){
        display: none;
    }
    `

const PeopleSay = styled.h1`
    color: #EFA21F;
    text-transform: uppercase;
    font-size: 35px;
    margin-top: 0px;

    @media all and (max-width: 1024px){
        font-size: 30px;
    }
    `

const Testi = styled.h4`
    color: white;
    margin-top: 2px;
    margin-bottom: 10px;
    `

const Para = styled.p`
    color: white;
    font-size: 20px;
    margin-top: 75px;

    @media all and (max-width: 1024px){
        font-size: 13px;
        margin-top: 40px;
    }
    `

const Author = styled.div`
    display: flex;
    `

const GblCircle = styled.div`
    display: flex;
    `

const Lines = styled.div`
    width: 75px;
    height: 1px;
    background-color: #EFA21F;
    margin-top: 20px;
    margin-right: 10px;

    @media all and (max-width: 1024px){
        width: 20px;
    }
    `

const NameAuthor = styled.h2`
    line-height: 0;
    color: #EFA21F;
    margin-top: 20px;

    @media all and (max-width: 1024px){
        font-size: 15px;
        margin-top: 20px;
    }
    `

const Rond = styled.div`
    height: 15px;
    width: 15px;
    background-color: #EE6B2A;
    border-radius: 50%;
    margin: 2px;
    `

const CardImage = styled.div`
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    width: 250px;
    margin: 20px;
    `

const CardOverlay = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.8);
    opacity: 0.6;
    height: 100%;
    width: 100%;
    `

const NameService = styled.h3`
    font-size: 15px;
    position: absolute;
    left: 25px;
    bottom: 0;
    color: white;
`

const ImgVirgule = styled.img`
    position: absolute;
    top: -40px; 
    width: 120px;
    height: 200px;

    @media all and (max-width: 1024px){
        display: none;
    }
`

const Advis = styled.p`
    color: white;

`

const Service = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])
    return (
        <div>
            <Cover>
                <CoverOverlay>
                    <Nav />
                </CoverOverlay>
                <TitlePage name="our services" paragraph="Renewable Energy for a Sustainable World." />
            </Cover>
            <JustServices>
                <TitleH2>We've got lots of <br />Services just for you.</TitleH2>
                <CtnService>
                    <SusCtnService>
                        <div>
                            <Link to="/quality-assurance">
                                <CardImage style={{ backgroundImage: `url("${quality_assurance}")` }}>
                                    <CardOverlay>
                                        <NameService>QUALITY <br /> ASSURANCE</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/partnership'>
                                <CardImage style={{ backgroundImage: `url("${pp}")` }}>
                                    <CardOverlay>
                                        <NameService>PUBLIC PRIVATE<br />PARTNERSHIP (PPP) <br />ADVISORY</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to="/strategic-advisory">
                                <CardImage style={{ backgroundImage: `url("${strategic_advisory}")` }}>
                                    <CardOverlay>
                                        <NameService>STRATEGIC ADVISORY<br />SERVICES</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <CardImage style={{ backgroundImage: `url("${feasibility}")` }}>
                                <CardOverlay>
                                    <NameService>PRE-FEASIBILITY<br />STUDIES</NameService>
                                </CardOverlay>
                            </CardImage>
                        </div>
                        <div>
                            <Link to="/training-service">
                                <CardImage style={{ backgroundImage: `url("${training_service}")` }}>
                                    <CardOverlay>
                                        <NameService>TRAINING <br /> SERVICES</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/portfolio-advisory'>
                                <CardImage style={{ backgroundImage: `url("${portfolio_advisory}")` }}>
                                    <CardOverlay>
                                        <NameService>PORTFOLIO<br />ADVISORY</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/software'>
                                <CardImage style={{ backgroundImage: `url("${software_dev}")` }}>
                                    <CardOverlay>
                                        <NameService>SOFTWARE <br />DEPLOYMENT <br />AND DEVELOPMENT</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/transaction-advisory'>
                                <CardImage style={{ backgroundImage: `url("${transaction_advisory}")` }}>
                                    <CardOverlay>
                                        <NameService>TRANSACTION <br />ADVISORY <br />&DUE DILIGENCE</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                        </div>
                        <div>
                            <Link to='/energy-concept'>
                                <CardImage style={{ backgroundImage: `url("${energy_concept}")` }}>
                                    <CardOverlay>
                                        <NameService>ENERGY <br />CONCEPT</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/program-project-management'>
                                <CardImage style={{ backgroundImage: `url("${ppm}")` }}>
                                    <CardOverlay>
                                        <NameService>PROGRAM <br />AND PROJECT <br />MANAGEMENT</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/master-plans'>
                                <CardImage style={{ backgroundImage: `url("${master_plans}")` }}>
                                    <CardOverlay>
                                        <NameService>MASTER <br />PLANS</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to="/lobbying">
                                <CardImage style={{ backgroundImage: `url("${lobbying}")` }}>
                                    <CardOverlay>
                                        <NameService>LOBBYING & <br />GOVERNEMENT <br />RELATIONS</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                        </div>
                        <div>
                            <Link to="/bankable">
                                <CardImage style={{ backgroundImage: `url("${bankable}")` }}>
                                    <CardOverlay>
                                        <NameService>BANKABLE FEASABILITY <br />STUDIES</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to='/support-function'>
                                <CardImage style={{ backgroundImage: `url("${outsourcing}")` }}>
                                    <CardOverlay>
                                        <NameService>SUPPORT FUNCTIONS <br />OUTSOURCING</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                            <Link to="operation-maintenance">
                                <CardImage style={{ backgroundImage: `url("${maintenance_consultancy}")` }}>
                                    <CardOverlay>
                                        <NameService>OPERAION AND <br />MAINTENANCE <br />CONSULTANCY</NameService>
                                    </CardOverlay>
                                </CardImage>
                            </Link>
                        </div>
                    </SusCtnService>
                    <Btn>
                        <ButtonContact>contact us now <img style={{ height: "15px", marginLeft: "5px" }} src={arrow_up} alt="" /></ButtonContact>
                    </Btn>
                    <CtnTestimonials>
                        <LeftBorder></LeftBorder>
                        <TextCtn>
                            <GblCarre>
                                <Carre>
                                    <ImgVirgule src={virgule_debout} alt="" />
                                </Carre>
                                <div>
                                    <Testi>TESTIMONIALS</Testi>
                                    <PeopleSay>people say about our services</PeopleSay>
                                    <Para>
                                        Streamer fish California halibut Pacific saury. Slickhead grunion lake trout. Canthigaster <br />
                                        rostrata spikefish brown trout loach summer flounder. European minnow black dragonfish <br />
                                        orbicular batfish stingray tenpounder! Flying characin: herring. Moses Streamer fish <br />
                                        California halibut Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish <br />
                                        brown trout loach summer flounder. European minnow black dragonfish orbicular batfish <br />
                                        stingray tenpounder! Flying characin: herring. Moses Streamer fish California halibut Pacific <br />
                                        saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach <br />
                                        summer flounder. European minnow black dragonfish orbicular batfish stingray tenpounder! <br />
                                        Flying characin: herring. Moses
                                    </Para>
                                    <Author>
                                        <Lines></Lines>
                                        <div style={{marginLeft: "5px"}}>
                                            <NameAuthor>MARGET WILLIAMS</NameAuthor>
                                            <Advis>MD, ADVIS HOLDINGS</Advis>
                                        </div>
                                    </Author>
                                </div>
                                <GblCircle>
                                    <Rond></Rond>
                                    <Rond></Rond>
                                    <Rond></Rond>
                                    <Rond></Rond>
                                </GblCircle>
                            </GblCarre>
                        </TextCtn>
                    </CtnTestimonials>
                </CtnService>
                <OurIndustry />
            </JustServices>
            <Footer />
        </div >
    );
};

export default Service;