import React from 'react';
import styled from 'styled-components';
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';
import pad from '../../assets/port-ad.png'


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${pad});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const Portfolio = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service="portfolio advisory" />
            </Header> 
        </Container>
    );
};

export default Portfolio;