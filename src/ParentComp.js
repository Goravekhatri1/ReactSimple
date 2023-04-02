import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {

    // &&&&&&&&&&&&&PURE COMPONENTS ParentComp&&&&&&&&&&&&&&&&&&
    constructor(props) {
      super(props)
    
      this.state = {
         name:"gorave"
      }
    }
    componentDidMount(){
        setInterval(()=>{
        this.setState({
            name:"hi"
        })
        },2000)
    }
    
  render() {
    console.log("*****Parent Components**********")
    return (
      <div>
        <PureComp name={this.state.name}/>
        <RegComp name={this.state.name}  />
      </div>
    )
  }
}

export default ParentComp
