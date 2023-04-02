import React from 'react'

function ChildProps(props) {
    const names = "gorave"
    names=="gorave" ? console.log("yes i am gorave") : console.log("don't know"); 
    const name ={
        backgroundColor:"pink",
         color: "blue",
        fontSize: "40px",
        border : "3px solid yellow"
    }
  return (
    <>
    <div style={name}> 
      <h1>{props.children}</h1>
     <h3 className='gorave'></h3>
    </div>
    </>
  )
}

export default ChildProps
