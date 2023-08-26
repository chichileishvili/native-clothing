import { combineReducers } from '@reduxjs/toolkit'
import { userReducer, UserState } from './user/user.reducer'
import { categoriesReducer, CategoriesState } from './categories/category.reducer'
import { cartReducer, CartState } from './cart/cart.reducer'

// Define a type for the root state
export type RootState = {
  user: UserState,
  categories: CategoriesState,
  cart: CartState,
}

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})
