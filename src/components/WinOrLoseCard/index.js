import React from 'react'
import './index.css'

const WinOrLoseCard = ({gameStatus, topScore, onPlayAgain, score}) => {
  const isWin = gameStatus === 'WON'

  return (
    <div className="win-or-lose-card">
      <h1>{isWin ? 'You Won' : 'You Lose'}</h1>
      <p>
        {isWin ? 'Best Score' : 'Score'}: {isWin ? topScore : score}
      </p>
      {isWin && <p>12/12</p>}
      <button type="button" onClick={onPlayAgain}>
        Play Again
      </button>
      <img
        src={
          isWin
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
