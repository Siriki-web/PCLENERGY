import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Insight from './pages/Insight';
import Contact from './pages/Contact';
import QualityAssurance from './pages/QualityAssurance';
import GlobalStyle from './style/GlobalStyle';
import Articles from './pages/Articles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='service' element={<Service />} />    
                <Route path='insight' element={<Insight />} />    
                <Route path='contact' element={<Contact />} />
                <Route path='quality-assurance' element={<QualityAssurance />} />
                <Route path='article' element={<Articles />} />
            </Routes>
        </Router>
        <App />
    </React.StrictMode>
);


