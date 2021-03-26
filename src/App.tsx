import React, { useState } from 'react'
import './App.css'
import { AppContext } from './Context/AppContext'
import { AppContextType } from './Models/Context'
import { makeStyles, createStyles, MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from './Components/AppBar'
import View from './Pages/View'
import globalTheme from './Styles/theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Teapot from './Pages/Teapot'

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
    <>
      <Router>
        <MuiThemeProvider theme={globalTheme}>
          <AppContext.Provider value={{ appContextValue, setAppContextValue } as any}>
            <div className={classes.appBar}>
              <AppBar />
            </div>

            <div className={classes.content}>
              <Route path="/" component={View} exact />
              <Route path="/teapot" component={Teapot} exact />
            </div>
          </AppContext.Provider>
        </MuiThemeProvider>

      </Router>

    </>
  );
}

export default App;
