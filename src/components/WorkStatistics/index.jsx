import React from 'react';
import shells from '../../assets/shell.png'
import dix_plus from '../../assets/dix.png'
import cinquantes from '../../assets/cinquante.png'
import cent_cinquante from '../../assets/cent-cinquante.png'
import deux_cent_cinquante from '../../assets/deux-cent-cinq.png'
import styled from 'styled-components';




const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    `

const ShellsImage = styled.img`
    height: 450px;
    width: 500px;
    border-radius: 10px;
    margin-left: 20px;

    @media all and (max-width: 1024px){
        width: 100%;
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
    font-size: 60px;
    font-weight: bold;
    line-height: 70px;
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

const FirstLinesImage = styled.img`
    height: 63px;
    width: 123px;

   
    `

const SecondLinesImage = styled.img`
    height: 63px;
    width: 93px;
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



const WorkStatistics = () => {
    return (
        <Container>
            <ShellsImage src={shells} alt="" />
            <Stats>
                <TitleWork>work statistics</TitleWork>
                <TextWork>How about some Fact <br />Numbers about us.</TextWork>
                <div style={{display: "flex"}}>
                    <div style={{ marginRight: "80px" }}>
                        <div>
                            <FirstLinesImage src={deux_cent_cinquante} alt="" />
                            <TextDescription>Completed Projects</TextDescription>
                        </div>
                        <div>
                            <SecondLinesImage src={cinquantes} alt="" />
                            <TextDescription>Team Experts</TextDescription>
                        </div>
                    </div>

                    <div>
                        <div>
                            <FirstLinesImage src={cent_cinquante} alt="" />
                            <TextDescription>Happy Clients</TextDescription>
                        </div>
                        <div>
                            <SecondLinesImage src={dix_plus} alt="" />
                            <TextDescription>Winning Awards</TextDescription>
                        </div>
                    </div>
                </div>
            </Stats>
        </Container>
    );
};

export default WorkStatistics;