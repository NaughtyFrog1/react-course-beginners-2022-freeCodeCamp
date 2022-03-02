import React from 'react'
import reactLogo from '../images/logo.svg'

export default function Navbar() {
  return (
    <nav className="nav-site">
      <div className='nav__content container'>
        <img className="nav__logo-img" src={reactLogo} alt="React Logo" />
        <h3 className="nav__logo-text">ReactFacts</h3>
        <h4 className="nav__title">React Course - Project 1</h4>
      </div>
    </nav>
  )
}
