
import React from "react";
import"./App.css"
 import { useState,useEffect,useRef } from "react";
 const App =()=>{
    const [count,setCount]=useState(0)
    const [state,setState]=useState(false)
    const disableButton = useRef(null);
 useEffect(()=>{
    let countDown="  "
    if(state){
      countDown =setInterval(()=>{ 
            setCount((prevCount)=>prevCount+1)},1000)
            
    }
     return()=>clearInterval(countDown)
  },[state])
  
  const startButton=()=>{
   
    disableButton.current.disabled=true


    setState(true)
  }
  const stopButton=()=>{
    disableButton.current.disabled=false
    setState(false)
  }

    return(
        <div className="container">
        <p>{count}</p>
        <button className="start-btn" ref={disableButton} onClick={()=>{startButton()}}>Start</button>
        <button className="stop-btn" onClick={()=>{stopButton()}}>Stop</button>
        </div>
    )
   
 } 
 export default App;


