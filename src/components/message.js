import React from 'react'
import { useState } from 'react'
const Message = ()=>{
    const clickHandler =(event, count)=>{
        console.log("clicked", event, count);
    }
    const [message, setMessage] = useState('welcome boi')
    return <div>
        <h1>
            {message}
        </h1>
        <button onClick={()=>setMessage("Thanks")}>
        \subscibr
        </button>
        <button onClick={(event)=>clickHandler(event,5)}>
    click 5
        </button>
    </div>
}

export default Message