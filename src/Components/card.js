import React from 'react'
import './card.css';

function Card() {
  return (
    <div className="card">
      <div className="outside">
        <div className="front">
          <p>Happy Birthday</p>
          <div className="cake">
            <div className="top-layer"></div>
            <div className="middle-layer"></div>
            <div className="bottom-layer"></div>
            <div className="candle"></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className="inside">
        <p>Wishing you a very happy birthday filled with love and laughter</p>
        <h1>&#127873;</h1>
      </div>
    </div>
  )
}

export default Card