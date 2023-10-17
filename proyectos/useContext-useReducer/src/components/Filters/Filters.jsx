import useFilters from '../../hook/useFilters'

function Filters () {
  const { filters, setFilters } = useFilters()

  function handleChangeCategory (event) {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  function handleChangePrice (event) {
    setFilters(prevState => ({
      ...prevState,
      price: Number(event.target.value)
    }))
  }

  return (
    <div>
      <div>
        <label>Category: </label>
        <select onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='laptops'>Laptops</option>
        </select>
      </div>
      <div>
        <label>Price: </label>
        <input
          type='range'
          min='0'
          max='1000'
          value={filters.price}
          onChange={handleChangePrice}
        />
        <label>${filters.price}</label>
      </div>
    </div>
  )
}

export default Filters
