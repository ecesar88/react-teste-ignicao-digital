import React from 'react';
import './App.css';
import { makeStyles, createStyles, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from './Components/AppBar'
import View from './Pages/View'
import globalTheme from './Styles/theme'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      width: '320px',
      minHeight: '100%',
      marginRight: '0.2rem',
      borderRadius: '0px'
    },
    content: {
      width: '100%',
      minHeight: '100%',
      marginLeft: '0.2rem',
      padding: '0 0.5rem'
    }
  })
)

const App: React.FC = () => {
  const classes = useStyles()
  // const [appContext, setAppContext] = useState(defaultAppContextValue)

  return (
    <MuiThemeProvider theme={globalTheme}>
      <div className={classes.appBar}>
        <AppBar />
      </div>

      <div className={classes.content}>
        <View />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
