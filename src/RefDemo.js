import React, { Component } from 'react'

class RefDemo extends Component {
constructor(props) {
  super(props)
  this.Myref = React.createRef()
  
}
componentDidMount(){
    this.Myref.current.focus();
    console.log(this.Myref)
}

ClickHandler = () =>{
alert(this.Myref.current.value)
console.log(this.Myref.current.value )
}
  render() {
    return (
      <div>
        <input type="text" ref={this.Myref}/>
        <button onClick={this.ClickHandler}>click</button>
        
        
      </div>
    )
  }
}

export default RefDemo
