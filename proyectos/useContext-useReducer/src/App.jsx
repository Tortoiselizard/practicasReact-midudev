import Header from './components/Header/Header'
import useFilters from './hook/useFilters'
import Cart from './components/Cart/Cart'
import './App.css'
import { useState } from 'react'

function App () {
  const { productsFiltered } = useFilters()
  const [cartActivate, setCartActivate] = useState(false)

  function handleClick () {
    setCartActivate(!cartActivate)
  }

  return (
    <main>
      <h1>Practica useContext - UseRef</h1>
      <Header />
      {cartActivate
        ? <Cart onClick={setCartActivate} />
        : <button className='cart-button-open' onClick={handleClick}>Cart</button>}
      <section className='products'>
        <ul>
          {productsFiltered.map(product => (
            <li key={product.id}>
              <img src={product.images[0]} />
              <h3>{product.title}</h3>
              <h4>Price: ${product.price}</h4>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
