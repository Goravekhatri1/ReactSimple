import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(){
    super()
    this.state = {
        message: "hello gorave khatri"
    }
   
  }
  ClickHandler = () =>{
 this.setState({
   message: "hello i am heera lal " 
 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.ClickHandler} >click here</button>
      </div>
    )
  }
}

export default EventBind
