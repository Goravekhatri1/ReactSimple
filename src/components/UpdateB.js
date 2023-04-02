import React, { Component } from 'react'

export class UpdateB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "gorave"
        }
        console.log("constructor Mount B")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps MountB")
        return null
    }

    componentDidMount() {
        console.log("DidComponentMountB")
    }

    shouldComponentUpdate(nextprops, nextState) {
        
        console.log("shouldComponentUpdate Update B")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log("getsnapshotBeforeUpdate  Update B ")
        return null 
    }
    componentDidUpdate() {
        console.log("componentDidUpdate Update B")
    }

//    changeState=()=>{
//     this.setState({
//         name : "Heera Lal"
//     })
//    }
    render() {
        console.log("Render Mount B")
        return (
            <div>
                <div>
                   lifeCycle child
                </div>
                {/* <button type='text' onClick={this.changeState}>click</button> */}
            </div>
        )
    }
}

export default UpdateB
