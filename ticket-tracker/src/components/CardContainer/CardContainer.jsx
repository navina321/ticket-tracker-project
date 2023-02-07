import React from 'react'
import Card from '../Card/Card'
import team from '../../data/team'
import './CardContainer.scss'

const CardContainer = () => {

    const cardJSX = team.map((member) => {
        return <Card name ={member.name} id ={member.id} role ={member.role}/>
    })


  return (
    <div className='card-container'>{cardJSX}</div>
  )
}

export default CardContainer