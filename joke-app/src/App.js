import React from 'react'
import Joke from './components/Joke'
import jokes from './data/jokes.data'

export default function App() {
  return (
    <main className="jokes-container">
      {jokes.map((joke) => <Joke {...joke} />)}
    </main>
  )
}
