import React from 'react'

function Lab() {
    function handleClick() { 
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number'); 
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }
  return (
    <div>
      <button onClick={handleClick}>Guess 1 to 3 number</button>
    </div>
  )
}

export default Lab
