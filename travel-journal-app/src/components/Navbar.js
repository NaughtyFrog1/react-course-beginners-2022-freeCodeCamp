import React from 'react'
import globe from '../images/globe.svg'

export default function Navbar() {
  return (
    <div className="nav-site">
      <img src={globe} alt="Globe icon" />
      <h1>my travel journal.</h1>
    </div>
  )
}
