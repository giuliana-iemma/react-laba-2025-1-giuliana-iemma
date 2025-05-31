import React from 'react'

const IconButton = ({icon, action, label, ...otherProps}) => {
  return (
    <button onClick={action} {...otherProps}>
      <img className='button__icon' src={`./src/assets/icons/${icon}`} alt={label} />
    </button>
  )
}

export default IconButton
