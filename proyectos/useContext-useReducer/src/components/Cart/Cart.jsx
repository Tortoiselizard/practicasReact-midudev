import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart/cart.jsx'
import './Cart.css'

function Cart ({ onClick }) {
  const { cart, handleChange } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <button className='cart-button-close' onClick={() => { onClick() }}>X</button>
      <h1>Carrito ({cart.length} - items)</h1>
      <ul>
        {
            cart.map((item, index) => (
              <li key={item.title + item.id} className='cart-item'>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <label>
                  Qty:
                  <input
                    type='number'
                    name={index}
                    value={item.quantity}
                    onChange={handleChange}
                  />
                </label>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Cart
