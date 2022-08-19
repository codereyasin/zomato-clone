import React from 'react'
import ExploreCrad from './ExploreCrad'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
     <div className='exolpre-grid'>
        {list.map((restaurant) =>{
            return <ExploreCrad restaurant={restaurant}/>
        })}
     </div>
   </div>
  )
}

export default ExploreSection
