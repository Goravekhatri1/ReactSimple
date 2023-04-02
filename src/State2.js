import React, { useState } from 'react'

function State2() {
    const [inputText, setinputText]= useState('hello')
    function changeHandler(e){
        setinputText(e.target.value)
    }
  return (
    <div>
        <input value={inputText} onChange={changeHandler}/>
        <p>you typed {inputText}</p>
        <button onClick={()=> setinputText('hello') }>reset</button>

      
    </div>
  )
}

export default State2
