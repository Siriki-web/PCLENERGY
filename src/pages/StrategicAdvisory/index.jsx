import React from 'react';
import styled from 'styled-components';
import st from '../../assets/stratAdvisor.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${st});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`
const StrategicAdvisory = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service= "Strategic Advisory services" />
            </Header>
        </Container>
    );
};

export default StrategicAdvisory;