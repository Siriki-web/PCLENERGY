import React from 'react';
import styled from 'styled-components';
// import { Button } from "@mui/material";


const ContainerCategory = styled.div`
    margin-bottom: 20px;
    
    @media only screen and (max-width: 500px){
        margin-left: 0;
    }
    `

const ButtonAll = styled.button`
        border: 1px solid #B2B2B2;
        padding: 15px 25px;
        margin-right: 25px;
        border-radius: 37px;
        background: #0D0D0D;
        color: white;
        transition: transform .3s ease-out ;
            &:focus{
                background-color: #F2A42A;
                color: white;
                }
            &:hover{
                background-color: #EFA21F;
                color: white;
                transform: rotate(15deg) scale(1) translateX(10px);
            }

    @media all and (max-width: 1024px){
        padding: 10px 15px;
        margin: 10px;
    }
    `

const ButtonCategories = styled.button`
    border: 1px solid #B2B2B2;
    padding: 15px 25px;
    margin-right: 30px;
    border-radius: 37px;
    background-color: #0D0D0D;
    color: white;
    transition: transform .3s ease-out ;
    &:focus{
        background-color: #F2A42A;
        color: white;
        }
    &:hover{
        background-color: #EFA21F;
        color: white;
        transform: rotate(15deg) scale(1) translateX(10px);
        }

    @media all and (max-width: 1024px){
        padding: 10px 15px;
        margin: 5px;
    }

`

const Categories = ({ setActiveCategory, categories, activeCategory }) => {

    const handleClick = (e) => {
        setActiveCategory(e.target.value)
    }


    return (
        <ContainerCategory>
            <ButtonAll onClick={() => setActiveCategory('')}


            >All</ButtonAll>

            {
                categories.map((cat) =>
                    <ButtonCategories
                        key={cat}
                        value={cat}
                        onClick={handleClick}
                        
                        >{cat}
                    </ButtonCategories>
                )
            }
        </ContainerCategory>
    );
};

export default Categories;