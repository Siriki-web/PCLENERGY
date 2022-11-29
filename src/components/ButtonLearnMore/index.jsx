import React from 'react';
import arrow_up from '../../assets/arrow-up.png'
import styled from 'styled-components';

const BtnLearnMore = styled.button`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
    padding: 12px 25px;
    background-image: linear-gradient(to right, #EE6B2A, #2BAF49);
    color: white;
    `

const ButtonLearnMore = () => {
    return (
        <BtnLearnMore>LEARN MORE <img style={{
            width: "15px",
            height: "15px",
            marginLeft: "5px"
        }} src={arrow_up} alt="" />
        </BtnLearnMore>
    );
};

export default ButtonLearnMore;