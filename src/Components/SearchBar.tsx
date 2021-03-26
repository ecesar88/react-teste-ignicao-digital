import React, { useState, useContext } from 'react'
import { Card, TextField, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { AppContext } from '../Context/AppContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.4rem 0.8rem'
    },
    iconButton: {

    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: 'none',
      }
    },
    notchedOutline: {
      borderColor: 'none'
    },
    focusedNotchedOutline: {

    }
  })
)

const SearchBar: React.FC = () => {
  const classes = useStyles()

  // will not use this
  //eslint-disable-next-line
  const { appContextValue, setAppContextValue } = useContext(AppContext) as any
  const [searchBar, setSearchBar] = useState<string>('')

  const handleSearchBarOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBar(evt.target.value)
  }

  const handleButtonSearch = () => {
    setAppContextValue((prev: React.ComponentState) => ({
      ...prev,
      payload: {
        filters: {
          searchBarString: searchBar
        }
      }
    }))
  }

  return (
    <Card elevation={3} className={classes.searchBarContainer}>
      <TextField
        id='searchInput'
        fullWidth
        label=''
        variant='outlined'
        size='small'
        placeholder='Buscar:'
        className={classes.notchedOutline}
        value={searchBar}
        onChange={handleSearchBarOnChange}
        inputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.focusedNotchedOutline,
            notchedOutline: classes.notchedOutline
          }
        }}
      />

      <IconButton
        aria-label='email'
        className={classes.iconButton}
        onClick={handleButtonSearch}
      >
        <SearchIcon />
      </IconButton>


    </Card>
  )
}

export default SearchBar
