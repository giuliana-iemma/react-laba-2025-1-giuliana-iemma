import React from 'react'
import IconButton from './buttons/IconButton'

const Task = ({title, editFunction, deleteFunction}) => {
  
  return (
    <article className='task'>
      <input className='task__checkbox' type="checkbox" />  
      <div className='task__title-container'>
        <p className='task__title'>{title}</p>
      </div>
      <div className='task__buttons'>
        <IconButton action={editFunction} className="task__button" icon={"edit.png"}/>
        <IconButton action={deleteFunction} className="task__button" icon={"delete.png"}/>
      </div>
    </article>
  )
}

export default Task
