import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data/data'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {data.map((cardData) => <Card {...cardData} />)}
    </>
  )
}
