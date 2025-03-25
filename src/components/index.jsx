import React, { useState, useEffect } from 'react'
import './index.css'

function Index() {

  const [fact, setFact] = useState('loading...')

  const fetchFact = ()=>{
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setFact(data.text)
    }).catch((err)=>{
      alert('Something went wrong', err)
    })
  }

  useEffect(()=>{
    fetchFact();
  },[])

  return (
    <div className='main-container'>
      <h1 className='title'>do you know ?</h1>
      <div className='fact-container'>
        <h1 className='fact-msg'>{fact}</h1>
      </div>
      <div className='showMore-div'>
      <button className='showMore-btn' onClick={fetchFact}>Show More</button>
      </div>
    </div>
  )
}

export default Index