import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CategoriItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type CategoryMap = {
  [key: string]: CategoriItem[]
}

// Defining the state structure using type
export type Category = {
  items: CategoriItem[]
  name: string
  title: string

  // Other properties
}

export type CategoriesState = {
  readonly categories: Category[]
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
  },
})

export const { setCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
