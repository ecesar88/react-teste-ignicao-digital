import React from 'react'
import { Card, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { colors } from '../Styles/theme'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ImagePlaceholder from '../Assets/img_placeholder.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    productCardContainer: {
      padding: '0.7rem',
      display: 'grid',
      gridTemplateColumns: '0.3fr 0.9fr auto'
    },
    image: {
      width: '180px',
      height: '180px',
      marginRight: '0.8rem'
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.5rem',
      borderRight: `1px solid ${colors.secondary.light}`,
      paddingRight: '1rem'
    },
    textTitle: {
      fontWeight: 400
    },
    textSubtitleContainer: {
      display: 'flex',
      fontSize: '0.8rem'
    },
    textSubtitle1: {
      color: theme.palette.primary.light
    },
    textSubtitle2: {
      color: theme.palette.primary.main,
      fontWeight: 'bold'
    },
    textDescriptionContainer: {
      paddingTop: '1rem',
      fontSize: '14px',
      textAlign: 'justify'
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1rem'
    },
    lowerButtonsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    starButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '1.2rem'
    },
    buttonContainer: {
      width: '100%'
    },
    button: {
      height: '2rem'
    }
  })
)

const ProductCard: React.FC = () => {
  const classes = useStyles()

  return (
    <Card elevation={3} className={classes.productCardContainer}>
      <div>
        <img
          className={classes.image}
          src={ImagePlaceholder}
          alt='Placeholder'
        />
      </div>

      <div className={classes.textContainer}>
        <div>
          <div className={classes.textTitle}>
            <h3>FÓRMULA DE LANÇAMENTO</h3>
          </div>

          <div className={classes.textSubtitleContainer}>
            <span className={classes.textSubtitle1}>Por&nbsp;</span>
            <p className={classes.textSubtitle2}>ÉRICO ROCHA</p>
          </div>
        </div>

        <div className={classes.textDescriptionContainer}>
          <p>Ex consectetur nam quasi autem beatae consequatur. Sunt natus sit voluptatem maxime assumenda recusandae qui. Sed qui sit qui. Qui molestiae placeat rem tempora quibusdam vel nam unde. Necessitatibus perspiciatis velit non accusamus excepturi fuga cum. </p>
        </div>
      </div>

      <div className={classes.buttonsContainer}>
        <div>
          <div className={classes.starButtonContainer}>
            <Button
              variant='contained'
              size='small'
              endIcon={<StarOutlineIcon />}
              style={{
                backgroundColor: colors.button.tertiary.background,
                color: colors.button.tertiary.foreground
              }}
            >
              3.4
            </Button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3>R$ 2500</h3>
          </div>
        </div>

        <div className={classes.lowerButtonsContainer}>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              startIcon={<FavoriteBorderIcon />}
              style={{
                backgroundColor: colors.button.secondary.background,
                color: colors.button.secondary.foreground,
                width: '100%'
              }}
            >
              3.4
            </Button>
          </div>

          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant='contained'
              size='small'
              startIcon={<LocalMallIcon />}
              style={{
                backgroundColor: colors.button.primary.background,
                color: colors.button.primary.foreground,
                marginTop: '0.6rem',
                width: '100%'
              }}
            >
              COMPRAR
            </Button>
          </div>
        </div>
      </div>

      <div>

      </div>
    </Card >
  )
}

export default ProductCard
