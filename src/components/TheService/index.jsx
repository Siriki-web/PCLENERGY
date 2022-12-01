import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import qa from '../../assets/icone-quality-assurance.png'
import ts from '../../assets/icone-training-service.png'
import ec from '../../assets/icone-energy-concept.png'
import sa from '../../assets/icone-strategic-advisory.png'
import bfs from '../../assets/bankable-feasibility-studies.png'
import lgr from '../../assets/lobbying-government-relations.png'
import mp from '../../assets/master-plan3.png'
import omc from '../../assets/operation-and-maintenance-consultancy.png'
import portfolio from '../../assets/portfolio.png'
import pppa from '../../assets/ppp-advisory.png'
import pfs from '../../assets/pre-feasibility-studies.png'
import pm from '../../assets/project-management.png'
import sd from '../../assets/software-deployment.png'
import sf from '../../assets/support-function.png'
import transaction from '../../assets/transaction.png'
import '../../style/TheService.css'


const H4 = styled.h4`
    text-transform: uppercase;
    font-size: 12px;
    color: #EFA21F;
    text-align: center;
    font-weight: 100;

    @media only screen and (max-width: 500px){
        font-size : 0.5rem;
    }
`

const Img = styled.img`
    height: 25px;
    width: 25px;
    padding: 8px;

    @media only screen and (max-width: 500px){
        height: 20px;
        width: 20px;
        padding: 10px;
    }
    `



const TheService = () => {
    return (
        <table className='asktable'>
            <tbody>
                <td className='first-col'>
                    <Link to="/program-project-management" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={pm} alt="" />
                        </div>
                        <H4>program and project <br />management </H4>
                    </Link>
                </td>
                <td className='first-col'>
                    <Link to="/portfolio-advisory" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={portfolio} alt="" />
                        </div>
                        <H4>portfolio <br />advisory</H4>
                    </Link>
                </td>
                <td className='first-col'>
                    <Link to="/support-function" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={sf} alt="" />
                        </div>
                        <H4>support functions <br />outsourcing</H4>
                    </Link>
                </td>
                <td className='first-col sup'>
                    <Link to="/strategic-advisory" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={sa} alt="" />
                        </div>
                        <H4>strategic advisory <br />services</H4>
                    </Link>
                </td>
                <td className='first-col sup'>
                    <Link to="/quality-assurance" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={qa} alt="" />
                        </div>
                        <H4>quality <br />assurance</H4>
                    </Link>
                </td>
            </tbody>

            <tbody>
                <td className='first-col'>
                    <Link to="/training-service" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={ts} alt="" />
                        </div>
                        <H4>TRAINING <br /> SERVICE</H4>
                    </Link>
                </td>
                <td className='first-col'>
                    <Link to="/software" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={sd} alt="" />
                        </div>
                        <H4>SOFTWARE DEPLOYMENT <br />AND DEVELOPMENT</H4>
                    </Link>
                </td>
                <td className='first-col'>
                    <Link to="/energy-concept" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={ec} alt="" />
                        </div>
                        <H4>ENERGY <br />CONCEPTS</H4>
                    </Link>
                </td>
                <td className='first-col sup'>
                    <Link to="/bankable" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={bfs} alt="" />
                        </div>
                        <H4>BANKABLE FEASIBILITY <br />STUDIES</H4>
                    </Link>
                </td>
                <td className='first-col sup'>
                    <Link to="/master-plans" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={mp} alt="" />
                        </div>
                        <H4>MASTER <br />PLANS</H4>
                    </Link>
                </td>
            </tbody>
            <tbody>
                <td className='first-col bb'>
                    <Link to="/operation-maintenace" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={omc} alt="" />
                        </div>
                        <H4>OPERATION AND <br />MAINTENANCE <br />CONSULTANCY</H4>
                    </Link>
                </td>
                <td className='first-col bb'>
                    <Link to="/partnership" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={pppa} alt="" />
                        </div>
                        <H4>PUBLIC PRIVATE <br /> PARTNERSHIP (PPP) <br />ADVISORY</H4>
                    </Link>
                </td>
                <td className='first-col bb'>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={pfs} alt="" />
                        </div>
                        <H4>PRE-FEASIBILITY <br />STUDIES</H4>
                    </Link>
                </td>
                <td className='first-col bb sup'>
                    <Link to="/transaction-advisory" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={transaction} alt="" />
                        </div>
                        <H4>TRANSACTION ADVISORY <br />&DUE DILIGENCE</H4>
                    </Link>
                </td>
                <td className='first-col bb sup'>
                    <Link to="/lobbying" style={{ textDecoration: "none" }}>
                        <div className='cercle'>
                            <Img src={lgr} alt="" />
                        </div>
                        <H4>LOBBYING & GOVERNMENT <br />RELATIONS</H4>
                    </Link>
                </td>
            </tbody>
        </table>
    );
};

export default TheService;