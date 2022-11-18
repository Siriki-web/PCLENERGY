import React from 'react';

const Categories = ({ setActiveCategory, categories, activecategory }) => {
    return (
        <div style={{ paddingTop: "150px", marginLeft: "110px" }}>
            <button style={{
                border: "1px solid #B2B2B2", 
                padding: "15px 25px", 
                margin: "10px",
                borderRadius: "37px",
                background: "#0D0D0D",
                color: "white"}} onClick={() => setActiveCategory('')}>All
            </button>

            {
                categories.map((cat) =>
                    <button style={{
                        border: "1px solid #B2B2B2", 
                        padding: "15px 25px", 
                        margin: "10px",
                        borderRadius: "37px",
                        background: "#0D0D0D",
                        color: "white"}}
                        key={cat}
                        value={cat}
                        onClick={(e) => setActiveCategory(e.target.value)}>{cat}
                    </button>
                )
            }
        </div>
    );
};

export default Categories;