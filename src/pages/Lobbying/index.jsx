import React from 'react';
import styled from 'styled-components';
import lb from '../../assets/lobb.png'
import Nav from '../../components/Nav';
import AllServices from '../../components/AllServices';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${lb});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const Lobbying = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service="lobbying & government relations" />
            </Header>
            
        </Container>
    );
};

export default Lobbying;