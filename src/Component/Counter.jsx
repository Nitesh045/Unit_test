import React, { useState } from 'react'

export const Counter = () => {
    const[count,setCount]= useState(0)
  const plusCounter=()=>{
    setCount(count=>count+1);
  }
  const minusCounter=()=>[
    setCount(count=>count-1)
  ]
  const resetCounter=()=>{
    setCount(0)
  }

  return (
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',flexDirection:'column',justifyItems:'center',margin:"auto",marginTop:'20%',gap:'20px'}}>
       <h3 data-testid="countId">{count}</h3> 
        <button onClick={plusCounter}>Plus</button>
        <button onClick={minusCounter}>Minus</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}
