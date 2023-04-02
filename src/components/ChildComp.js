import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.Handler(' kumar')}>Click to show my father name </button>
    </div>
  )
}

export default ChildComp
