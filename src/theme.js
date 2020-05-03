import { createMuiTheme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: teal[300],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Cutive Mono', 'serif'].join(','),
  },
})

export default theme
