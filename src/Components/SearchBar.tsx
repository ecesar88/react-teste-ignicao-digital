import React from 'react'
import { Card, TextField, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

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

  const handleButtonSearch = () => {
    
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
