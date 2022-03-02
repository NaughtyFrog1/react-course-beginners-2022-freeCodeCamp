import React from 'react'
import photoGrid from '../images/photo-grid.png'

export default function Hero() {
  return (
    <header className="hero container">
      <img className="hero__img" src={photoGrid} alt="grid" />
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </header>
  )
}
