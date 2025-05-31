import { useEffect, useState } from 'react';
import AddTask from './components/AddTask'
import Task from './components/Task';

function App() {
  //Save when the to-do list is updated
   /*  useEffect(()=> {
      const savedTasks = localStorage.getItem('tasks');
        
      console.log('Loading:', savedTasks); 

      if(savedTasks){
        setTasks(JSON.parse(savedTasks));
      }
    }, []); //Executed at mounting */

  const [tasks, setTasks] = useState([])


  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    //Add new task
    function createTask (title){
        //Remove blank spaces in the start or end of the title
        const trimmedTitle = title.trim();

        const taskExists = tasks.some(task => task.title === trimmedTitle);

        const isValid =  /^[a-zA-Z0-9\s]+$/.test(trimmedTitle);

        if (trimmedTitle.length === 0) {
          setErrorMessage("Please, write something before pressing Add button");
          console.error("Please, write something before pressing the button")
        } else if (taskExists){
          //Validation: Handle duplicate to-do item
          setErrorMessage("This task is already in the list.");
          console.error("This task is already in the list.")
        } else if (title.length > 20 ){
          //Validation: Exceeding Maximum To-do length
          setErrorMessage("This task is too long. Maximum of 20 characters");          
          console.error("This task is too long. Maximum of 20 characters")
        } else if (!isValid){
          //Validation: Invalid characters
          setErrorMessage("You can only use letters or numbers");      
          console.error("You can only use letters or numbers")    
        } else {
           setTasks(
            [
              ...tasks,
              {key: Date.now(),
              title: trimmedTitle
              }
            ]
          );

          //Clear the states
          setErrorMessage("");
          setTitle("");
        }
    }

  const [editingKey, setEditingKey] = useState('');
  const [newTitle, setNewTitle] = useState('');

    function makeEditable (){
      console.log("making editable")
    }
    
    function updateTask (){

    }

    function deleteTask (){

    }

    

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

  return ( 
    <>
      <div className='container'>
        <AddTask 
          onAdd={() => createTask(title)} 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          errorMessage={errorMessage}/>

        <section className='tasks'>
          {tasks.length === 0 && <p className='tasks__message'>This to-do list is empty</p> }

          {tasks.map((task) => (
            <Task title={task.title} key={task.key} editFunction={() => makeEditable}/>
          ))}
        </section>
      </div>
    </>
  )
}

export default App
