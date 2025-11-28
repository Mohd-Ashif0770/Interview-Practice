import React, { useState, useEffect } from 'react'

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date())

        },1000)
        return ()=> clearInterval(id);

    },[])
     return(
        <div style={{fontSize:"30px"}}>
            {time.toLocaleTimeString()}
        </div>
     )
}
