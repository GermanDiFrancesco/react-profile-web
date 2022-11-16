import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio';
import Monitoring from './Pages/Portfolio/Monitoring/Monitoring';
import Contact from './Pages/Contact/Contact';

import './index.css'

import './config/firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/main-app' element={<Home/>} />
      <Route path='/main-app/about' element={<About/>} />
      <Route path='/main-app/portfolio' element={<Portfolio />} />
      <Route path='/main-app/portfolio/monitoring' element={<Monitoring />} />
      <Route path='/main-app/contact' element={<Contact/>} />
      
  </Routes>
  </BrowserRouter>
)




