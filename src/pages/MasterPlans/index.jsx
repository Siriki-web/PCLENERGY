import React from 'react';
import styled from 'styled-components';
import mps from '../../assets/master-p.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${mps});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const MasterPlans = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service= "master plans" />
            </Header>
        </Container>
    );
};

export default MasterPlans;