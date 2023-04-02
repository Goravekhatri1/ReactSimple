import React from 'react'
import './StyleSheet.css'

function Css(props) {
    // one way to declear the CSS
 const ClassName = props.name ? 'primary' : 'font'
//  2nd way to declear the CSS
const heading = {
    fontSize : '72px',
    color: 'blue',
    fontWeight: '900'
}
  return (
    <div>
      <h1 className={ClassName}>Hello Gorave khatri</h1>
      <p style={heading}>hello this is inline CSS</p>
    </div>
  )
}

export default Css
