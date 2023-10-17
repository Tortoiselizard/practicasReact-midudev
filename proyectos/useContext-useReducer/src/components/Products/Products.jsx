import useFilters from '../../hook/useFilters'
import useCarts from '../../hook/useCarts'

function Products () {
  const { productsFiltered } = useFilters()
  const { cart, addItem, quitItem } = useCarts()

  return (
    <section className='products'>
      <ul>
        {productsFiltered.map(product => (
          <li key={product.id}>
            <img src={product.images[0]} />
            <h3>{product.title}</h3>
            <h4>Price: ${product.price}</h4>
            {
                cart && cart.some(item => {
                  return item.id === product.id
                })
                  ? <button name={product.id} onClick={quitItem}>quit from cart</button>
                  : <button name={product.id} onClick={addItem}>add to cart</button>
            }
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
