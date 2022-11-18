import React from 'react';
import sm from '../../assets/smart-tecno.png'
import sp from '../../assets/support.png'
import ps from '../../assets/premium-service.png'
import eco_tech from '../../assets/eco-tecno.png'
import certified_expert from '../../assets/certified-expert.png'
import styled from 'styled-components';
import OurPartners from '../OurPartner';


const ContaierChoose = styled.div`
    background-color: #0D0D0D;
    padding-top: 60px;
    `


const ContainerPrincial = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    `

const Container = styled.div`
    background-image: linear-gradient(#2B2B2B, #743803);
    height: 340px;
    width: 300px;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    opacity: 46%;
`

const TitleChoose = styled.h2`
    font-size: 30px;
    text-transform: uppercase;
    color: white;
    `

const TitleH2 = styled.h2`
    text-transform: capitalize;
    color: #EFA21F;
    font-size: 60px;
    line-height: 60px;
    font-weight: 800;
    margin-top: 5px;
    margin-bottom: 5px;
    `

const Paragrah = styled.p`
    color: white;
    line-height: 40px;
    `

const Cercle = styled.div`
    padding: 10px;
    height: 30px;
    width: 30px;
    background-image: linear-gradient(#32B34A, #EFA21F);
    border-radius: 50%;
    `

const H2 = styled.h2`
    text-transform: uppercase;
    color: #EFA21F;
    font-size: 18px;
    `
const Live = styled.div`
    margin-top: 50px;
    margin-bottom: 70px;
    `

const Img = styled.img`
    width: 30px;
    height: 30px;
    `

const LiveP = styled.p`
    font-size: 25px;
    line-height: 45px;
    color: white;
    margin-top: 15px;
    `


const WhyChooseUs = () => {
    return (
        <ContaierChoose>
            <ContainerPrincial>
                <div>
                    <Live>
                        <TitleChoose>WHY CHOOSE US</TitleChoose>
                        <TitleH2>Live Green, <br /> Think Green.</TitleH2>
                        <LiveP>Here are some reason <br />Why you should look no further.</LiveP>
                    </Live>
                    <Container>
                        <Cercle><Img src={certified_expert} /></Cercle>
                        <H2>CERTIFIED EXPERT</H2>
                        <Paragrah>As a reputed Energy Consulting firm, we<br />
                            passes a strong team of certified <br />
                            experts who have very vast knowledge in <br />
                            the Energy Sector
                        </Paragrah>
                    </Container>
                </div>
                <div class="sus-ctn-choose">
                    <Container>
                        <Cercle><Img src={eco_tech} /></Cercle>
                        <H2>ECO TECHNOLOGY</H2>
                        <Paragrah>We provide our clients with detailed <br />
                            insights on the application of technology <br />
                            to manage ecosystems efficiency by <br />
                            helping them understand the essential <br />
                            working of ecologial systems.
                        </Paragrah>
                    </Container>
                    <Container>
                        <Cercle><Img src={ps} /></Cercle>
                        <H2>PREMIUM SERVICES</H2>
                        <Paragrah>With a strong team of certified experts <br />
                            and professionals who are very <br />
                            knowledgeable, the very best of services <br />
                            is assured.
                        </Paragrah>
                    </Container>
                </div>
                <div class="sus-ctn-choose">
                    <Container>
                        <Cercle><Img src={sm} /></Cercle>
                        <H2>SMART TECHNOLOGY</H2>
                        <Paragrah>As a reputed Energy Consulting Firm, we <br />
                            put our best possible effort into providing <br />
                            our clients with the best in intelligent <br />
                            optimization of energy cost and <br />
                            efficiency.
                        </Paragrah>
                    </Container>
                    <Container>
                        <Cercle><Img src={sp} /></Cercle>
                        <H2>24/7 SUPPORT</H2>
                        <Paragrah>At PCL Energy, we do not just consult for <br />
                            our clients, we make ourselves available <br />
                            24h hours round the clock to provide help <br />
                            and support to them whenever the need <br />
                            arises.
                        </Paragrah>
                    </Container>
                </div>
            </ContainerPrincial>
            <OurPartners />
        </ContaierChoose>
    );
};

export default WhyChooseUs;