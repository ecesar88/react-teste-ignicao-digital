import React, { useState } from 'react'
import { Card, Typography, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppsIcon from '@material-ui/icons/Apps'
import ListIcon from '@material-ui/icons/List'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    button: {
      margin: '0 0.35rem'
    }
  })
)

const requestResponse = {
  total: 200
}

const LayoutBar: React.FC = () => {
  const classes = useStyles()
  //eslint-disable-next-line
  const [viewType, setViewType] = useState('grid')

  const handleButtonGridView = () => {
    setViewType('grid')
    console.log(viewType)
  }

  const handleButtonListView = () => {
    setViewType('list')
    console.log(viewType)
  }

  return (
    <div className={classes.layoutBarContainer}>
      <div>
        <Typography color='primary'>
          {requestResponse.total} Resultados encontrados
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Card className={classes.button}>
          {/* SELECT VAI AQUI (COMPONENTIZAR) */}
        </Card>

        <Card className={classes.button}>
          <IconButton size='small' onClick={handleButtonGridView}>
            <AppsIcon />
          </IconButton>
        </Card>

        <Card className={classes.button}>
          <IconButton size='small' onClick={handleButtonListView}>
            <ListIcon />
          </IconButton>
        </Card>
      </div>

    </div>
  )
}

export default LayoutBar
