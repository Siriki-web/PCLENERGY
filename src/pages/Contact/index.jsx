import React from 'react';
import mart_prod from '../../assets/mart-production.png'
import Nav from '../../components/Nav';
import OurIndustry from '../../components/OurIndustry'
import Footer from '../../components/Footer'
import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoIosSend } from 'react-icons/io'
import { RiSearch2Fill } from 'react-icons/ri'

const ContactUs = styled.div`
    position: absolute;
    top: 310px;
    right: 15%;
    background-color: black;
    height: 210px;
    width: 945px;
    color: white;
    border-radius: 5px;
    `

const TitleContact = styled.h1`
    text-align: center;
    font-size: 90px;
    line-height: 100px;
    color: #EFA21F;
    margin-top: 30px;
    margin-bottom: 25px;
    `

const ParagrahContact = styled.p`
    text-align: center;
    `

const ContactForm = styled.div`
    background-color: #0D0D0D;
    padding-top: 1px;
    padding-bottom: 100px;
    height: 100%;
    `

const TitleGeTInTouches = styled.h1`
    color: #D8921C;
    text-transform: uppercase;
    `

const Paragraph = styled.p`
    color: white;
    margin-top: 0;
    `

const TextIcon = styled.h3`
    text-transform: uppercase;
    color: #D8921C;
    `

const ButtonSend = styled.button`
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, #32B34A, #D8921C);
    border: none;
    color: white;
    padding: 15px 25px;
    text-transform: uppercase;
    width: 215px;
    `


const Contact = () => {
    return (
        <div>
            <div style={{
                position: "relative",
                backgroundImage: `url("${mart_prod}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "415px"
            }}>
                <div style={{
                    position: "absolute",
                    background: 'rgba(0,0,0,0.8)',
                    opacity: '0.8',
                    height: '100%',
                    width: '100%'
                }}>
                    <Nav />
                </div>
                <ContactUs>
                    <TitleContact>CONTACT US</TitleContact>
                    <ParagrahContact>Renewable Energy for a Sustainable World.</ParagrahContact>
                </ContactUs>
            </div>
            <ContactForm>
                <div style={{ marginTop: "250px", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <div style={{ width: "35%" }}>
                        <TitleGeTInTouches>get in touch</TitleGeTInTouches>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{
                                height: '25px',
                                width: '26px',
                                backgroundColor: "#D8921C",
                                borderRadius: "5px",
                                marginRight: "10px"
                            }}><BsTelephoneFill style={{ padding: "4px", color: "white" }} /></div>
                            <TextIcon>phone</TextIcon>
                        </div>
                        <Paragraph>+234 909 426 7360</Paragraph>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{
                                height: '25px',
                                width: '26px',
                                backgroundColor: "#D8921C",
                                borderRadius: "5px",
                                marginRight: "10px"
                            }}><IoIosMail style={{ padding: "4px", color: "white" }} /></div>
                            <TextIcon>e-mail</TextIcon>
                        </div>
                        <Paragraph>info@pclenergy.com</Paragraph>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{
                                height: '25px', width: '26px',
                                backgroundColor: "#D8921C",
                                borderRadius: "5px",
                                marginRight: "10px"
                            }}><RiSearch2Fill style={{ padding: "4px", color: "white" }} /></div>
                            <TextIcon>website</TextIcon>
                        </div>
                        <Paragraph>www.pclenergy.com</Paragraph>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{
                                height: '25px',
                                width: '26px',
                                backgroundColor: "#D8921C",
                                borderRadius: "5px",
                                marginRight: "10px"
                            }}><MdLocationOn style={{ padding: "4px", color: "white" }} /></div>
                            <TextIcon>office address</TextIcon>
                        </div>
                        <Paragraph>2nd Floor, <br />Nexim Bank<br />Central Business District, <br />Abuja. </Paragraph>

                    </div>
                    <div style={{ width: "45%", border: "1px solid #D8921C4D" }}>
                        <form name='contact' method='post' style={{ display: "flex", flexDirection: "column", padding: "40px" }} >
                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>Full Name</label>
                            <input type="text" name="name" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>E-Mail Address</label>
                            <input type="email" name="email" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>Phone Number</label>
                            <input type="email" name="email" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label for="message" style={{ color: "#D8921C", marginBottom: "10px" }}>Message</label>
                            <textarea name="message" id="" cols="30" rows="7" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }}></textarea>
                            <ButtonSend type='submit'>send us a message <IoIosSend style={{ marginLeft: "5px", color: "white" }} /><img src="" alt="" /></ButtonSend>

                        </form>
                    </div>
                </div>
            </ContactForm>
            <OurIndustry />
            <Footer />
        </div>
    );
};

export default Contact;