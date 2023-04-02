import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn : false 
      }
    }
   
  render() {
    return(
 this.state.isLogIn  ?( 
 <div>hello gorave</div>
 ) : (
 <div>hello guest</div>
 )
 )
 
    // if (this.state.isLogIn){
    //     return (<div>hello gorave</div>)
    // }
    // else{
    //     return(<div>hello guest</div>)
    // }
    
  }
}

export default Conditional
