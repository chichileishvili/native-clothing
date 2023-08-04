import { Fragment } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

import { selectCategoriesMap } from '../../store/categories/category.selector'
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  )
}

export default CategoriesPreview
