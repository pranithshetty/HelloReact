const ChildComponent = (props) => {
    return <div>
        <button onClick={()=>props.greetHandler('childComp says hello ')}>Child Button</button>
    </div>
}

export default ChildComponent