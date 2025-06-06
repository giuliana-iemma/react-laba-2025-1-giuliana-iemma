import { useRef, useEffect } from 'react';

const AddTask = ({ onAdd, value, errorMessage, ...otherProps }) => {
  const inputRef = useRef(null);

  //Focus input when it empties
  useEffect(() => {
    if (value === '') {
      inputRef.current?.focus(); //If inputRef.current exists, execute .focus(). Optional chaining.
    }
  }, [value]);

  return (
    <section className="add-task">
      <div className="add-task__container">
        <input
          ref={inputRef}
          className="add-task__input"
          type="text"
          value={value}
          {...otherProps}
        />
        <button className="add-task__button" onClick={onAdd}>
          Add
        </button>
      </div>

      {errorMessage && <p className="add-task__error">{errorMessage}</p>}
    </section>
  );
};

export default AddTask;
