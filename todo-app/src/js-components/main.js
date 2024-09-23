import '../css-components/main.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
/*
import Modal from 'react-bootstrap/Modal';
*/

const ToDoList = (props) => {
  const [taskList, setTaskList] = useState(["one", "two", "3", "JHIN"]);
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState("");
  const [isActive, setActive] = useState("");


  function handleInputChange(event) {
    setNewTask(event.target.value)
  };

  function addTask() {
    if(newTask.trim() !== "") {
      setTaskList(taskList => [...taskList, newTask]);
      setNewTask("");
    }
    else {
      alert('Please enter a task name before adding.');
    }
  };
  
  function deleteTask(index) {
    const updateTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updateTasks);
  };

  function submitTask(index) {
    if(save.trim() !== "") {
      taskList[index] = save;
      setEdit(true);
      setSave("");
    }
    else {
      alert('Please enter a new task name before editing.');
    }
  }

  return (
      <div className='toDo'>
        <p>Active</p>
          <p className="txt-disable">Disabled</p>
          <Button variant="info">Active</Button>
          <br /><br />
          <Button variant="info"className='btn-disable'>Disabled</Button>
          <br /><br />
          <Button variant="success">Complete</Button>
          <Button variant="info">Edit</Button>
          <Button variant="danger">Remove</Button>
          <Button variant="success">Save</Button>

        <h1>Real</h1>
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

        <ol>
          {taskList.map((task, index) =>
            <li className='mt-3' key={index}>
              {edit === index ? 
              <>
                <input 
                  className='mb-3 mt-3'
                  type='text'
                  placeholder={task}
                  onChange={(task) => setSave(task.target.value)}
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
                  onClick={() => setActive(false)}
                >
                  Complete
                </Button>
                <Button
                  className='edit-btn me-3 mb-3 btn-disable'
                  variant='info'
                  onClick={() => setEdit(index)}
                >
                    Edit
                </Button>
                <Button
                  className='delete-btn me-3 mb-3 btn-disable'
                  variant='danger'
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </Button>
                <Button
                  className='complete-btn me-3 mb-3'
                  variant='danger'
                  onClick={() => setEdit(true)}
                >
                  Cancel
                </Button>
              </>
              :
              <>
                <span className='text'><p>{task}</p></span>
                <Button
                  className='complete-btn me-3 mb-3'
                  variant='success'
                  onClick={() => setActive(true)}
                >
                  Complete
                </Button>
                <Button
                  className='edit-btn me-3 mb-3'
                  variant='info'
                  onClick={() => setEdit(index)}
                >
                    Edit
                </Button>
                <Button
                  className='delete-btn me-3 mb-3'
                  variant='danger'
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </Button>
              </>
              }
            </li>
          )}
        </ol>
      </div>
  );
}

export default ToDoList;