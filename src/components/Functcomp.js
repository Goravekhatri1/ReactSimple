import React from 'react'

// function Functcomp() {
//   return (
//     <div>
//       <h1>hello World by Functional Components</h1>
//     </div>
//   )
// }
const Functcomp = props => {
    return(
        <div>
            <h1>hello this is {props.name} and {props.heroName} </h1>
            {props.children}
        </div>
        
        ) 
    }

export default Functcomp
