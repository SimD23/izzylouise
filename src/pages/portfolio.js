import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Typography, GridList, GridListTile } from '@material-ui/core'

let portfolioItems = []
const ignore = [3]
for (let i = 1; i < 10; i++) {
  if (ignore.includes(i)) continue
  const url = `https://teliko.s3.eu-west-2.amazonaws.com/tests/il/${i}.jpg`
  portfolioItems.push({ img: url })
}

const About = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Typography gutterBottom variant="h4">
      Portfolio
    </Typography>
    <GridList spacing={8} cellHeight="500px" cols="2">
      {portfolioItems.map(item => (
        <GridListTile cols={1}>
          <img
            style={{
              height: '500px',
              width: '500px',
              background: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></img>
        </GridListTile>
      ))}
    </GridList>
  </Layout>
)

export default About
