import React, { Component } from 'react'

export class Count extends Component {
    constructor(){
        super()
        this.state = {
          count : 0
        }
    }
    Increament(){
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{console.log("callback fucntio " ,this.state.count)})
        // console.log(this.state.count)

        this.setState((prevState,props)=>({
            count: prevState.count+1 
            
        }))
       
    }

    Increament1(){
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
        this.Increament()
    }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={()=> this.Increament1()}>click here</button>
      </div>
    )
  }
}

export default Count
