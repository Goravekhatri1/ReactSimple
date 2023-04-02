import React, { useState } from 'react'

function HackerRank(slides) {
 const [ActiveStep , setActiveStep] = React.useState(0);
 const allSlides = slides;
 const reset = ()=>{
    setActiveStep(0)
 }

 const next =()=>{
    let step = ActiveStep
    setActiveStep(++step)
 }
 const pre = ()=>{
    let step = ActiveStep
    setActiveStep(--step)
 }
 const GetContent = () =>{
  let data =allSlides[ActiveStep]
  return {data.tittle} {data.text} 
 }
  return (
    <div>
        disable ={ActiveStep===0}
        disable ={ActiveStep === allSlides.length-1 }

      {GetContent()}
    </div>
  )
}

export default HackerRank
