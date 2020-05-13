import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  makeStyles,
  CardMedia,
} from '@material-ui/core'
import { Link } from 'gatsby'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CartContext from '../context/CartContext'
export default function shop({ data }) {
  return (
    <Layout>
      <SEO title="Shop" />
      <Typography gutterBottom variant="h4">
        Shop
      </Typography>
      <Grid spacing={2} container>
        {data.skus.edges.map(({ node, index }) => (
          <>{node.active && <ProductCard key={node.id} node={node} />}</>
        ))}
      </Grid>
    </Layout>
  )
}

const useStyles = makeStyles(theme => {
  return {
    underlined: {
      borderBottom: `8px solid ${theme.palette.secondary.main}`,
    },
    media: {
      paddingTop: '100%',
      background: theme.palette.primary.light,
    },
  }
})

function ProductCard({ node }) {
  const classes = useStyles()
  return (
    <Grid xs={12} sm={6} md={4} item>
      <CartContext.Consumer>
        {context => (
          <Card elevation={4} className={classes.underlined}>
            <CardMedia className={classes.media}></CardMedia>
            <CardContent>
              <Typography variant="h6" fontWeight="fontWeightBold">
                {node.attributes.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid justify="space-between" spacing={2} container>
                <Grid item>
                  <Button component={Link} to={`/product/${node.id}`}>
                    View details
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<AddShoppingCartIcon />}
                    color="secondary"
                    variant="contained"
                    size="large"
                    onClick={context.addProductToCart.bind(this, node)}
                  >
                    <b>£{(node.price / 100).toFixed(2)}</b>
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        )}
      </CartContext.Consumer>
    </Grid>
  )
}

export const query = graphql`
  query SkusForProduct {
    skus: allStripeSku {
      edges {
        node {
          id
          currency
          price
          active
          attributes {
            name
          }

          product {
            id
          }
        }
      }
    }
  }
`
