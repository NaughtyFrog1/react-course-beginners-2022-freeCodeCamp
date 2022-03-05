import React from 'react'
import landmarkImg from '../images/landmark.svg'

export default function Travel({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <>
      <div className="travel">
        <img className="travel__img" src={imageUrl} alt={title} />
        <div className="travel__info">
          <div className="travel__location-container">
            <img
              className="travel__landmark"
              src={landmarkImg}
              alt="Landmark icon"
            />
            <span className="travel__location">{location}</span>
            <a
              className="travel__maps"
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="travel__title">{title}</h2>
          <p className="travel__date">
            {startDate} - {endDate}
          </p>
          <p className="travel__desc">{description}</p>
        </div>
      </div>
      <hr className="travel__hr" />
    </>
  )
}
