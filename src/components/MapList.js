import React from 'react'

function MapList() {
    const name =['heera lal ', 'gorave' , 'aksha', 'simran']
    const  NameList = name.map(names => <h1>i am {names}</h1>)
  return (
    <div>
        {NameList}
{/*       
        <h1>{name[0]}</h1>
        <h1>{name[1]}</h1>
        <h1>{name[2]}</h1>
        <h1>{name[3]}</h1>
       */}
    </div>
  )
}

export default MapList
