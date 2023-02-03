export const Task = (props) => {
  return (
    <div>
      <h4 style={props.isDone ? { textDecorationLine: "line-through" } : {}}>
        {props.taskName}
      </h4>
      <button onClick={() => props.deleteTask(props.id)}>❌</button>
      <button onClick={() => props.completeTask(props.id)}>✔</button>
    </div>
  );
};

export default Task;
