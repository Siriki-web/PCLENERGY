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


// const Td = styled.td`
//     padding: 20px;
//     border-right: 1px solid #EFA21F;
//     border-bottom: 1px solid #EFA21F;
//     &:last-child {
//         border-right: 0;
//     }

//     @media only screen and (max-width: 760px),
//         (min-device-width: 768px) and (max-device-width: 1024px) {
//         td {
//             display: block;
//             border: none;
//             border-bottom: 1px solid #EFA21F;
//             position: relative;
//             padding-left: 50%;
//         }

//         td:before {
//             position: absolute;
//             top: 6px;
//             left: 6px;
//             width: 45%;
//             padding-right: 10px;
//             white-space: nowrap;
//         }
//     }
// `

// const Table = styled.table`
//     width: 80%;
//     margin: auto;
//     border-collapse: collapse;
//     margin-bottom: 70px;
//     `


// const CercleImage = styled.div`
//     margin: auto;
//     width: 40px; 
//     height: 40px;
//     background-image: linear-gradient(#32B34A, #EFA21F);
//     border-radius: 50%;
// `

const H4 = styled.h4`
    text-transform: uppercase;
    font-size: 12px;
    color: #EFA21F;
    text-align: center;
    font-weight: 100;
`

const Img = styled.img`
    height: 25px;
    width: 25px;
    padding: 8px;
    `



const TheService = () => {
    return (
        <table className='asktable'>
            <tbody>
                <Link to="/program-project-management" style={{textDecoration: "none"}}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={pm} alt="" />
                        </div>
                        <H4>program and project <br />management </H4>
                    </td>
                </Link>
                <Link to="/portfolio-advisory" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={portfolio} alt="" />
                        </div>
                        <H4>portfolio <br />advisory</H4>
                    </td>
                </Link>
                <Link to="/support-function" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={sf} alt="" />
                        </div>
                        <H4>support functions <br />outsourcing</H4>
                    </td>
                </Link>
                <Link to="/strategic-advisory" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={sa} alt="" />
                        </div>
                        <H4>strategic advisory <br />services</H4>
                    </td>
                </Link>
                <Link to="/quality-assurance" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={qa} alt="" />
                        </div>
                        <H4>quality <br />assurance</H4>
                    </td>
                </Link>

            </tbody>

            <tbody>
                <Link to="/training-service" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={ts} alt="" />
                        </div>
                        <H4>TRAINING <br /> SERVICE</H4>
                    </td>
                </Link>
                <Link to="/software" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={sd} alt="" />
                        </div>
                        <H4>SOFTWARE DEPLOYMENT <br />AND DEVELOPMENT</H4>
                    </td>
                </Link>
                <Link to="/energy-concept" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={ec} alt="" />
                        </div>
                        <H4>ENERGY <br />CONCEPTS</H4>
                    </td>
                </Link>
                <Link to="/bankable" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={bfs} alt="" />
                        </div>
                        <H4>BANKABLE FEASIBILITY <br />STUDIES</H4>
                    </td>
                </Link>
                <Link to="/master-plans" style={{ textDecoration: "none" }}>
                    <td className='first-col'>
                        <div className='cercle'>
                            <Img src={mp} alt="" />
                        </div>
                        <H4>MASTER <br />PLANS</H4>
                    </td>
                </Link>
            </tbody>
            <tbody>
                <Link to="/operation-maintenace" style={{ textDecoration: "none" }}>
                    <td className='first-col bb'>
                        <div className='cercle'>
                            <Img src={omc} alt="" />
                        </div>
                        <H4>OPERATION AND <br />MAINTENANCE <br />CONSULTANCY</H4>
                    </td>
                </Link>
                <Link to="/partnership" style={{ textDecoration: "none" }}>
                    <td className='first-col bb'>
                        <div className='cercle'>
                            <Img src={pppa} alt="" />
                        </div>
                        <H4>PUBLIC PRIVATE <br /> PARTNERSHIP (PPP) <br />ADVISORY</H4>
                    </td>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <td className='first-col bb'>
                        <div className='cercle'>
                            <Img src={pfs} alt="" />
                        </div>
                        <H4>PRE-FEASIBILITY <br />STUDIES</H4>
                    </td>
                </Link>
                <Link to="/transaction-advisory" style={{ textDecoration: "none" }}>
                    <td className='first-col bb'>
                        <div className='cercle'>
                            <Img src={transaction} alt="" />
                        </div>
                        <H4>TRANSACTION ADVISORY <br />&DUE DILIGENCE</H4>
                    </td>
                </Link>
                <Link to="/lobbying" style={{ textDecoration: "none" }}>
                    <td className='first-col bb'>
                        <div className='cercle'>
                            <Img src={lgr} alt="" />
                        </div>
                        <H4>LOBBYING & GOVERNMENT <br />RELATIONS</H4>
                    </td>
                </Link>
            </tbody>
        </table>
    );
};

export default TheService;