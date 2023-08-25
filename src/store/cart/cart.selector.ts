import { createSelector } from 'reselect'
import { CartItem } from './cart.reducer'

// Define the structure of the cart slice of your state
type CartState = {
  isCartOpen: boolean
  cartItems: CartItem[]
}

// Define the structure of the root state
type RootState = {
  cart: CartState
}

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen)

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems)

export const selectCartTotal = createSelector([selectCartItems], (cartItems: CartItem[]) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)

export const selectCartCount = createSelector([selectCartItems], (cartItems: CartItem[]) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)
