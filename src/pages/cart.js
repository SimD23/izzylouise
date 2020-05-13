import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Typography, Grid, Button, IconButton } from '@material-ui/core'
import CartContext from '../context/CartContext'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const Cart = () => (
  <Layout>
    <SEO title="Cart" />
    <CartContext.Consumer>
      {({ cart }) => (
        <>
          <Typography variant="h4">Cart</Typography>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={8}>
              <div
                style={{
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: 'repeat(4,auto)',
                }}
              >
                {cart.map(node => (
                  <>
                    <Typography>{node.attributes.name}</Typography>
                    <Typography>q</Typography>
                    <Typography>£{(node.price / 100).toFixed(2)}</Typography>
                    <IconButton>
                      <HighlightOffIcon />
                    </IconButton>
                  </>
                ))}
              </div>
            </Grid>
            <Grid item xs={8}>
              <Button fullWidth color="secondary" variant="contained">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </CartContext.Consumer>
  </Layout>
)

export default Cart
