import React from 'react';
import styled from 'styled-components';


const Name = styled.p`
    color: white;
    text-align: center;
    margin-bottom: 0px;
    `    

const Fonction = styled.p`
    color: #EFA21F;
    text-align: center;
    margin-top: 2px;
    `    
const ImgPerson = styled.img`
    height: 250px;
    width: 250px;
    `        

const MeetOurTeam = ({name, fonction, cp_twitter, cp_link, cover}) => {
    return (
        <div>
            <li>
                <ImgPerson src={cover} alt="" /><br />
                <Name>{name}</Name>
                <Fonction>{fonction}</Fonction>
                <div style={{textAlign: "center"}}>
                    <img style={{marginRight: "20px"}} src={cp_twitter} alt="" />
                    <img src={cp_link} alt="" />
                </div>
            </li>
        </div>
    );
};

export default MeetOurTeam;