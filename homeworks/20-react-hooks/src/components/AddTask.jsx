import React from 'react'

const AddTask = ({onAdd, value, errorMessage, ...otherProps}) => {
  return (
    <section className='add-task'>
      <div className='add-task__container'>
        <input className='add-task__input' type="text" value={value} {...otherProps}/>
        <button className='add-task__button' onClick={onAdd}>Add</button>
      </div>
      
      {errorMessage && <p className='add-task__error'>{errorMessage}</p>}
    </section>
    
  )
}

export default AddTask
