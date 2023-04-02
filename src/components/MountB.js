import React, { Component } from 'react'

export class MountB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "gorave"
        }
        console.log("constructor B")
        
      }
  
      static getDerivedStateFromProps(props,state){
          console.log("getDerivedStateFromProps B")
          return null
      }
      componentDidMount(){
          console.log("ComponentDidMount B");
      }
      
    render() {
      console.log("render B")
      return ( <div>lifeCycle B</div>)
      
    }
}

export default MountB
