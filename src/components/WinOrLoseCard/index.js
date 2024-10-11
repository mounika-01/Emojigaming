// src/components/WinOrLoseCard/index.js
import WinOrLoseCard from '../WinOrLoseCard';
import React from 'react'
import './index.css'

const WinOrLoseCard = ({isWon, onPlayAgain, score, emojisLength}) => {
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const message = isWon ? 'You Won!' : 'You Lose'
  const displayScore = `Score: ${score}`

  return (
    <div className="win-or-lose-card">
      <img src={imageUrl} alt="win or lose" />
      <h1>{message}</h1>
      {isWon ? (
        <>
          <p>Best Score</p>
          <p>{displayScore}</p>
        </>
      ) : (
        <p>{displayScore}</p>
      )}
      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
