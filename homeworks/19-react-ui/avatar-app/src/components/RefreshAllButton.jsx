import React from 'react';

const RefreshAllButton = ({ onClick }) => {
  return (
    <button className="button-refresh" onClick={onClick}>
      Refresh All
    </button>
  );
};

export default RefreshAllButton;
