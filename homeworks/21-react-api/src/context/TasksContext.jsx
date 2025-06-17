import { createContext, useContext, useReducer } from 'react';

const initialState = []; //Empty array of tasks

//Reducer
function tasksReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]; // payload: { key, title, isCompleted }

    case 'DELETE':
      return state.filter((task) => task.key !== action.payload); //The payload here is the key of the task that we want to delete

    case 'UPDATE':
      return state.map((task) =>
        task.key === action.payload.key ? { ...task, title: action.payload.title } : task
      ); //payload: {key, title}

    case 'TOGGLE_COMPLETE':
      return state.map((task) =>
        task.key === action.payload ? { ...task, isCompleted: !task.isCompleted } : task
      );

    case 'CLEAR_COMPLETED':
      return state.filter((task) => !task.isCompleted); //Only keep those who are not completed

    case 'DELETE_ALL':
      return (state = []);

    default:
      return state;
  }
}

//Context
const TasksContext = createContext();

//Provider
export function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, [], () => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  //state: list of tasks. dispatch: function to change the state.

  return <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>;
}

//Custom Hook
export function useTasksContext() {
  return useContext(TasksContext);
}
