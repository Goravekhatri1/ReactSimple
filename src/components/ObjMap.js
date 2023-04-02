import React from 'react'
import MapChild from './MapChild'

function ObjMap() {
    const person = [
        {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        
        },
        {
        userId: 1,
        id: 2,
        title: "qui est esse",
        
        },
        {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        
        },
        {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        
        },
        {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        
        },
        {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
    
        },
        {
        userId: 1,
        id: 7,
    title: "magnam facilis autem",
        
        },
        {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        
        }
    ]
   const   PersonList= person.map(persons => (
   <MapChild key={persons.id} persons={persons} ></MapChild>
   )) 
  return (
    <div>
    {PersonList}  
    </div>
  )
}

export default ObjMap
