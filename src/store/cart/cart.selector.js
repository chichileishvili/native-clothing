import { createSelector } from '@reduxjs/toolkit'
const selectCartReducer = (state) => state.cart

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems)
export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen)
export const selectCartCount = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0)
})

export const selectCartTotal = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems.reduce(
    (total, cartItems) => total + cartItems.quantity * cartItems.price,
    0
  )
})
