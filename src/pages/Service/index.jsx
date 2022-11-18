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





const OurServices = styled.div`
    position: absolute;
    top: 310px;
    right: 15%;
    background-color: black;
    height: 210px;
    width: 945px;
    color: white;
    border-radius: 5px;
    `

const TitleService = styled.h1`
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;
    `

const ParagrahService = styled.p`
    text-align: center;
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
    height: 600px;
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
    `

const PeopleSay = styled.h1`
    color: #EFA21F;
    text-transform: uppercase;
    font-size: 35px;
    margin-top: 0px;
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
    `

const NameAuthor = styled.h2`
    line-height: 0;
    color: #EFA21F;
    `

const Rond = styled.div`
    height: 15px;
    width: 15px;
    background-color: #EE6B2A;
    border-radius: 50%;
    margin: 2px;
    `

const NameService = styled.h3`
    font-size: 15px;
    position: absolute;
    left: 10px;
    bottom: 0;
    color: white;
`




const Service = () => {
    return (
        <div>
            <div style={{
                position: "relative",
                backgroundImage: `url("${electric_drive}")`,
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

                <OurServices>
                    <TitleService>OUR SERVICES</TitleService>
                    <ParagrahService>Renewable Energy for a Sustainable World.</ParagrahService>
                </OurServices>
            </div>
            <JustServices>
                <TitleH2>We've got lots of <br />Services just for you.</TitleH2>
                <CtnService>
                    <SusCtnService>
                        <div>
                            <div style={{
                                backgroundImage: `url("${quality_assurance}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>QUALITY <br /> ASSURANCE</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${pp}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>TRAINING SERVICE<br />PARTNERSHIP (PPP) <br />ADVISORY</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${strategic_advisory}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>STRATEGIC ADVISORY<br />SERVICES</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${feasibility}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>PRE-FEASIBILITY<br />STUDIES</NameService>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                backgroundImage: `url("${training_service}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>TRAINING <br /> SERVICES</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${portfolio_advisory}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>PORTFOLIO<br />ADVISORY</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${software_dev}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>SOFTWARE <br />DEPLOYMENT <br />AND DEVELOPMENT</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${transaction_advisory}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>TRANSACTION <br />ADVISORY <br />&DUE DILIGENCE</NameService>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                backgroundImage: `url("${energy_concept}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>ENERGY <br />CONCEPT</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${ppm}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>PROGRAM <br />AND PROJECT <br />MANAGEMENT</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${master_plans}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>MASTER <br />PLANS</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${lobbying}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>LOBBYING & <br />GOVERNEMENT <br />RELATIONS</NameService>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                backgroundImage: `url("${bankable}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>BANKABLE FEASABILITY <br />STUDIES</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${outsourcing}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>SUPPORT FUNCTIONS <br />OUTSOURCING</NameService>
                                </div>
                            </div>
                            <div style={{
                                backgroundImage: `url("${maintenance_consultancy}")`,
                                position: 'relative',
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "300px",
                                width: "250px",
                                margin: "20px"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    background: 'rgba(0,0,0,0.8)',
                                    opacity: '0.8',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <NameService>OPERAION AND <br />MAINTENANCE <br />CONSULTANCY</NameService>
                                </div>
                            </div>
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
                                    <img style={{ position: "absolute", top: "-40px", width: "120px", height: "200px" }} src={virgule_debout} alt="" />
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
                                        <div className="name-author">
                                            <NameAuthor>MARGET WILLIAMS</NameAuthor>
                                            <p style={{ color: "white" }}>MD, ADVIS HOLDINGS</p>
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