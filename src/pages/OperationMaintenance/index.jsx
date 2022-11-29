import React from 'react';
import styled from 'styled-components';
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';
import main_cons from '../../assets/main-consult.png'


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${main_cons});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const OperationMaintenance = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service="operation and maintenance consultancy" />
            </Header>
        </Container>
    );
};

export default OperationMaintenance;