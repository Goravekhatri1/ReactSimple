import React, { useState } from 'react'

function sort() {
   const [state, setstate] =  useState("VOTE");

   const setsortstate=(state)=>{
   setstate(state)
   }
   const getContent =()=>{
    let sortedArticle = article 
    if (state =="VOTE" ){

        sortedArticle.sort((a,b) =>a.upvote < b.upvote ? 1 : -1   )
    }
    else {
    sortedArticle.sort((a,b) =>a.date < b.date ? 1 : -1   )
   }
   return <Article article ={sortedArticle}/>
   }

  return (
    <div>
       {getContent()}
    </div>
  )
}

export default sort
