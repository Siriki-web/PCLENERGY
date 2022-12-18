import React from 'react';
import shells from '../../assets/shell.png'
import styled from 'styled-components';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react';




const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 500px){
        display: flex;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 820px){
        flex-wrap: wrap;
    }
    `

const ShellsImage = styled.img`
    height: 400px;
    width: 450px;
    border-radius: 10px;

    @media all and (max-width: 1024px){
        display: block;
        width: 95%;
        margin-left: 0;
    }
    `

const TitleWork = styled.h3`
    text-transform: uppercase;
    color: #EFA21F;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    `

const TextWork = styled.p`
    color: white;
    font-size: 25px;
    font-weight: bold;
    line-height: 50px;
    margin-top: 2px;
    margin-bottom: 40px;

    @media only screen and (max-width: 500px){
        font-size: 25px;
        text-align: center;
        line-height: 40px;
    }
    `

const TextDescription = styled.p`
    color: white;
    font-size: 20px;
    margin-top: 2px;
    `


const Stats = styled.div`
    margin-right: "60px";

    @media all and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
    `

const ContainerChiffre = styled.div`
    display: flex;
    `

const ContainerChiffreLeft = styled.div`
    margin-right: 80px;

    @media only screen and (max-width: 500px){
        padding-left: 1rem;
    }
    `


const WorkStatistics = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <Container>
            <ShellsImage className="wow animate__animated animate__fadeInUp" src={shells} alt="" />
            <Stats className="wow animate__animated animate__fadeInUp">
                <TitleWork>work statistics</TitleWork>
                <TextWork>How about some Fact Numbers about us.</TextWork>
                <ContainerChiffre>
                    <ContainerChiffreLeft>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div>
                                {/* <FirstLinesImage src={deux_cent_cinquante} alt="" /> */}
                                {
                                    counterOn && <CountUp
                                        style={{
                                            color: "#EFA21F",
                                            fontSize: "50px",
                                            fontWeight: "bold"
                                        }}
                                        start={0}
                                        end={250}
                                        duration={5}
                                        delay={0}>
                                    </CountUp>
                                }
                                <span style={{ color: "#EFA21F", fontSize: "50px", fontWeight: "bold" }}>+</span>
                                <TextDescription>Completed Projects</TextDescription>
                            </div>
                        </ScrollTrigger>
                        <ScrollTrigger>
                            <div>
                                {/* <SecondLinesImage src={cinquantes} alt="" /> */}
                                {
                                    counterOn && <CountUp
                                        style={{
                                            color: "#EFA21F",
                                            fontSize: "50px",
                                            fontWeight: "bold"
                                        }}
                                        start={0}
                                        end={50}
                                        duration={5}
                                        delay={0}>
                                    </CountUp>
                                }
                                <span style={{ color: "#EFA21F", fontSize: "50px", fontWeight: "bold" }}>+</span>
                                <TextDescription>Team Experts</TextDescription>
                            </div>
                        </ScrollTrigger>
                    </ContainerChiffreLeft>

                    <div>
                        <ScrollTrigger>
                            <div>
                                {/* <FirstLinesImage src={cent_cinquante} alt="" /> */}
                                {
                                    counterOn && <CountUp
                                        style={{
                                            color: "#EFA21F",
                                            fontSize: "50px",
                                            fontWeight: "bold"
                                        }}
                                        start={0}
                                        end={150}
                                        duration={5}
                                        delay={0}>
                                    </CountUp>
                                }
                                <span style={{ color: "#EFA21F", fontSize: "50px", fontWeight: "bold" }}>+</span>
                                <TextDescription>Happy Clients</TextDescription>
                            </div>
                        </ScrollTrigger>
                        <ScrollTrigger>
                            <div>
                                {/* <SecondLinesImage src={dix_plus} alt="" /> */}
                                {
                                    counterOn && <CountUp
                                        style={{
                                            color: "#EFA21F",
                                            fontSize: "50px",
                                            fontWeight: "bold"
                                        }}
                                        start={0}
                                        end={10}
                                        duration={5}
                                        delay={0}>
                                    </CountUp>
                                }
                                <span style={{ color: "#EFA21F", fontSize: "50px", fontWeight: "bold" }}>+</span>
                                <TextDescription>Winning Awards</TextDescription>
                            </div>
                        </ScrollTrigger>

                    </div>
                </ContainerChiffre>
            </Stats>
        </Container>
    );
};

export default WorkStatistics;