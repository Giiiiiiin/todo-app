import '../css-components/main.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ToDoList = (props) => {
  const [taskList, setTaskList] = useState([
    { text: "one", isCompleted: false },
    { text: "two", isCompleted: false },
    { text: "3", isCompleted: false },
    { text: "JHIN", isCompleted: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTaskList(taskList => [...taskList, { text: newTask, isCompleted: false }]);
      setNewTask("");
    } else {
      alert('Please enter a task name before adding.');
    }
  }

  function deleteTask(index) {
    const updateTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updateTasks);
  }

  function toggleComplete(index) {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updatedTasks);
  }

  function submitTask(index) {
    if (save.trim() !== "") {
      const updatedTasks = taskList.map((task, i) =>
        i === index ? { ...task, text: save } : task
      );
      setTaskList(updatedTasks);
      setEdit(false);
      setSave("");
    } else {
      alert('Please enter a new task name before editing.');
    }
  }

  return (
    <div className='toDo'>
      <div>
        <input 
          type='text'
          placeholder='Input task name...'
          value={newTask}
          onChange={handleInputChange}
        />
        <Button 
          variant="success ms-1"
          onClick={addTask}
        >
          Add
        </Button>
      </div>
  <div className='toDo'>
    {taskList.length === 0 ? (
      <p>The list is empty</p>
    ) : (
      <ol>
        {taskList.map((task, index) => (
          <li 
            className='mt-3' 
            key={index} 
            style={{ backgroundColor: task.isCompleted ? '#d3d3d3' : 'transparent' }} // Grey-out background
          >
            {edit === index ? (
              <>
                <input 
                  className='mb-3 mt-3'
                  type='text'
                  placeholder={task.text}
                  onChange={(e) => setSave(e.target.value)}
                />
                <br />
                <Button
                  className='complete-btn me-3 mb-3'
                  variant='success'
                  onClick={() => submitTask(index)}
                >
                  Save
                </Button>
                <Button
                  className='complete-btn me-3 mb-3 btn-disable'
                  variant='success'
                  onClick={() => toggleComplete(index)}
                  disabled={task.isCompleted}
                >
                  {task.isCompleted ? 'Undo' : 'Complete'}
                </Button>
                <Button
                  className='edit-btn me-3 mb-3 btn-disable'
                  variant='info'
                  onClick={() => setEdit(index)}
                  disabled={task.isCompleted}
                >
                  Edit
                </Button>
                <Button
                  className='delete-btn me-3 mb-3 btn-disable'
                  variant='danger'
                  onClick={() => deleteTask(index)}
                  disabled={task.isCompleted}
                >
                  Delete
                </Button>
                <Button
                  className='complete-btn me-3 mb-3'
                  variant='danger'
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button disabled="true"></Button>
                <span className='text' style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                  <p>{task.text}</p>
                </span>
                <Button
                  className='complete-btn me-3 mb-3'
                  variant='success'
                  onClick={() => toggleComplete(index)}
                >
                  {task.isCompleted ? 'Undo' : 'Complete'}
                </Button>
                <Button
                  className='edit-btn me-3 mb-3'
                  variant='info'
                  onClick={() => setEdit(index)}
                  disabled={task.isCompleted}
                >
                  Edit
                </Button>
                <Button
                  className='delete-btn me-3 mb-3'
                  variant='danger'
                  onClick={() => deleteTask(index)}
                  disabled={task.isCompleted}
                >
                  Delete
                </Button>
              </>
            )}
          </li>
        ))}
      </ol>
    )}
  </div>

      </div>
  );
}

export default ToDoList;
