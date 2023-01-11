import React from 'react'
import right_arrow from '../../assets/right-arrow.png'
import '../../style/ButtonDownload.css'
import styled from 'styled-components';



const Div = styled.div`
    margin-top: 9px;
    `

const ButtonDownload = () => {

    return (
        <Div className="wow animate_animated animate_rotateInDownLeft">
            <a href="https://phillipsconsulting.net/our-insights/insights/reports/" target="_blank" rel="noreferrer noopener" style={{
                color: "white",
                borderRadius: "5px",
                padding: "10px 20px",
                fontWeight: "bold",
                border: "none",
                backgroundImage: "linear-gradient(to right, #2BAF49, #EE6B2A)",
                textTransform: "uppercase",
                fontSize: ".775rem",
            }}>
                download report <img style={{ width: "15px", marginLeft: "4px" }} src={right_arrow} alt="" />
            </a>
        </Div >
    );
};

export default ButtonDownload;