import React from 'react'
import Button from '../Button/Button'
import './Counter.scss'
const Counter = () => {
  
  return (
    <div className='counter'>
      <h3 className='counter__title'>Counter</h3>
      <div className='counter__count'>
        <Button buttonText={"-"}/>
        <h4 className='counter__count--display'>0</h4>
        <Button buttonText={"+"}/>
      </div>
    </div>
  )
}

export default Counter