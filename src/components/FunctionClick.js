import React from 'react'

function FunctionClick() {
    function ClickHandler(){
        console.log("you click on button");
    }

  return (
    <div>
      <button onClick={ClickHandler}>clicked</button>
    </div>
  )
}

export default FunctionClick
