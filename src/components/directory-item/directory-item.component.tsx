import { useNavigate } from 'react-router-dom'
import { FC } from 'react'

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

export type DirectoryItem = {
  imageUrl?: string | null
  title: string
  route: string
}

export type DirectoryItemProps = {
  category: DirectoryItem
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
