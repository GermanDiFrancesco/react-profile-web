import React from 'react'
import { Link } from "react-router-dom";

import Nav from '../Nav/Nav';
import './Portfolio.css'

function Portfolio() {


  return (
    <>
        <Nav />
        <main className='main-portafolio'>
        <section className='portafolio-section'>
            <div className='item'>
                <div className='header'>
                    Mon Shortcuts
                </div>
                <div className='content'>
                    Herramienta de monitoreo
                </div>
                <Link className="link" to='/main-app/portfolio/monitoring'>
                <li className="portafolio">Link to monitoring</li>
                </Link>
            </div>
        </section>

        </main>

    </>
  )
}

export default Portfolio