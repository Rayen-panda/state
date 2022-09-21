import React, { Component } from 'react'

export default class Fullname extends Component {
    state = {
        name: "Chebbi Rayen"
      };
  render() {
    return (
      <div className='text'>{this.state.name}</div>
    )
  }
}

