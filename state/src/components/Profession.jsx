import React, { Component } from 'react'

export default class profession extends Component {
    state = {
        profession: "Artist "
      };
  render() {
    return (
      <div  className='text'>{this.state.profession}</div>
    )
  }
}
