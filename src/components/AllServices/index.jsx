import React from 'react';
import styled from 'styled-components';

const UnderHeader = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 150px;
    `

const H1 = styled.h1`
    color: #EFA21F;
    z-index: 1;
    text-transform: uppercase;

    @media only screen and (max-width: 500px){
        text-align: center
    }
`
const AllServices = ({ service }) => {
    return (
        <UnderHeader>
            <Div>
                <H1>{service}</H1>
            </Div>
        </UnderHeader>
    );
};

export default AllServices;