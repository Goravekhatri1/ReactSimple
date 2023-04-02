import React from 'react'

function MapChild({persons}) {
  return (
    <div>
      <h1>my user id is {persons.userId} and id is {persons.id} and tittle is {persons.title} </h1>
    </div>
  )
}

export default MapChild
