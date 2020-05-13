import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { Grid, Button, Badge } from '@material-ui/core'
import { Link } from 'gatsby-theme-material-ui'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartContext from '../context/CartContext'
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    borderTop: `5px solid ${theme.palette.secondary.main}`,
    background: theme.palette.primary.main,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Header = props => {
  const { siteTitle } = props
  const classes = useStyles()
  console.log('props', props)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link to="/" color="inherit" className={classes.title}>
            <Typography fontWeight="fontWeightBold" variant="h6">
              {siteTitle}
            </Typography>
          </Link>
          <Button component={Link} to="/shop">
            Shop
          </Button>{' '}
          <Button component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button component={Link} to="/about">
            About
          </Button>
          <Button component={Link} to="/contact">
            Contact
          </Button>
          <IconButton component={Link} to="/cart">
            <CartContext.Consumer>
              {({ cart }) => (
                <Badge
                  variant="standard"
                  color="secondary"
                  badgeContent={cart.length}
                >
                  <ShoppingCartIcon />
                </Badge>
              )}
            </CartContext.Consumer>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
