import React from 'react';
import Nav from '../../components/Nav';
import quality_assurance from '../../assets/back-qlity-assur.png'
import img_text from '../../assets/qlity-incruste.png'
import gra from '../../assets/gra.png'
import OurIndustry from '../../components/OurIndustry';
import Footer from '../../components/Footer';

const QualityAssurance = () => {
    return (
        <div style={{ backgroundColor: "#0D0D0D" }}>
            <div>
                <Nav />
                <div style={{
                    position: "relative",
                    backgroundImage: `url("${quality_assurance}")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: '300px',
                    marginTop: "50px"
                }}>
                    <div style={{
                        position: "absolute",
                        background: 'rgba(0,0,0,0.8)',
                        opacity: '1',
                        height: '100%',
                        width: '100%'
                    }}>
                        <img style={{ position: "relative", top: "90px", left: "135px", height: "140px" }} src={img_text} alt="" />
                        <h1 style={{ position: "absolute", top: "70px", left: "300px", fontSize: "70px", color: "#EFA21F", textAlign: "center" }}>QUALITY ASSURANCE</h1>
                    </div>
                </div>
            </div>
            <h3 style={{ marginLeft: "125px", color: "white" }}><span style={{ color: "#EFA21F" }}>Our Services </span> Quality Assurance</h3>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "40px" }}>
                <div>
                    <h2 style={{ color: "#EFA21F" }}>Quality Assurance</h2>
                    <p style={{ color: "white", lineHeight: "40px" }}>
                        PCL Energy provides the very best of services, one of which is <span style={{ color: "#EFA21F" }}>QUALITY <br />
                            ASSURANCE</span> Services. We offer you an unexampled Experience cutting <br />
                        across the Energy Sector. We provide this service across Nigeria and <br />
                        beyond. As a result, we can help you to assure quality across all your <br />
                        business processes and runnings.<br /><br />
                        Our out- point Quality Assurance Services include:
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#EFA21F", marginRight: "5px" }}></div>
                        <p style={{ color: "white" }}>Organisation Of Quality Assurance Training Courses</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#EFA21F", marginRight: "5px" }}></div>
                        <p style={{ color: "white", lineHeight: "35px" }}>Backing In Defining A Quality Assurance Program That Meets The Full <br />Compass Of All Regulatory Conditions.</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#EFA21F", marginRight: "5px" }}></div>
                        <p style={{ color: "white", lineHeight: "35px" }}>Performing Pre-award or Pre-qualification checks, including a <br />
                            complete review of suppliers' quality assurance program to meet <br />
                            Government or Purchasers' Conditions</p>
                    </div>
                    <img style={{ height: "300px", width: "325px", margin: "50px" }} src={gra} alt="" />
                </div>

                {/* Services */}
                <div>
                    <h2 style={{ color: "#EFA21F" }}>Other Services Provided by <br />PCL Energy</h2>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Training Service</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Energy Concept</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Bankable Feasibility Studies</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Public Private Partnership (PPP)</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Program And project Management</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Support Functions Outsourcing</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Strategic Advisory Services</p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Software Deployment Development</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Master Plans</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Operation And maintenance Consultancy</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Pre-Feasibility Studies</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Transaction Advisory & Due Diligence</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Lobbying & Government Relations</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ height: "10px", width: "10px", borderRadius: "5px", border: "5px solid #EFA21F", marginRight: "10px" }}></div>
                        <p style={{ color: "white" }}>Portfolio Advisory</p>
                    </div>
                </div>
            </div>
            <OurIndustry />
            <Footer />
        </div>

    );
};

export default QualityAssurance;