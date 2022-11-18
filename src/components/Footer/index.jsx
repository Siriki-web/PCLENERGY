import React from 'react';
import logo_pcl from '../../assets/logo-pcll.png'
import right_arrow from '../../assets/right-arrow.png'
import { Link } from 'react-router-dom'
import { GrLinkedinOption } from 'react-icons/gr'
import { GrTwitter } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import styled from 'styled-components';


const InputText = styled.input`
    width: 300px;
    height: 40px;
    margin-right: 20px;
    background-color: #2C2C2C;
    border: none;
    `

const ButtonSubmitted = styled.button`
    border: none;
    color: white;
    padding: 12px 17px;
    background-image: linear-gradient(to right, #2BAF49, #EE6B2A);
    `


const Footer = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                }}>
                <div style={{paddingTop: "50px", paddingBottom: "50px" }}>
                    <img style={{
                        height: "145px",
                        width: "158px"
                    }} src={logo_pcl} alt="" /> <br />
                    <p style={{ color: "white" }}>Subscribe to Our Newsletter</p>
                    <InputText type="text" /><ButtonSubmitted>SUBMIT <img style={{width: "15px", marginLeft: "4px"}} src={right_arrow} alt="" /></ButtonSubmitted>
                </div>
                <div style={{ paddingTop: "50px" }}>
                    <div style={{ display: "flex", justifyContent: "flex-end",  marginTop: "75px"}}>
                        <Link style={{ textDecoration: "none", color: "white", marginRight: "20px" }} to='/contact'>Contact Us</Link>
                        <Link style={{ textDecoration: "none", color: "white", marginRight: "20px" }} to='/faq'>FAQ</Link>
                        <Link style={{ textDecoration: "none", color: "white", marginRight: "20px" }} to='/privacy'>Privacy Policy</Link>
                        <Link style={{ textDecoration: "none", color: "white" }} to='/cookies'>Cookies preference</Link>
                    </div>
                    <div style={{display: "flex", justifyContent: "flex-end",  marginTop: "25px", marginBottom: "60px"}}>
                        <Link style={{ textDecoration: "none", color: "white", marginRight: "70px" }} to='/legal'>Legal Policy</Link>
                        <Link style={{ textDecoration: "none", color: "white"}}to='/term'>Term of Use</Link>
                    </div>
                    

                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "25px",
                    }}>
                        <div style={{
                            backgroundImage: 'linear-gradient(to bottom, #2BAF49, #EE6B2A)',
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                        }}><GrLinkedinOption style={{ padding: "11px", color: "white" }} />
                        </div>
                        <div style={{
                            backgroundImage: 'linear-gradient(to bottom, #2BAF49, #EE6B2A)',
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                            marginLeft: "20px"
                        }}><GrTwitter style={{ padding: "11px", color: "white" }} />
                        </div>
                        <div style={{
                            backgroundImage: 'linear-gradient(to bottom, #2BAF49, #EE6B2A)',
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                            marginLeft: "20px"
                        }}><MdEmail style={{ padding: "11px", color: "white" }} />
                        </div>
                        <div style={{
                            backgroundImage: 'linear-gradient(to bottom, #2BAF49, #EE6B2A)',
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                            marginLeft: "20px",
                        }}><GrFacebookOption style={{ padding: "11px", color: "white" }} />
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "none", backgroundColor: "#EFA21F", height: "1px" }} />
            <p style={{ color: "white", paddingLeft: "125px", paddingBottom: "30px" }}><span style={{ height: "35px", width: "35px" }}>&copy;</span> PCL Energy 2022</p>
        </div>

    );
};

export default Footer;