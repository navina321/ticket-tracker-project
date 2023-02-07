import React from 'react'
import Button from '../Button/Button'
import './Counter.scss'
const Counter = () => {
  
  return (
    <div className='counter'>
      <h3 className='counter__title'>Counter</h3>
      <div>
        <Button className='counter__count'/>
        <h4 className='counter__count--display'>0</h4>
        <Button/>
      </div>
    </div>
  )
}

export default Counter