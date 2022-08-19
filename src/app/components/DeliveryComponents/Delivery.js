import React from 'react'
import Filter from '../common/Filter'
import { BsFilterLeft } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';
import DeliverCollection from '../common/DeliverCollection';
import TopBrand from '../common/TopBrand';
import ExploreSection from '../common/ExploreSection';
import { restaurants } from '../../../data/restonrant';
const deliveryFilter=[
  {
    id:1,
    icon: <BsFilterLeft/>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title: "Safe and Hygienic",
  },
  {
    id:4,
    title: "Pure Veg",
  },
  {
    id:5,
    title: "Delivery Time",
    icon: <RiArrowUpDownFill />
  },
  {
    id:6,
    title: "Great Offers",
  }
]

const resturentList = restaurants
function Delivery() {
  return (
    <div>
      <div className='max-width'>
      <Filter filterList={deliveryFilter} />
      </div>
      < DeliverCollection />
      <TopBrand/>
      <ExploreSection list={resturentList} collectionName="Delivery Restaurants in Lucknow"/>
    </div>
  )
}

export default Delivery
