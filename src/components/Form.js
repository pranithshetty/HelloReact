import { useState } from "react"

export const Form =()=>{
    const [name, setName] = useState('')
    const [disc, setDisc] = useState('')
    const [option, setOption]  = useState('')
    const dropDownData = ['op1','op2','op3']
    const setNameHandler =(value)=>{
        setName(value)
        console.log(value);
    }
    const setOptionHandler =(value)=>{
        setOption(value)
            console.log(value);
 
    }
    const handleSubmit = (event)=> {
        event.preventDefault()
        alert(`submitted ${name}, ${disc}, ${option}`)
    }
    return(
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(event)=>{setNameHandler(event.target.value)}}/>
                <div>
                <label>Description</label>
                <textarea value={disc} onChange={(event)=>setDisc(event.target.value)}></textarea>
                </div>
                
                
                <div>
                <label>Choices</label>
                <select  onChange={(event)=>setOptionHandler(event.target.value)}>
                    {dropDownData.map((data)=>{
                        
                        return (<option key={data} value= {data}>{data}</option>)
                    })}
                </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        
    )
}