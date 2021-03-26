import React, { useState, useContext } from 'react'
import {
  Card,
  Button,
  Checkbox,
  Typography,
  Divider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Slider,
  RadioGroup,
  Radio
} from '@material-ui/core'
import BeautyStars from 'beauty-stars'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { formatPrice } from '../Util/index'
import { AppContext } from '../Context/AppContext'

interface Category {
  name: string,
  amount: number,
  value: string,
  checked: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    filterContainerTitle: {
      paddingBottom: '1.5rem'
    },
    filterContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem'
    },
    filterContentTitle: {
      fontWeight: 'bold'
    },
    selectGroup: {
      marginBottom: '0.5rem'
    },
    typographyBold: {
      fontWeight: 'bold'
    },
    section: {
      display: 'flex',
      marginTop: '0.8rem',
      padding: '0.5rem 0'
    },
    categories: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    ratingContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.8rem'
    },
    categoryContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  })
)

// This could come from an API, for example
const categoriesPayload = [
  {
    name: 'Érico Rocha',
    value: 'erico rocha',
    amount: 1920,
    checked: true
  },
  {
    name: 'Desafio 6 em 7',
    value: 'desafio 6 em 7',
    amount: 1920,
    checked: false
  },
  {
    name: 'Fórmula de lançamento',
    value: 'formula de lancamento',
    amount: 462,
    checked: true
  },
  {
    name: 'KlickPages',
    value: 'klickpages',
    amount: 6556,
    checked: false
  },
  {
    name: 'Audios',
    value: 'audios',
    amount: 120,
    checked: false
  }
]

const ratings = [
  {
    value: 5,
    amount: 8500
  },
  {
    value: 4,
    amount: 3250
  },
  {
    value: 3,
    amount: 1120
  },
  {
    value: 2,
    amount: 900
  },
  {
    value: 1,
    amount: 436
  }
]


const Filters: React.FC = () => {
  const classes = useStyles()
  const [radioValue, setRadioValue] = useState('0-999999')
  const [sliderValue, setSliderValue] = useState<number[]>([300, 2500])
  const [categories, setCategories] = useState<Category[]>(categoriesPayload)
  const { appContextValue, setAppContextValue } = useContext(AppContext) as any

  const handleRadioChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(evt.target.value)

    setAppContextValue((prev: React.ComponentState) => ({
      ...prev,
      filters: {
        radioPrice: evt.target.value
      }
    }))
    console.log(appContextValue?.payload?.filters?.radioPrice)

  }

  const handleSliderChange = (evt: any, newValue: number | number[]) => {
    setSliderValue(newValue as number[])
  }

  const handleButtonClearFilters = () => {
    setRadioValue('all')
    setSliderValue([0, 5000])
    setCategories(categoriesPayload)
  }

  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterContainerTitle}>
        <Typography variant='body1' color='primary'>
          Filtros
        </Typography>
      </div>
      <Card elevation={3} className={classes.filterContentContainer}>
        <div>
          <Typography
            variant='body1'
            color='primary'
            className={classes.filterContentTitle}
          >
            Preços
          </Typography>
        </div>

        <div className={classes.selectGroup}>
          <FormControl component='fieldset'>
            <RadioGroup
              aria-label='price'
              name='prices'
              value={radioValue}
              onChange={handleRadioChange}
            >
              <FormControlLabel value='10-10' control={<Radio />} label='R$10,00' />
              <FormControlLabel value='10-100' control={<Radio />} label='R$10-$100' />
              <FormControlLabel value='100-500' control={<Radio />} label='R$100-$500' />
              <FormControlLabel value='500-500' control={<Radio />} label='R$500' />
              <FormControlLabel value='0-999999' control={<Radio />} label='Todos' />
            </RadioGroup>
          </FormControl>
        </div>

        <Divider />

        <div
          className={classes.section}
          style={{ justifyContent: 'space-between' }}
        >
          <Typography
            color='primary'
            className={classes.typographyBold}
          >
            Valores
          </Typography>

          <Typography
            color='primary'
            className={classes.typographyBold}
            gutterBottom
          >
            {`R$ ${formatPrice(sliderValue[0])} - R$ ${formatPrice(sliderValue[1])}`}
          </Typography>
        </div>

        <Slider
          min={0}
          max={5000}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />

        <Divider />

        <div className={classes.section}>
          <Typography
            color='primary'
            className={classes.typographyBold}
          >
            Categorias
          </Typography>
        </div>

        <div className={classes.categories}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position">
              {
                categoriesPayload.map((currentCategory: Category, index: number) => {
                  return (
                    <div className={classes.categoryContainer}>
                      <div>
                        <FormControlLabel
                          control={
                            <Checkbox
                              className={classes.categoryContainer}
                              color='primary'
                              value={categories[index].name}
                            />
                          }
                          label={currentCategory.name}
                          labelPlacement='end'
                        />
                      </div>
                      <div>
                        <p>{currentCategory.amount}</p>
                      </div>
                    </div>
                  )
                })
              }
            </FormGroup>
          </FormControl>
        </div>

        <div className={classes.section}>
          <Typography
            color='primary'
            className={classes.typographyBold}
          >
            Avaliação
          </Typography>
        </div>

        {/*
          This could also come from an API instead
          of a static object that we're using here
        */}
        <div>
          {
            ratings.map((rating) => {
              return (
                <div className={classes.ratingContainer}>
                  <BeautyStars
                    value={rating.value}
                    inactiveColor='#999999'
                    activeColor='#ffba25'
                    size='1.5rem'
                    gap='0.3rem'
                  />
                  <p>{rating.amount}</p>
                </div>
              )
            })
          }
        </div>

        <Button
          style={{ marginTop: '2rem' }}
          variant='contained'
          color='primary'
          onClick={handleButtonClearFilters}
        >
          LIMPAR FILTROS
        </Button>

      </Card>
    </div>
  )
}

export default Filters
