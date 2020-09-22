import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {
    render() {
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}></img>
               <h1>{this.props.monster.name}</h1> 
                <p>{this.props.monster.email}</p>
            </div>
        )
    }
}
