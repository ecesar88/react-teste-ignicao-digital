import React, { useState } from 'react'
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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { formatPrice } from '../Util/index'

interface Categorie {
  name: string,
  amount: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    filterContainerTitle: {
      paddingBottom: '0.8rem'
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
    rating: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
)

// This could come from an API, for example
const categoriesPayload = [
  {
    name: 'Érico Rocha',
    amount: 1920
  },
  {
    name: 'Desafio 6 em 7',
    amount: 1920
  },
  {
    name: 'Fórmula de lançamento',
    amount: 462
  },
  {
    name: 'KlickPages',
    amount: 6556
  },
  {
    name: 'Audios',
    amount: 120
  }
]

const Filters: React.FC = () => {
  const classes = useStyles()
  const [radioValue, setRadioValue] = useState('female')
  const [sliderValue, setSliderValue] = useState<number[]>([300, 2500])
  const [categories, setCategories] = useState<Categorie[]>([])

  const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(evt.target.value);
  }

  const handleSliderChange = (evt: any, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
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
              <FormControlLabel value='10' control={<Radio />} label='R$10,00' />
              <FormControlLabel value='10-100' control={<Radio />} label='R$10-$100' />
              <FormControlLabel value='100-500' control={<Radio />} label='R$100-$500' />
              <FormControlLabel value='500' control={<Radio />} label='R$500' />
              <FormControlLabel value='all' control={<Radio />} label='Todos' />
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
            <FormGroup aria-label="position" row>
              {
                categoriesPayload.map((categorie: Categorie) => {
                  return (
                    <FormControlLabel
                      value={categorie.name}
                      control={
                        <Checkbox color='primary' />
                      }
                      label={categorie.name}
                      labelPlacement='end'
                    />
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
        
        <div className={classes.rating}>
            Avaliação vai aqui! hehe
        </div>

      </Card>
    </div>
  )
}

export default Filters
