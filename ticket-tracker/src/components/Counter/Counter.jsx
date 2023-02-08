import React from 'react'
import Button from '../Button/Button'
import './Counter.scss'
import { useState } from 'react'

const Counter = () => {

  const randomNumber = () => {
    return Math.floor(Math.random()*10)
  }
  
  const [counter, setCounter] = useState(randomNumber)

  const handleIncrement = () => {
    setCounter(counter + 1)
  };
  
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(counter)
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='counter'>
      <h3 className='counter__title'>Counter</h3>
      <div className='counter__count'>
        <div onClick={handleDecrement} >
          <Button buttonText={"-"}/>
        </div>
        <h4 className='counter__count--display'>{counter}</h4>
        <div  onClick={handleIncrement}>
        <Button buttonText={"+"}/>
        </div>
      </div>
    </div>
  )
}

export default Counter