import React from 'react'
import './index.css'

const NavBar = ({score, topScore}) => {
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" // URL for the emoji game logo
        alt="emoji logo" // Alt text as required
        className="logo"
      />
      <div className="scores">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
