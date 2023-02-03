import { useState } from "react";
import Task from "./Task";
export const ToDolist = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    const task = {
      id: tasks.length,
      taskName: newTask,
      isDone: false,
    };
    console.log(task);
    setTask([...tasks, task]);
  };
  const deleteTask = (id) => {
    // console.log(id);
    const newToDo = tasks.filter((item) => item.id !== id);
    setTask(newToDo);
  };
  const completeTask = (id) => {
    const newToDo = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });
    setTask(newToDo);
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} type="text" />
      <button onClick={addTask}>Add task</button>
      <div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              taskName={task.taskName}
              isDone={task.isDone}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default ToDolist;
