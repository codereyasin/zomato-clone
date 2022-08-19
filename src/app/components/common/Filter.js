import FilterItems from "./FilterItems"

function Filter({filterList}) {
  return (
    <div className="filters">
      {filterList && filterList.map((filter) => {
        return <FilterItems filter={filter} key={filter.id} />
      })}
    </div>
  )
}

export default Filter
