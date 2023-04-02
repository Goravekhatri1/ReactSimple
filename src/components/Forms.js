import { getByAltText } from '@testing-library/react'
import React, { Component } from 'react'

 class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username : '',
         comment :  '',
         topic : 'react'
        }
    }
    UsernameHandle = (event) => {
    this.setState({
        Username : event.target.value
       
    })
    console.log("hello")
    }

    CommentHandler=(e)=>{
  this.setState({
    comment : e.target.value
  })
    }
    topicHandler=(e)=>{
   this.setState({
    topic: e.target.value
   })
    }
    SubmitHandler = (event) => {
    alert(`${this.state.Username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
    }
    
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <div>
        <label>Username</label>
        <input value={this.state.Username} onChange={this.UsernameHandle} type='text'></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.CommentHandler}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select  value={this.state.topic} onChange={this.topicHandler}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <button type='submit' >submit</button>
      </form>
    )
  }
}

export default Forms
