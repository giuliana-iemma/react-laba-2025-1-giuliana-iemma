import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  //READ
  function getSavedTasks() {
    try {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Couldn't find any tasks: ", error);
      return [];
    }
  }

  const [tasks, setTasks] = useState(getSavedTasks());

  //Get tasks when mounted
  useEffect(() => {
    getSavedTasks();
  }, []); //Executed at mounting

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); //Executed when tasks are updated

  //CREATE
  const [title, setTitle] = useState('');
  const [addErrorMessage, setAddErrorMessage] = useState('');

  //Add new task
  function createTask(title) {
    //Remove blank spaces in the start or end of the title
    const trimmedTitle = title.trim();

    const taskExists = tasks.some((task) => task.title === trimmedTitle);

    const isValid = /^[a-zA-Z0-9\s]+$/.test(trimmedTitle);

    if (trimmedTitle.length === 0) {
      setAddErrorMessage('Please, write something before pressing Add button');
      console.error('Please, write something before pressing the button');
    } else if (taskExists) {
      //Validation: Handle duplicate to-do item
      setAddErrorMessage('This task is already in the list.');
      console.error('This task is already in the list.');
    } else if (title.length > 20) {
      //Validation: Exceeding Maximum To-do length
      setAddErrorMessage('This task is too long. Maximum of 20 characters');
      console.error('This task is too long. Maximum of 20 characters');
    } else if (!isValid) {
      //Validation: Invalid characters
      setAddErrorMessage('You can only use letters or numbers');
      console.error('You can only use letters or numbers');
    } else {
      setTasks([...tasks, { key: Date.now(), title: trimmedTitle, isCompleted: false }]);

      //Clear the states
      setAddErrorMessage('');
      setTitle('');
    }
  }

  //UPDATE
  const [editingKey, setEditingKey] = useState('');
  const [editErrorMessage, setEditErrorMessage] = useState('');

  function makeEditable(key) {
    console.log('making editable');
    //Save which task is being edited
    setEditingKey(key);
  }

  function updateTask(key, title) {
    const trimmedTitle = title.trim();
    const taskExists = tasks.some((task) => task.title === trimmedTitle && task.key !== key);
    const isValid = /^[a-zA-Z0-9\s]+$/.test(trimmedTitle);
    const updatedTasks = tasks.map((task) =>
      task.key === key ? { ...task, title: trimmedTitle } : task
    );

    if (trimmedTitle.length === 0) {
      setEditErrorMessage('Please, write something before pressing Add button');
      console.error('Please, write something before pressing the button');
    } else if (taskExists) {
      //Validation: Handle duplicate to-do item
      setEditErrorMessage('This task is already in the list.');
      console.error('This task is already in the list.');
    } else if (title.length > 20) {
      //Validation: Exceeding Maximum To-do length
      setEditErrorMessage('This task is too long. Maximum of 20 characters');
      console.error('This task is too long. Maximum of 20 characters');
    } else if (!isValid) {
      //Validation: Invalid characters
      setEditErrorMessage('You can only use letters or numbers');
      console.error('You can only use letters or numbers');
    } else {
      setTasks(updatedTasks);
      setEditingKey('');
      setEditErrorMessage('');
    }
  }

  function deleteTask(key) {
    console.log(tasks);
    const updatedTasks = tasks.filter((task) => task.key !== key);
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  function toggleTaskComplete(key) {
    const updatedTasks = tasks.map((task) =>
      task.key === key ? { ...task, isCompleted: !task.isCompleted } : task
    );

    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask
          onAdd={() => createTask(title)}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          errorMessage={addErrorMessage}
        />

        <section className="tasks">
          {tasks && tasks.length === 0 && (
            <p className="tasks__message">This to-do list is empty</p>
          )}
          {!tasks && <p className="tasks__message">This to-do list is empty</p>}

          {tasks &&
            tasks.map((task) => (
              <Task
                title={task.title}
                key={task.key}
                editFunction={() => makeEditable(task.key, task.title)}
                isEditing={editingKey === task.key} //True if this is the task being edited
                saveChanges={(updatedText) => updateTask(task.key, updatedText)}
                errorMessage={editErrorMessage}
                deleteFunction={() => deleteTask(task.key)}
                isCompleted={task.isCompleted}
                toggleCompleteFunction={() => toggleTaskComplete(task.key)}
              />
            ))}
        </section>
      </div>
    </>
  );
}

export default App;
