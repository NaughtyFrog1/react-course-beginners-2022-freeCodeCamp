import React from 'react'
import star from '../images/star.svg'

export default function Card({
  image,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img className="card__img" src={'./images/' + image} alt={title} />
      <div className="card__stats">
        <img className="card__star" src={star} alt="star" />
        <span>{rating}</span>
        <span className="text--muted">({reviewCount}) &bull;</span>
        <span className="text--muted">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="fw--600">From ${price}</span> / person
      </p>
    </div>
  )
}
