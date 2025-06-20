import React from 'react';

const IconButton = ({ icon, label, ...otherProps }) => {
  return (
    <button {...otherProps}>
      <img className="button__icon" src={`./src/assets/icons/${icon}`} alt={label} />
    </button>
  );
};

export default IconButton;
