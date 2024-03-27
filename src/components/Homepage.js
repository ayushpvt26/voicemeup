import React from 'react'
import sentimentsJS from 'sentiments-js';


export default function Homepage() {

  const checkThisText = async () => {
    // sentiment
  const beerScore = await sentimentsJS.analyse({
    text: data,    
    type: 'sentiment',    
  });
  console.log("'I love cold beers' : ", JSON.stringify(beerScore));

  }


  return (
  <>

  </>
  )
}
