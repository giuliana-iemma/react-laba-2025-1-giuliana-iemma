import React from 'react';

const IconButton = ({ icon, label, ...otherProps }) => {
  return (
    <button data-testid={otherProps['data-testid'] || 'icon-btn'} {...otherProps}>
      <img
        data-testid="icon-img"
        className="button__icon"
        src={`./src/assets/icons/${icon}`}
        alt={label}
      />
    </button>
  );
};

export default IconButton;
