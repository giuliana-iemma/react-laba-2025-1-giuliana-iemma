import React from 'react'

const RefreshAllButton = ({refreshAll}) => {
  return (
    <button className='button-refresh' onClick={refreshAll}>
        Refresh All
    </button>
  )
}

export default RefreshAllButton
