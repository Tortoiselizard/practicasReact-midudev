import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import './App.css'
import { useState } from 'react'
import { CartProvider } from './context/cart/cart.jsx'
import Products from './components/Products/Products'

function App () {
  const [cartActivate, setCartActivate] = useState(false)

  function handleClick () {
    setCartActivate(!cartActivate)
  }

  return (
    <main>
      <h1>Practica useContext - UseRef</h1>
      <Header />
      <CartProvider>
        {
          cartActivate
            ? <Cart onClick={setCartActivate} />
            : <button className='cart-button-open' onClick={handleClick}>Cart</button>
        }
        <Products />
      </CartProvider>
    </main>
  )
}

export default App
