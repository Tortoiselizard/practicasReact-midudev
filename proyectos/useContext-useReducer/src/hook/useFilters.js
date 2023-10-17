import { useContext } from 'react'
import { FiltersContext } from '../context/filters/filters'

import { products } from '../mocks/products.json'

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  function productsFiltered () {
    return products.filter(product => {
      return (product.category === filters.category ||
            filters.category === 'all') &&
                (product.price >= filters.price)
    })
  }

  return { filters, setFilters, productsFiltered: productsFiltered() }
}

export default useFilters
