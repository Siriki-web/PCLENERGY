import React from 'react';
import styled from 'styled-components';
import mart_prod from '../../assets/mart-production.png'
import Nav from '../../components/Nav';
import OurIndustry from '../../components/OurIndustry'
import Footer from '../../components/Footer'
import TitlePage from '../../components/TitlePage';
import { MdLocationOn } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoIosSend } from 'react-icons/io'
import { RiSearch2Fill } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useEffect } from 'react';



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

    @media all and (max-width: 1024px){
        width: auto;
        padding: 10px 15px;
        font-size: 9px;
    }
    `

const ContainerHeader = styled.div`
    position: relative;
    background-image: url(${mart_prod});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 415px;
`

const UnderContainer = styled.div`
    // position: absolute;
    background: rgba(0,0,0,0.8);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    `

const DivContact = styled.div`
    display: flex;
    align-items: center;
`

const UnderDivContact = styled.div`
    height: 25px;
    width: 26px;
    background-color: #D8921C;
    border-radius: 5px;
    margin-right: 10px;
`


const Contact = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_cz66unx', 
            'template_jv8pi09', 
            form.current, 
            '5OUjZDpQTL0yYOLpQ')
        .then((result) => {
            console.log(result.txt);
            alert("SUCCESS");
        }, (error) => {
            console.log(error.text);
            alert("FAILED...", error)
        })
    }

    return (
        <div>
            <ContainerHeader>
                <UnderContainer>
                    <Nav />
                </UnderContainer>
                    <TitlePage name="contact us" paragraph="Renewable Energy for a Sustainable World." />
            </ContainerHeader>
            <ContactForm>
                <div style={{ marginTop: "250px", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    <div style={{ width: "35%" }}>
                        <TitleGeTInTouches>get in touch</TitleGeTInTouches>
                        <DivContact>
                            <UnderDivContact>
                                <BsTelephoneFill style={{ padding: "4px", color: "white" }} />
                            </UnderDivContact>
                            <TextIcon>phone</TextIcon>
                        </DivContact>
                        <Paragraph>+234 909 426 7360</Paragraph>
                        <DivContact>
                            <UnderDivContact>
                                <IoIosMail style={{ padding: "4px", color: "white" }} />
                            </UnderDivContact>
                            <TextIcon>e-mail</TextIcon>
                        </DivContact>
                        <Paragraph>info@pclenergy.com</Paragraph>
                        <DivContact>
                            <UnderDivContact>
                                <RiSearch2Fill style={{ padding: "4px", color: "white" }} />
                            </UnderDivContact>
                            <TextIcon>website</TextIcon>
                        </DivContact>
                        <Paragraph>www.pclenergy.com</Paragraph>
                        <DivContact>
                            <UnderDivContact>
                                <MdLocationOn style={{ padding: "4px", color: "white" }} />
                            </UnderDivContact>
                            <TextIcon>office address</TextIcon>
                        </DivContact>
                        <Paragraph>2nd Floor, <br />Nexim Bank<br />Central Business District, <br />Abuja. </Paragraph>

                    </div>
                    <div style={{ width: "45%", border: "1px solid #D8921C4D" }}>
                        <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", padding: "40px" }} >
                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>Full Name</label>
                            <input type="text" name="name" id="name" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>E-Mail Address</label>
                            <input type="email" name="email" id="email" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label style={{ color: "#D8921C", marginBottom: "10px" }}>Phone Number</label>
                            <input type="tel" name="phone" id="phone" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                height: "30px",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }} />

                            <label for="message" style={{ color: "#D8921C", marginBottom: "10px" }}>Message</label>
                            <textarea name="message" id="message" cols="30" rows="7" style={{
                                backgroundColor: "#0D0D0D",
                                border: "1px solid #D8921C4D",
                                borderRadius: "5px",
                                marginBottom: "20px",
                                color: "white"
                            }}></textarea>
                            <ButtonSend type='submit' value="Send">send us a message <IoIosSend style={{ marginLeft: "5px", color: "white" }} /><img src="" alt="" /></ButtonSend>

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