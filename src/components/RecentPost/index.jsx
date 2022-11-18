import React from 'react';

const RecentPost = ({ picture, date, titlePost }) => {
    return (

        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img style={{width: "110px", height: "85px", borderRadius: "10px"}} src={picture} alt="" />
                <div style={{marginLeft: "20px"}}>
                    <p style={{color: "#EFA21F", fontSize: "15px"}}>{date}</p>
                    <p style={{color: "white", fontSize: "12px"}}>{titlePost}</p>
                </div>
            </div>
            <hr style={{width: "300px"}}/>
        </div>

    );
};

export default RecentPost;