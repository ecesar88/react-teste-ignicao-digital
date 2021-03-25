import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import UserBar from '../Components/UserBar'
import Filters from '../Components/Filters'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((globalAppTheme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    contentContainer: {
      display: 'grid',
      gridTemplateColumns: '0.3fr 0.7fr',
      padding: '1.5rem 0'
    }
  })
)

const View: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <UserBar />
      <Breadcrumb />
      <div className={classes.contentContainer}>
        <Filters />
      </div>
    </div>
  )
}

export default View
