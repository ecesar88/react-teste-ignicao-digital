import React, { useState, useEffect, useContext } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import UserBar from '../Components/UserBar'
import Filters from '../Components/Filters'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import LayoutBar from '../Components/LayoutBar'
import SearchBar from '../Components/SearchBar'
import ProductCard from '../Components/ProductCard'
import { Product } from '../Models/Product'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import config from '../Config/jsonServer.json'
import { debounce } from '../Util/debouce'

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

const View: React.FC = () => {
  const classes = useStyles()
  const [products, setProducts] = useState<Product[]>([])
  const { appContextValue, setAppContextValue } = useContext(AppContext) as any

  // Get all products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://${config.serverAddress}/products`
      )
      setProducts(response.data)
      setAppContextValue((prev: React.ComponentState) => ({
        ...prev,
        layoutBarResultsQuantity: products?.length
      }))
    } catch (error) {
      alert('Ocorreu um erro ao processar a sua requisição')
    }
  }

  // Search products
  const searchProduct = async (query: string) => {
    try {
      const response = await axios.get(
        `http://${config.serverAddress}/products?q=${query}`
      )
      setProducts(response.data)
      setAppContextValue((prev: React.ComponentState) => ({
        ...prev,
        layoutBarResultsQuantity: products?.length
      }))
    } catch (error) {
      alert('Ocorreu um erro ao processar a sua requisição')
    }
  }

  // Search products with the radio buttons
  const searchProductPriceRadio = async (query: string) => {
    try {
      const price1 = query?.replace(/(\d{1,4})-(\d{1,6})/, '$1')
      const price2 = query?.replace(/(\d{1,4})-(\d{1,6})/, '$2')

      const response = await axios.get(
        `http://${config.serverAddress}/products?price_gte=${price1}&price_lte=${price2}`
      )
      setProducts(response.data)
    } catch (error) {
      alert('Ocorreu um erro ao processar a sua requisição')
    }
  }

  // Search products with the select input
  const searchProductPriceSelect = async (query: [number, number]) => {
    try {
      const response = await axios.get(
        `http://${config.serverAddress}/products?price_gte=${query[0]}&price_lte=${query[1]}`
      )
      setProducts(response.data)
    } catch (error) {
      alert('Ocorreu um erro ao processar a sua requisição')
    }
  }

  // Search products with the categores checkboxes
  //eslint-disable-next-line
  const searchProductCategoryCheckBox = async (query: string) => {
    try {
      const response = await axios.get(
        `http://${config.serverAddress}/products?category_like${query}`
      )
      setProducts(response.data)
    } catch (error) {
      alert('Ocorreu um erro ao processar a sua requisição')
    }
  }

  useEffect(() => {
    getAllProducts()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    searchProduct(appContextValue?.payload?.filters?.searchBarString)
    //eslint-disable-next-line
  }, [appContextValue?.payload?.filters?.searchBarString])

  useEffect(() => {
    searchProductPriceRadio(appContextValue?.payload?.filters?.radioPrice)
  }, [appContextValue?.payload?.filters?.radioPrice])

  const debounceFn = debounce(
    () => {
      searchProductPriceSelect(appContextValue?.payload?.filters?.sliderPrice)
    }, 200
  )

  useEffect(() => {
    debounceFn()
    //eslint-disable-next-line
  }, [appContextValue?.payload?.filters?.sliderPrice])

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
          <div className={classes.component}>
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
