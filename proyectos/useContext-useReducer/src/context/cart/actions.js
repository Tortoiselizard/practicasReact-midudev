import { products } from '../../mocks/products.json'

export const ADD_ITEM = 'ADD_ITEM'
export const QUIT_ITEM = 'QUIT_ITEM'
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'

export function addItem (event, cart) {
  const newCart = structuredClone(cart)
  const id = Number(event.target.name)
  const item = products.filter(item => item.id === id)[0]
  newCart.push({
    id: item.id,
    title: item.title,
    image: item.images[0],
    quantity: 1
  })
  return { type: ADD_ITEM, payload: newCart }
//   setCart(newCart)
}

export function quitItem (event, cart) {
  const id = Number(event.target.name)
  const newCart = cart.filter(item => item.id !== id)
  return { type: QUIT_ITEM, payload: newCart }
//   setCart(newCart)
}

export function handleChange (event, cart) {
  const { name, value } = event.target
  const newCart = structuredClone(cart)
  if (value <= 0) {
    newCart.splice(Number(name), 1)
  } else {
    newCart[name].quantity = Number(value)
  }
  return { type: CHANGE_QUANTITY, payload: newCart }
//   setCart(newCart)
}

export function clearCart () {
  return { type: CLEAR_CART, payload: [] }
//   setCart([])
}
