import React, { Component } from 'react'
import './search-box.css'

export default class SearchBox extends Component {
    render() {
        return (
            <input
            className='search'
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.handleChange}
          ></input>
        )
    }
}
