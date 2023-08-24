import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer'
import { CategoriItem, CategoryMap } from './category.reducer'

const selectCategoryReducer = (state): CategoriesState => state.categories

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
