import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Typography, Grid, Link } from '@material-ui/core'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Typography variant="h4">Contact</Typography>
    <Grid container>
      <Grid item>
        <Link href="mailto:izzy.louise.davis@gmail.com">Email</Link>
      </Grid>
    </Grid>
  </Layout>
)

export default Contact
