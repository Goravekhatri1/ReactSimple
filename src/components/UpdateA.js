import React, { Component } from 'react'
import UpdateB from './UpdateB'

export class UpdateA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "gorave"
        }
        console.log("constructor Mount A")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps MountA")
        return null
    }

    componentDidMount() {
        console.log("DidComponentMountA")
    }

    shouldComponentUpdate(nextprops, nextState) {

        console.log("shouldComponentUpdate Update A")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log("getsnapshotBeforeUpdate  Update A ")
        return null 
    }
    componentDidUpdate() {
        console.log("componentDidUpdate Update A")
    }

   changeState=()=>{
    this.setState({
        name : "Heera Lal"
    })
   }
    render() {
        console.log("Render Mount A")
        return (
            <div>
                <div>
                    {this.state.name}
                </div>
                <button type='text' onClick={this.changeState}>click</button>
                <UpdateB/>
            </div>
        )
    }
}

export default UpdateA
