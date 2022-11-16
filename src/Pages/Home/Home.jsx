import React from 'react'
import Nav from '../Nav/Nav'
import "./Home.css";
import profile from "../../img/profile.jpg";




function Home() {
  return ( 
    <> 
        <Nav />
        <main className="about">
          <section className="profile">
              <img alt="imagen de perfil" src={profile} />
              <div className="description">
                <h1 className="title">German Di Francesco</h1>
                <div className="divider"></div>
                <h2 className="subtitle">desarrollador web</h2>
              </div>
          </section>

        </main>
    </>
  )
}

export default Home
