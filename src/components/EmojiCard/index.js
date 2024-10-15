import React from 'react'
import './index.css'

const EmojiCard = ({emoji, onEmojiClick}) => {
  const {emojiName, emojiUrl} = emoji

  const handleClick = () => {
    onEmojiClick(emoji.id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
