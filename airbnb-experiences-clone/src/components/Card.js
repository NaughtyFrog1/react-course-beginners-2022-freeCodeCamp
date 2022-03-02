import React from 'react'
import star from '../images/star.svg'

export default function Card() {
  return (
    <div className="card">
      <img
        className="card__img"
        src="./images/katie-zaferes.png"
        alt="Katie Zaferes"
      />
      <div className="card__stats">
        <img className="card__star" src={star} alt="star" />
        <span>5.0</span>
        <span className='text--muted'>(6) &bull; </span>
        <span className='text--muted'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className='fw--600'>From $136</span> / person</p>
    </div>
  )
}
