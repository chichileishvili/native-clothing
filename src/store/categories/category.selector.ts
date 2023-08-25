import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer'
import { CategoryMap } from './category.reducer'

// Define the whole state structure, including the 'categories' slice
type RootState = {
  categories: CategoriesState
}

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items
    return acc
  }, {} as CategoryMap)
)
