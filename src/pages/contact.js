import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Typography,
  Container,
  Grid,
  Link,
  TextField,
  Button,
  Box,
} from '@material-ui/core'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Typography gutterBottom variant="h4">
      Contact
    </Typography>
    <Grid spacing={2} container>
      <Grid xs={12} item>
        <Link
          color="inherit"
          underline="none"
          href="mailto:izzy.louise.davis@gmail.com"
        >
          izzy.louise.davis@gmail.com
        </Link>
      </Grid>
      <Grid xs={12} item>
        <Box mt={6} mb={6}>
          <Container maxWidth="sm">
            <form data-netlify="true">
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <TextField fullWidth label="name" />
                </Grid>
                <Grid item>
                  <TextField fullWidth label="email" />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    rows={5}
                    multiline
                    label="message"
                  ></TextField>
                </Grid>
                <Grid item>
                  <Button variant="outlined" fullWidth color="secondary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Box>
      </Grid>
    </Grid>
  </Layout>
)

export default Contact
