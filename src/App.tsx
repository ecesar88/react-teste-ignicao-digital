import React from 'react';
import './App.css';
import { makeStyles, createStyles, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from './Components/AppBar'
import View from './Components/View'
import globalTheme from './Styles/theme'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      width: '320px',
      minHeight: '100%',
      marginRight: '5px',
      borderRadius: '0px'
    },
    content: {
      width: '100%',
      minHeight: '100%',
      marginLeft: '5px',
      padding: '10px'
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
