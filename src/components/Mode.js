import React from 'react'

function Mode() {
    let mode = true;
    let lightMode = <h1>Light mode on</h1>
    let darkMode = <h1>Dark mode on</h1>

    const clickHandler=()=>{
        mode = !mode
        if(mode == true){
            console.log("dark mode is on ")
        }else{
            console.log("light mode is on ")
        }
    }
  return (
    <div>
      {mode ? darkMode : lightMode}
      <button onClick={clickHandler}>click</button>
    </div>

  )
}

export default Mode
