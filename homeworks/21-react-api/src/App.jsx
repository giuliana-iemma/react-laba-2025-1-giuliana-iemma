import { useEffect, useState, useMemo, useCallback } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';
import { useTasksContext } from './context/TasksContext';
import { useValidation } from './hooks/useValidation';
import { useTasksStats } from './hooks/useTasksStats';
import { useKeyPress } from './hooks/useKeyPress';


function App() {
  const {total, completed, remaining} = useTasksStats();
  const [title, setTitle] = useState('');
  const [addErrorMessage, setAddErrorMessage] = useState('');
  const [editingKey, setEditingKey] = useState('');
  const [editErrorMessage, setEditErrorMessage] = useState('');  const [generalErrorMessage, setGeneralErrorMessage] = useState(''); 
  const isEnterPressed = useKeyPress('Enter');

  //READ
  const { state: tasks, dispatch } = useTasksContext();

  const completedTasks = useMemo (
    ()=> tasks.filter((task) => task.isCompleted), [tasks]
  );

  //Loading tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); //Executed when tasks are updated

  //CREATE
  //Add new task
  const createTask = useCallback((title) => {
  const trimmedTitle = title.trim();

  const { valid, message } = useValidation(trimmedTitle, tasks);

    if (!valid) {
      setAddErrorMessage(message);
      return;
    }

    try{
      dispatch({
            type: 'ADD',
            payload: {
              key: Date.now(),
              title: trimmedTitle,
              isCompleted: false,
            },
          });

          //Clear the states
          setAddErrorMessage('');
          setTitle('');
    } catch(err){
      setGeneralErrorMessage('Something when wrong while adding the task');
      console.log('Error adding task: ', err);
    }
   
  }, [tasks, dispatch]);

  //Add when pressing  enter
  useEffect(() => {
    if (isEnterPressed) {
      createTask(title);
    }
  }, [isEnterPressed,  title, createTask]); 

  //UPDATE
  

  const makeEditable = useCallback ((key) =>{
    setEditingKey(key);

  }, [])

  const updateTask = useCallback ((key, updatedText) => {
    const trimmedTitle = updatedText.trim();
    
    const { valid, message } = useValidation(trimmedTitle, tasks, key);

    if (!valid) {
      setEditErrorMessage(message);
      return;
    }  

    try{
      dispatch({ type: 'UPDATE', payload: { key: key, title: trimmedTitle } });

      setEditingKey('');
      setEditErrorMessage('');
    } catch(err){
      setGeneralErrorMessage("Something went wrong while editing the task.")
      console.log("Error editing task: ", err);
    }
   
  }, [dispatch, tasks]);

  const deleteTask = useCallback((key) => {
    try{
      dispatch({ type: 'DELETE', payload: key });
    } catch (err){
      setGeneralErrorMessage(`Something went wrong while deleting the task.`);
      console.log('Error deleting task: ', err)
    }
  }, [dispatch]);
  

  const toggleTaskComplete = useCallback((key) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: key });
    
  }, [dispatch]);

  function clearCompleted() {
    dispatch({ type: 'CLEAR_COMPLETED' });
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
          {generalErrorMessage && (
            <p className='general-error'>{generalErrorMessage}</p>
          )}

          {
            total > 0 && (
              <div className='stats'> 
                {completed === total ? (
                  <p>All tasks completed. You can clear the list.</p>
                ): (
                  <p>{completed} out of {total} tasks completed</p>
                )}
              </div>
            )
          }

          {tasks.length === 0 && <p className="tasks__message">This to-do list is empty</p>}

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


          {completedTasks.length > 0 && (
            <button onClick={clearCompleted} className="delete-button">
                {' '}
                Clear Completed Tasks
              </button>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
