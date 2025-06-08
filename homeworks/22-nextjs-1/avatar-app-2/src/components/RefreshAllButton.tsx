import React from 'react';

type RefreshAllButtonProps = {
  onClick: () => void;
};

const RefreshAllButton = ({ onClick }: RefreshAllButtonProps) => {
  return (
    <button className="button-refresh" onClick={onClick}>
      Refresh All
    </button>
  );
};

export default RefreshAllButton;
