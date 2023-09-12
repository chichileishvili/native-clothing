import { CartItemContainer, ItemDetails } from './cart-item.styles'
import { FC } from 'react'

export type cartItemObject = {
  name: string
  imageUrl: string
  quantity: number
  price: number
}

export type CartItemProps = {
  cartItem: cartItemObject
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
