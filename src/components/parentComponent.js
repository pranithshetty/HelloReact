import ChildComponent from "./childComponent"
const ParentComponent =  ()=>{
    const greet = (name)=>{
        alert(name)
    }
    return <ChildComponent greetHandler  ={greet} />
}

export default ParentComponent