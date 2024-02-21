import React from 'react'
import './cta.css'

const Cta = () => {
  return (
  <div className="header-cta">
    <div className="element-1">
      <img className="image-element" src="static/mug-header.png"></img>
    </div>
    <div className="element-2">
      <div className="element-main">
        <h1>Take a sip</h1>
        <div className="p-elem">A great gift, a cute collectible, a chubby pug, a silly companion. See our latest festive designs! :-)</div>
        <button className="cta-btn">
          Pick out a mug!
        </button>
      </div>
    </div>
  </div>
  )
}

export default Cta