import React, { useState } from 'react'
 let id = undefined;
const StopWatch = () => {
   
    const [count,setCount] = useState(0);
    const [ active , setActive] = useState(false)
    const startHandler=()=>{
       id =  setInterval(()=>{
            // console.log(count)
            setCount((x)=>x+1)
            setActive(true)
            
        },1000)
    }
    const stopHandler=()=>{
        clearInterval(id)
        setActive(false)
    }
    const resetHandler=()=>{
         clearInterval(id)
        setCount(0);
         setActive(false)
       
    }
  return (
    <>
        <div>Start Stop Watch</div>
        <h2 style={{textAlign:'center'}}>{count}</h2>
        <div>
            <button disabled = {active} onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    </>
   
  )
}

export default StopWatch