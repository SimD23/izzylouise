import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme.js'

export default ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
