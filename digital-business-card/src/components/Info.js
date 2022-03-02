import React from 'react'
import cardImg from '../images/Rectangle 90.png'

export default function Info() {
  return (
    <header>
      <img src={cardImg} alt="card img" />
      <h1 className="info__name">Laura Smith</h1>
      <p className="info__job">Frontend Developer</p>
      <p className="info__web">laurasmith.website</p>
      <div className="info__buttons">
        <button className="info__button">
          <i className="fa-solid fa-envelope"></i>
          <span>Email</span>
        </button>
        <button className="info__button info__button--linkedin">
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </button>
      </div>
    </header>
  )
}
