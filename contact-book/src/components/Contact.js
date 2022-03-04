import React from 'react'

export default function Contact({ image, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={"./images/" + image} alt="contact" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="phone icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="mail icon" />
        <p>{email}</p>
      </div>
    </div>
  )
}
