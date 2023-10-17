import { useState, createContext } from 'react'
import { products } from '../../mocks/products.json'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(products.slice(0, 5).map(item => ({
    title: item.title,
    image: item.images[0],
    quantity: 1
  })))

  function addItem (event) {
    const newCart = structuredClone(cart)
    const id = Number(event.target.name)
    const item = products.filter(item => item.id === id)[0]
    console.log('item:', item)
    newCart.push({
      title: item.title,
      image: item.images[0],
      quantity: 1
    })
    setCart(newCart)
  }

  function handleChange (event) {
    const { name, value } = event.target
    const newCart = structuredClone(cart)
    if (value <= 0) {
      newCart.splice(Number(name), 1)
    } else {
      newCart[name].quantity = Number(value)
    }
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      handleChange,
      addItem
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
