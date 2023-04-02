import React from 'react'

function DessertsList(props) {

  
    let data1= props.data.sort((a, b) => a.calories - b.calories).filter(cal=>{return cal.calories<=500}).map(info => {
      let result = `${info.name} - ${info.calories} `
     return <li>{result}</li>
    
    })
    return (
      <ul>{ data1}</ul>
    );
  }
  
  export default DessertsList;
  