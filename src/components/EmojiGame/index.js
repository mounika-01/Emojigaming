import React from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const EmojiGame = ({emojisList}) => {
  const [score, setScore] = React.useState(0)
  const [topScore, setTopScore] = React.useState(0)
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [gameStatus, setGameStatus] = useState('PLAYING')

  const resetGame = () => {
    setClickedEmojis([])
    setScore(0)
    setGameStatus('PLAYING')
  }

  const handleEmojiClick = id => {
    if (clickedEmojis.includes(id)) {
      setGameStatus('LOST')
    } else {
      setClickedEmojis(prevClicked => [...prevClicked, id])
      setScore(prevScore => {
        const newScore = prevScore + 1
        if (newScore === emojisList.length) {
          setGameStatus('WON')
        }
        return newScore
      })
    }
  }

  useEffect(() => {
    if (gameStatus === 'WON' && score > topScore) {
      setTopScore(score)
    }
  }, [gameStatus, score, topScore])

  const renderGame = () => (
    <div className="emoji-game">
      <NavBar score={score} topScore={topScore} />
      <ul className="emoji-list">
        {emojisList.map(emoji => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            onEmojiClick={handleEmojiClick}
          />
        ))}
      </ul>
    </div>
  )

  const renderWinOrLoseCard = () => (
    <WinOrLoseCard
      gameStatus={gameStatus}
      topScore={topScore}
      onPlayAgain={resetGame}
      score={score}
    />
  )

  return (
    <div className="emoji-game-container">
      {gameStatus === 'PLAYING' ? renderGame() : renderWinOrLoseCard()}
    </div>
  )
}

export default EmojiGame
