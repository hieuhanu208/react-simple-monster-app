import React, { Component } from 'react'
import './card-list.css'
import Card from '../card/Card'

export default class CardList extends Component {
  render() {
    return (
    <div className="card-list">
        {this.props.monsters.map(monster => (
            <Card key= {monster.id} monster={monster}/>
        ))}
    </div> 
    )
  }
}
