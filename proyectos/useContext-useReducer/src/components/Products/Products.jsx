import { useContext } from 'react'
import useFilters from '../../hook/useFilters'
import { CartContext } from '../../context/cart/cart'

function Products () {
  const { productsFiltered } = useFilters()
  const { addItem } = useContext(CartContext)

  return (
    <section className='products'>
      <ul>
        {productsFiltered.map(product => (
          <li key={product.id}>
            <img src={product.images[0]} />
            <h3>{product.title}</h3>
            <h4>Price: ${product.price}</h4>
            <button name={product.id} onClick={addItem}>+</button>
            {/* <button>+</button> */}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
