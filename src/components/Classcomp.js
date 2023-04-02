import React, { Component } from 'react'

export class Classcomp extends Component {
  render() {
    return (
      <div>
       <h1> hello this is {this.props.name} {this.props.heroName}</h1>
      </div>
    )
  }
}

export default Classcomp
