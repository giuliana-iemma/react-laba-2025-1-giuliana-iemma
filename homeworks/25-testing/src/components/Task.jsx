import { useState } from 'react';
import IconButton from './IconButton';

const Task = ({
  title,
  editFunction,
  deleteFunction,
  toggleCompleteFunction,
  isEditing,
  saveChanges,
  errorMessage,
  isCompleted,
  ...otherProps
}) => {
  const [text, setText] = useState(title);

  return (
    <article className={isCompleted ? ' task task--completed' : 'task'}>
      <IconButton
        className="task__button task__button--check"
        icon={isCompleted === true ? `check-checked.png` : `check-unchecked.png`}
        onClick={toggleCompleteFunction}
      />

      <div className="task__title-container">
        {!isEditing ? (
          <p className="task__title">{title}</p>
        ) : (
          <>
            <input
              {...otherProps}
              className="task__input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {errorMessage && <p className="task__error">{errorMessage}</p>}
          </>
        )}
      </div>

      <div className="task__buttons">
        {isEditing ? (
          <button className="task__button task__button--text" onClick={() => saveChanges(text)}>
            Save
          </button>
        ) : (
          <IconButton
            onClick={editFunction}
            className="task__button task__button--icon"
            icon={'edit.png'}
          />
        )}
        <IconButton
          onClick={deleteFunction}
          className="task__button task__button--icon"
          icon={'delete.png'}
        />
      </div>
    </article>
  );
};

export default Task;
