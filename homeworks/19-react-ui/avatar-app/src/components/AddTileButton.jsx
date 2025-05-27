import React from 'react';

const AddAvatarButton = ({ onClick }) => {
  return (
    <button className="button-add" onClick={onClick}>
      <img className="button-add__icon" src="./src/assets/icons/add.svg" alt="Add" />
    </button>
  );
};

export default AddAvatarButton;
