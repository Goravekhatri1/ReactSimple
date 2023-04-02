import React, { Component } from 'react'

export class State extends Component {
    constructor(){
        super()
        this.state = {
            message: "wellcome guest"
        }
    }
  clickHandler(){
        this.setState({
            message: `thank you for login in my page dear ${this.props.gorave} `
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>  this.clickHandler()}>LOGIN </button>
      </div>
    )
  }
}

export default State
