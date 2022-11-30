import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Bankable from './pages/Bankable';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Insight from './pages/Insight';
import InsightDetail from './pages/InsightDetail'
import Contact from './pages/Contact';
import QualityAssurance from './pages/QualityAssurance';
import GlobalStyle from './style/GlobalStyle';
import Articles from './pages/Articles';
import TrainingService from './pages/TrainingService';
import Lobbying from './pages/Lobbying';
import StrategicAdvisory from './pages/StrategicAdvisory';
import Partnership from './pages/Partnership';
import SoftwareDevelopment from './pages/SoftwareDeployment';
import EnergyConcept from './pages/EnergyConcept';
import TransactionAdvisory from './pages/TransactionAdvisory';
import MasterPlans from './pages/MasterPlans';
import SupportFunction from './pages/SupportFunction';
import Portfolio from './pages/Portfolio';
import Program from './pages/Program';
import OperationMaintenance from './pages/OperationMaintenance'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />    
                <Route exact path='/insight' element={<Insight />} /> 
                <Route path='/insight/:id' element={<InsightDetail />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/quality-assurance' element={<QualityAssurance />} />
                <Route path='/training-service' element={<TrainingService />} />
                <Route path='/bankable' element={<Bankable />} />
                <Route path='/lobbying' element={<Lobbying />} />
                <Route path='/strategic-advisory' element={<StrategicAdvisory />} />
                <Route path='/partnership' element={<Partnership />} />
                <Route path='/article' element={<Articles />} />
                <Route path='/software' element={<SoftwareDevelopment />} />
                <Route path='/energy-concept' element={<EnergyConcept />} />
                <Route path='/transaction-advisory' element={<TransactionAdvisory />} />
                <Route path='/master-plans' element={<MasterPlans />} />
                <Route path='/support-function' element={<SupportFunction />} />
                <Route path='/portfolio-advisory' element={<Portfolio />} />
                <Route path='/program-project-management' element={<Program />} />
                <Route path='/operation-maintenace' element={<OperationMaintenance />} />
            </Routes>
        </Router>
        <App />
    </React.StrictMode>
);


