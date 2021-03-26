import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import UserBar from '../Components/UserBar'
import Filters from '../Components/Filters'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import LayoutBar from '../Components/LayoutBar'
import SearchBar from '../Components/SearchBar'
import ProductCard from '../Components/ProductCard'

const useStyles = makeStyles((globalAppTheme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    contentContainer: {
      display: 'grid',
      gridTemplateColumns: '0.3fr 0.7fr',
      columnGap: '1.5rem',
      padding: '1.5rem 0'
    },
    content: {
      display: 'flex',
      flexDirection: 'column'
    },
    component: {
      marginTop: '0.8rem'
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
        <div className={classes.content}>
          <div style={{paddingBottom: '0.3rem'}}>
            <LayoutBar />
          </div>
          <div className={classes.component}>
            <SearchBar />
          </div>
          <div className={classes.component}>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
