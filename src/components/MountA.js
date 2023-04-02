import React, { Component } from 'react'
import MountB from './MountB'

export class MountA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "gorave"
      }
      console.log("constructor")
      console.log(this.state.name)
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    
  render() {
    console.log("render")
    return ( 
    <div>
      <div>lifeCycle A </div>  
       <MountB/>
    </div>
)    
  }
}

export default MountA
