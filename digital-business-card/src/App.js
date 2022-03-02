import React from 'react'
import About from './components/About'
import Info from './components/Info'
import Social from './components/Social'

export default function App() {
  return (
    <div className='business-card'>
      <Info />
      <About />
      <Social />
    </div>
  )
}
