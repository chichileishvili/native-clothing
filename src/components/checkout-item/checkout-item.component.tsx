import { useDispatch } from 'react-redux'
import { FC } from 'react'
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.reducer'

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

type cartItemObject = {
  name: string
  imageUrl: string
  quantity: number
  price: number
  id: number
}

type CartItemProps = {
  cartItem: cartItemObject
}

const CheckoutItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
