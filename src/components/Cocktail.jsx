import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article
      className='cocktail'
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-delay='50'
      data-aos-duration='1200'
      data-aos-easing='ease-in-out'
    >
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
