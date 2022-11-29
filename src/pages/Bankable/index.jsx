import React from 'react';
import bfs from "../../assets/bank-studies.png"
import styled from 'styled-components';
import Nav from '../../components/Nav';
import AllServices from '../../components/AllServices';


const Container = styled.div`
    background-color: #0D0D0D;
    `

const Header = styled.div`
    position: relative;
    background-image: url(${bfs});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
    margin-top: 30px;
`




const Bankable = () => {
    return (
        <Container>
            <Nav />
            <Header>
                <AllServices service = "bankable feasibility studies" />
            </Header>
        </Container>
    );
};

export default Bankable;