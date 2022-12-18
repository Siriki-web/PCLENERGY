import React from 'react';
import phil_hmo from '../../assets/phillip.png'
import phil_outs from '../../assets/outsourcing.png'
import pcl from '../../assets/pcl.png'
import styled from 'styled-components';

const TitlePartners = styled.h1`
    font-size: 90px;
    color: #EFA21F;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5px;

    @media all and (max-width: 1024px){
        font-size: 1.625rem;
    }
`

const ImgPartners = styled.img`
    width: 300px;
`

const ImgPcl = styled.img`
    width: 200px;
`

const ContainerPartners = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`


const OurPartners = () => {
    return (
        <div className='wow animate__animated animate__fadeInUp'>
            <TitlePartners>our partners</TitlePartners>
            <ContainerPartners>
                <ImgPartners src={phil_hmo} alt="" />
                <ImgPartners src={phil_outs} alt="" />
                <ImgPcl src={pcl} alt="" />
            </ContainerPartners>
        </div>
    );
};

export default OurPartners;