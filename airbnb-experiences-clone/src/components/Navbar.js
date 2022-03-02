import React from 'react'
import airbnbLogo from '../images/airbnb-logo.svg'

export default function Navbar() {
  return (
    <nav className='nav-site'>
      <img className='nav-site__logo' src={airbnbLogo} alt="AirBnb Logo" />
    </nav>
  )
}
