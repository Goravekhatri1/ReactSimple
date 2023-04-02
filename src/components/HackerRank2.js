import React from 'react'

function HackerRank2(props) {
 let  articles = props.articles

  return (
    <div>
         {
           articles.map(a =>{

   return              key={date}     a.title , a.upvote , a.date
           })

         }
    </div>
  )
}

export default HackerRank2
