import React from 'react'
import Card from '../Card/Card'
import './CardContainer.scss'

const CardContainer = (props) => {
  const {team} = props

    const cardJSX = team.map((member) => {
        return <Card name ={member.name} id ={member.id} role ={member.role} key = {member.id}/>
    })


  return (
    <div className='card-container'>{cardJSX}</div>
  )
}

export default CardContainer