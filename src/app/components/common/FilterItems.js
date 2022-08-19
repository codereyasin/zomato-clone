import React from 'react'

function FilterItems({filter}) {
  return (
    <div className='filter-items'>
      {filter.icon && filter.icon}
      <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItems
