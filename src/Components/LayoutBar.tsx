import React from 'react'
import { Card, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutBarContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
)

const requestResponse = {
  total: 200
}

const LayoutBar: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.layoutBarContainer}>
      <Typography color='primary'>
        {requestResponse.total} Resultados encontrados
      </Typography>
    </div>
  )
}

export default LayoutBar
