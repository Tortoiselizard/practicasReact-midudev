import './Cart.css'
import { products } from '../../mocks/products.json'
import { useState } from 'react'

const someItems = products.splice(0, 5)

function Cart ({ onClick }) {
  const [items, setItems] = useState(someItems.map(item => ({
    title: item.title,
    image: item.images[0],
    quantity: 5
  })))

  function handleChange (event) {
    const newItems = structuredClone(items)
    newItems[event.target.name] = event.target.value
    setItems(newItems)
  }

  return (
    <div className='cart-container'>
      <button className='cart-button-close' onClick={() => { onClick() }}>X</button>
      <ul>
        <label>región vacía</label>
        {
            items.map((item, index) => (
              <li key={item.id} className='cart-item'>
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
