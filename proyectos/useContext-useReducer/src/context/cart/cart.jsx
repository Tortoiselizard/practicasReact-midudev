import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'
import * as actions from './actions'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function addItem (event) {
    return dispatch(actions.addItem(event, state.itemsCart))
  }

  function quitItem (event) {
    return dispatch(actions.quitItem(event, state.itemsCart))
  }

  function handleChange (event) {
    return dispatch(actions.handleChange(event, state.itemsCart))
  }

  function clearCart () {
    return dispatch(actions.clearCart())
  }

  return (
    <CartContext.Provider value={{
      cart: state.itemsCart,
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
