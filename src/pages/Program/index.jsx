import React from 'react';
import styled from 'styled-components';
import prog from '../../assets/program-m.png'
import AllServices from '../../components/AllServices';
import Nav from '../../components/Nav';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${prog});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`


const Program = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service='program and project management' />
            </Header>
            
        </Container>
    );
};

export default Program;