import React from 'react';
import styled from 'styled-components';
import AllServices from '../../components/AllServices';
import soft from '../../assets/software.png'
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${soft});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const SoftwareDevelopment = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service ="software deplyment and development" />
            </Header>
        </Container>
    );
};

export default SoftwareDevelopment;