import React, { useState } from 'react'
import './App.css'
import { AppContext } from './Context/AppContext'
import { AppContextType } from './Models/Context'
import { makeStyles, createStyles, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from './Components/AppBar'
import View from './Pages/View'
import globalTheme from './Styles/theme'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      width: '270px',
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

  const initialAppContextValue: AppContextType = {
    appView: 'clientArea',
    viewType: 'list',
    layoutBarResultsQuantity: '',
    payload: {
      filters: {
        searchBarString: '',
      }
    }
  }

  const [appContextValue, setAppContextValue] = useState(initialAppContextValue)

  return (
    <MuiThemeProvider theme={globalTheme}>
      <AppContext.Provider value={{ appContextValue, setAppContextValue } as any}>
        <div className={classes.appBar}>
          <AppBar />
        </div>

        <div className={classes.content}>
          <View />
        </div>
      </AppContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
