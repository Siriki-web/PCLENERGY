import React from 'react';
import image_history from '../../assets/muertos.png'
import styled from 'styled-components';


const ContainerHistory = styled.div`
    background-color: #0D0D0D;
`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 100px;
    padding-bottom: 120px;
`

const ImgHistory = styled.img`
    height: 770px;
    width: 40%;
    margin-left: 30px;

    @media all and (max-width: 1024px){
        width: 100%;
        margin-left: 0;
    }
`

const BackOurHistory = styled.div`
    background-color: #000000;
    padding: 10px 0px 0px 40px;
    border-radius: 10px;
    width: 47%;

    @media all and (max-width: 1024px){
        width: 100%;
    }
`

const TitleHistory = styled.h3`
    color: #ffffff;
    text-transform: uppercase;
    font-size: 30px;
`

const TitleBestSource = styled.h3`
    color: #EFA21F;
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    text-transform: capitalize;
    margin-bottom: 30px;
    margin-top: 40px;

    @media only screen and (max-width: 500px){
        font-size: 2.5rem;
    }
    `

const ParagraphHistory = styled.p`
    color: #ffffff;
    line-height: 40px;
    font-size: 20px;

    @media only screen and (max-width: 500px){
        text-align: justify;
        font-size: 1rem;
        padding-right: 1rem;
    }
    `


const Ourhistory = () => {
    return (
        <ContainerHistory>
            <Container>
                <ImgHistory src={image_history} alt="" />
                <BackOurHistory>
                    <TitleHistory>our history</TitleHistory>
                    <TitleBestSource>the best source of energy for the better tomorrow</TitleBestSource>
                    <ParagraphHistory>Tempus quisque taciti luctus laoreet sagittis hac quis habitasse 
                        mattis parturient. Fringilla a dictumst scelerisque nisi phasellus 
                        lectus lacus per tortor ipsum. Volutpat proin vestibulum 
                        senectus donec et massa justo hac nec facilisis mus. Aliquam 
                        ornare rutrum eget per primis in posuere rhoncus tempor. 
                        Tempus quisque taciti luctus laoreet sagittis hac quis habitasse 
                        mattis parturient. Fringilla a dictumst scelerisque nisi phasellus 
                        lectus lacus per tortor ipsum. Volutpat proin vestibulum 
                        senectus donec et massa justo hac nec facilisis mus. Aliquam 
                        ornare rutrum eget per primis in posuere rhoncus tempor.
                    </ParagraphHistory>
                </BackOurHistory>
            </Container>
        </ContainerHistory>
    );
};

export default Ourhistory;