import React from 'react';

const AddTask = ({ onAdd, value, errorMessage, ...otherProps }) => {
  return (
    <section className="add-task">
      <div className="add-task__container">
        <input
          data-testid="task-input"
          className="add-task__input"
          type="text"
          value={value}
          {...otherProps}
        />
        <button data-testid="addTask-button" className="add-task__button" onClick={onAdd}>
          Add
        </button>
      </div>

      {errorMessage && (
        <p date-testid="error-msg" className="add-task__error">
          {errorMessage}
        </p>
      )}
    </section>
  );
};

export default AddTask;
