import React, { Component } from 'react'
import ChildComp from './ChildComp';

export class ParentsComp extends Component {
    constructor(){
        super()
        this.state={
            parentName: "Mukesh"
        }
        this.ParentGreet = this.ParentGreet.bind(this) 
    }

    ParentGreet(childName){
        alert(`my father name is ${this.state.parentName} ${childName}`);
    }
  render() {
    return (
      <div>
        <ChildComp Handler={this.ParentGreet}/>
      </div> 
    )
  }
}

export default ParentsComp
