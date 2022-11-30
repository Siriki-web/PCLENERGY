import React from 'react';
import styled from 'styled-components';
import '../../style/Insight.css'


const ContainerCategory = styled.div`
    padding-top: 150px;
    margin-left: 154px;
    
    @media all and (max-width: 1024px){
        margin-left: 0;
    }
    `

const ButtonAll = styled.button`
    border: 1px solid #B2B2B2;
    padding: 15px 25px;
    margin: 10px;
    border-radius: 37px;
    background: #0D0D0D;
    color: white;

    @media all and (max-width: 1024px){
        padding: 10px 15px;
        margin-left: 25px;
    }
    `

const ButtonCategories = styled.button`
    border: 1px solid #B2B2B2;
    padding: 15px 25px;
    margin: 10px;
    border-radius: 37px;
    background-color: #0D0D0D;
    // background:  activeCategory? #EFA21F: #0D0D0D;
    color: white;

    @media all and (max-width: 1024px){
        padding: 10px 15px;
    }

`

const Categories = ({ setActiveCategory, categories, activeCategory }) => {

    const handleClick = (e) => {
        setActiveCategory(e.target.value)
    }


    return (
        <ContainerCategory>
            <ButtonAll  onClick={() => setActiveCategory('')}>All</ButtonAll>

            {
                categories.map((cat) =>
                    <ButtonCategories 
                        key={cat}
                        className={activeCategory === "cat" ? "active" : undefined}
                        value={cat}
                        onClick={handleClick}>{cat}
                    </ButtonCategories>
                )
            }
        </ContainerCategory>
    );
};

export default Categories;