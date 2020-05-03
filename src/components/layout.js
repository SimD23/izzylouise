/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../theme'
import { Grid, Typography } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <main>{children}</main>
            <footer style={{ paddingTop: 10 }}>
              <Grid spacing={4} justify="center" container>
                <Grid item xs={12}>
                  <Grid container justify="space-around">
                    <Grid item>
                      <Link to="/shop">Shop</Link>
                    </Grid>
                    <Grid item>
                      <Link to="/about">About</Link>
                    </Grid>
                    <Grid item>
                      <Link to="/contact">Contact</Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="p" align="center">
                    © {new Date().getFullYear()}, Izzy Louise Davis
                  </Typography>
                </Grid>
              </Grid>
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
