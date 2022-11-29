import React from 'react';
import styled from 'styled-components';
import sup from '../../assets/supp-f.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${sup});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const SupportFunction = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service="support functions outsourcings" />
            </Header>
        </Container>
    );
};

export default SupportFunction;