import React from 'react'

export default function Joke({ setup, punchline }) {
  return (
    <div className='joke'>
      <p className="joke__setup">{setup}</p>
      {punchline && <p className="joke__punchline">{punchline}</p>}
      <hr className='joke__hr' />
    </div>
  )
}
