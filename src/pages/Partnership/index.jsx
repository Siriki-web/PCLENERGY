import React from 'react';
import styled from 'styled-components';
import pub_pri from '../../assets/pub.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';

const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${pub_pri});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`

const Partnership = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service="public private partnership (ppp) advisory" />
            </Header>
        </Container>
    );
};

export default Partnership;