import { ADD_ITEM, QUIT_ITEM, CHANGE_QUANTITY, CLEAR_CART } from './actions'

export const initialState = {
  itemsCart: []
}

export function reducer (state, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_ITEM: {
      return {
        itemsCart: payload
      }
    }

    case QUIT_ITEM: {
      return {
        itemsCart: payload
      }
    }

    case CHANGE_QUANTITY: {
      return {
        itemsCart: payload
      }
    }

    case CLEAR_CART: {
      return {
        itemsCart: payload
      }
    }

    default: {
      return state
    }
  }
}
