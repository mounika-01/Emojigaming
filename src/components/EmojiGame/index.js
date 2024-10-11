import React, {useState} from 'react'
import './App.css'

const EmojiGame = ({ emojisList, winImageUrl, loseImageUrl, logoUrl }) => {
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [clickedEmojis, setClickedEmojis] = useState([])
  const [gameStatus, setGameStatus] = useState('PLAYING') // 'PLAYING', 'WON', 'LOST'

  const handleClick = emoji => {
    if (clickedEmojis.includes(emoji.id)) {
      setGameStatus('LOST')
    } else {
      setClickedEmojis([...clickedEmojis, emoji.id])
      setScore(score + 1)

      if (clickedEmojis.length + 1 === emojisList.length) {
        setGameStatus('WON')
        if (score + 1 > topScore) {
          setTopScore(score + 1)
        }
      }
    }
  }

  const resetGame = () => {
    setScore(0)
    setClickedEmojis([])
    setGameStatus('PLAYING')
  }

   if (gameStatus === 'WON' || gameStatus === 'LOST') {
    return (
      <WinOrLoseCard
        isWon={gameStatus === 'WON'}
        onPlayAgain={resetGame}
        score={score}
        emojisLength={emojisList.length}
      />
    );
  }

  return (
    <div>
      <NavBar score={score} topScore={topScore} />
      <h1>Emoji Game</h1>
      <img src={logoUrl} alt="emoji logo" />
      <ul>
        {emojisList.map(emoji => (
          <li key={emoji.id}>
            <button onClick={() => handleClick(emoji)}>
              <img src={emoji.emojiUrl} alt={emoji.emojiName} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EmojiGame
