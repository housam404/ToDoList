import React, { useState } from 'react'
import './App.css';
function Todo() {
  const [input , setInput] = useState('');
  const [tasks , setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (input.trim() === '') return;

    // FIX HERE
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex].text = input;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]); // FIX
    }

    setInput('');
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  }
   
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div className='all'>
      <h1 style={{color:"white"}}>to do </h1>
      <div className='inpbutt'>
        
      <input
        id='inp'
        type='text'
        value={input}
        placeholder='add to the list'
        onChange={(e)=> setInput(e.target.value)}
      />

      <button onClick={addTask}id='b1'>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li>
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
              </span>
            <button onClick={() => toggleComplete(index)}id='b2'>
              {task.completed ? "Undo" : "Done"}
            </button>

            <button onClick={() => editTask(index)}id='b3'>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}id='b4'>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;
