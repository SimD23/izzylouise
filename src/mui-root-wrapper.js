import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'

import CartContext from './context/CartContext'

import { cartReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './context/reducers'

export default props => (
  <ThemeProvider theme={theme}>
    <CartProvider>{props.element}</CartProvider>
  </ThemeProvider>
)

function CartProvider(props) {
  const [cartState, dispatch] = React.useReducer(cartReducer, { cart: [] })
  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product })
  }

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId })
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
