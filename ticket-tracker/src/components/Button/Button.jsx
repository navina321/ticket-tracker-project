import React from 'react'
import './Button.scss'

const Button = (props) => {

  const buttonText = props.buttonText


  
  return (
    <button className='buttonStyle'>{buttonText}</button>
  )
}

export default Button