import React from 'react';
import styled from 'styled-components';
import due from '../../assets/due-diligence.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${due});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const TransactionAdvisory = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service ="transaction advisory & due diligence" />
            </Header>
        </Container>
    );
};

export default TransactionAdvisory;