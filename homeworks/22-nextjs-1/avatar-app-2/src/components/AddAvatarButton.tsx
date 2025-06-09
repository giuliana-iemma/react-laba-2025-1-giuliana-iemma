import React from 'react';

type AddAvatarButtonProps = {
  onClick: () => void;
};

const AddAvatarButton = ({ onClick }: AddAvatarButtonProps) => {
  return (
    <button className="button-add" onClick={onClick}>
      <img className="button-add__icon" src="/icons/add.svg" alt="Add" />
    </button>
  );
};

export default AddAvatarButton;
