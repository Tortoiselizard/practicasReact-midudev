import { useContext } from 'react'
import { CartContext } from '../context/cart/cart'

function useCarts () {
  const { cart, handleChange, clearCart, addItem, quitItem } = useContext(CartContext)
  return { cart, handleChange, clearCart, addItem, quitItem }
}

export default useCarts
