// src/components/EmojiCard/index.js
import React from 'react'
import './index.css'

const EmojiCard = ({emoji, onClickEmoji}) => (
  <button
    type="button"
    className="emoji-button"
    onClick={() => onClickEmoji(emoji.id)}
  >
    <img src={emoji.emojiUrl} alt={emoji.emojiName} className="emoji-image" />
  </button>
)

export default EmojiCard
