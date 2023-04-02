import React, { Component } from 'react'

 class IfEles extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         IsLoggIn : true
      }
    }
    
  render() {
    // IF ELSE 
// if (this.state.IsLoggIn){
//     return <div>hello gorave</div>
// } else{
//     return <div>hello guest</div>
// }
// VARIABLE 
// let msg 
// if (this.state.IsLoggIn){
//     msg =<div>hello gorave</div> 
// }
// else {
//     msg = <div>Hello guest </div>
// }
// TERNARY OPERATER 
return this.state.IsLoggIn ? <div>hello gorave</div> : <div>Hello guest </div>
    
// return this.state.IsLoggIn && <div>hello gorave</div>

    
  
}
 }
export default IfEles
