import React from 'react'
import Counter from '../Counter/Counter';
import "./Card.scss"

const Card = (props) => {
  
  const {name, id, role} = props;
  
    return (
    <div className='card' key={id}>
      <h1 className='card__name'>{name}</h1>
      <h2 className='card__role'>{role}</h2>
      <Counter/>
    </div>
  )
}

export default Card