import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  primary: {
    main: '#2C2C2C',
    light: '#999999'
  },
  secondary: {
    main: '#BBBBBB',
    light: '#ECECEC'
  }
}

const globalTheme = createMuiTheme({
  typography: {
    "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
    body1: {
      color: colors.primary.light
    }
  },
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light
    }
  }
})

export default globalTheme
