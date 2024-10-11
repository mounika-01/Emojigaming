// src/components/NavBar/index.js
import React from 'react'
import './index.css'

const NavBar = ({score, topScore}) => (
  <nav className="navbar">
   <div className="scores">
  <p>Score: {score}</p>
  <p>Top Score: {topScore}</p>
</div> // Ensure each score is in its own <p> element
    //
  </nav>
)

export default NavBar
