import React, { useState, useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import UserBar from '../Components/UserBar'
import Filters from '../Components/Filters'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import LayoutBar from '../Components/LayoutBar'
import SearchBar from '../Components/SearchBar'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import config from '../Config/jsonServer.json'
import { Product } from '../Models/Product'

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
    },
    card: {
      margin: '1rem 0'
    },
    pagination: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '1rem'
    }
  })
)

const View: React.FC<{
  appContextValue: any,
  setAppContextValue: any
}> = (
  { appContextValue, setAppContextValue }
) => {
    const classes = useStyles()
    const [products, setProducts] = useState<Product[]>([])

    const getAllProducts = async () => {
      try {
        const response = await axios.get(`http://${config.serverAddress}/products`)
        setProducts(response.data as any)
      } catch (error) {
        alert('Ocorreu um erro ao processar a sua requisição')
      }
    }

    useEffect(() => {
      getAllProducts()
    }, [])

    return (
      <div className={classes.root}>
        <UserBar />
        <Breadcrumb />
        <div className={classes.contentContainer}>
          <Filters />
          <div className={classes.content}>
            <div style={{ paddingBottom: '0.3rem' }}>
              <LayoutBar />
            </div>
            <div className={classes.component} onClick={getAllProducts}>
              <SearchBar />
            </div>
            <div className={classes.component}>
              {
                products.map((product: Product) => {
                  return (
                    <div className={classes.card}>
                      <ProductCard
                        key={product.id}
                        productImage={product.productImage}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        createdBy={product.createdBy}
                        price={product.price}
                        starRating={product.starRating}
                        heartRating={product.heartRating}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className={classes.pagination}>
          <Pagination count={10} color="primary" />
        </div>
      </div>
    )
  }

export default View
