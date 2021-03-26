import React, { useState, useContext } from 'react'
import { Card, Typography, IconButton, Select, MenuItem } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppsIcon from '@material-ui/icons/Apps'
import ListIcon from '@material-ui/icons/List'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { AppContext } from '../Context/AppContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutBarContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.2fr',
      alignItems: 'center'
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    button: {
      margin: '0 0.35rem'
    },
    select: {
      padding: '0 0.8rem',
      display: 'flex',
      alignItems: 'flex-start'
    }
  })
)

const LayoutBar: React.FC = () => {
  const classes = useStyles()
  //eslint-disable-next-line
  const [viewType, setViewType] = useState('grid')
  const [listing, setListing] = useState('listagem')
  const { appContextValue } = useContext(AppContext) as any

  const handleButtonGridView = () => {
    setViewType('grid')
  }

  const handleButtonListView = () => {
    setViewType('list')
  }

  const handleSelectListing =
    (event: React.ChangeEvent<{ value: unknown }>): void => {
      setListing(event.target.value as string)
    }

  return (
    <div className={classes.layoutBarContainer}>
      {
        appContextValue?.layoutBarResultsQuantity
          ? (
            <div>
              <Typography color='primary'>
                {appContextValue?.layoutBarResultsQuantity} Resultados encontrados
              </Typography>
            </div>
          )
          : (
            <div>
            </div>
          )
      }
      <div className={classes.buttonsContainer}>
        <Card elevation={1} className={classes.button}>
          <Select
            className={classes.select}
            fullWidth
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={listing}
            label=''
            onChange={handleSelectListing}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value='listagem' selected>
              Listagem
            </MenuItem>
            <MenuItem value='item2'>
              Item 2
            </MenuItem>
          </Select>
        </Card>

        <Card elevation={3} className={classes.button}>
          <IconButton size='small' onClick={handleButtonGridView}>
            <AppsIcon />
          </IconButton>
        </Card>

        <Card elevation={3} className={classes.button}>
          <IconButton size='small' onClick={handleButtonListView}>
            <ListIcon />
          </IconButton>
        </Card>
      </div>

    </div>
  )
}

export default LayoutBar
