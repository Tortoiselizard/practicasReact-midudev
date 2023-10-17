import { useState, createContext } from 'react'
import { products } from '../../mocks/products.json'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  function addItem (event) {
    const newCart = structuredClone(cart)
    const id = Number(event.target.name)
    const item = products.filter(item => item.id === id)[0]
    newCart.push({
      id: item.id,
      title: item.title,
      image: item.images[0],
      quantity: 1
    })
    setCart(newCart)
  }

  function quitItem (event) {
    const id = Number(event.target.name)
    const newCart = cart.filter(item => item.id !== id)
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

  function clearCart () {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleChange,
      addItem,
      quitItem,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
