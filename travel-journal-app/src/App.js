import React from 'react'
import Navbar from './components/Navbar'
import Travel from './components/Travel'
import data from './data'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <section className="travels">
        {data.map((travel) => (
          <Travel key={travel.id} {...travel} />
        ))}
      </section>
    </div>
  )
}
