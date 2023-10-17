import useCarts from '../../hook/useCarts.js'
import './Cart.css'

function Cart ({ onClick }) {
  const { cart, handleChange, clearCart } = useCarts()

  return (
    <div className='cart-container'>
      <button className='cart-button-clear' onClick={clearCart}>Clear</button>
      <button className='cart-button-close' onClick={() => { onClick() }}>X</button>
      <h1>Carrito ({cart.length} - {cart.length === 1 ? 'item' : 'items'})</h1>
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
