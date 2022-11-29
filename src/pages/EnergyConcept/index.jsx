import React from 'react';
import styled from 'styled-components';
import energy from '../../assets/energy-cp.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${energy});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const EnergyConcept = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service = "energy concept" />
            </Header>
        </Container>
    );
};

export default EnergyConcept;