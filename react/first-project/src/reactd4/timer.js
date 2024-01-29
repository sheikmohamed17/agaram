import { useState,useEffect } from "react";

function Timer()
{
    let[initial,timerstarts]=useState(0)
    let[isTimerstart,setTimer]=useState(false)

    useEffect(()=>{
        if(isTimerstart)
        {
        timerstarts(initial+1)
        }
    },[isTimerstart,initial])

    return(
        <>
        <h2>Timer</h2>
        {initial}
        <button onClick={()=>{setTimer(!isTimerstart)}}>{isTimerstart?'stop':'start'}</button>{' '}
        <button onClick={async()=>{await setTimer(false);timerstarts(0)}}>RESEt</button>

        </>
    )
}
export default Timer