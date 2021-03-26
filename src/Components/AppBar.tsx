import React, { useState } from 'react'
import LogoIgnicao from '../Assets/Brand.svg'
import {
  Container,
  Grid,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  Box
} from '@material-ui/core'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import HouseIcon from '@material-ui/icons/House'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EmailIcon from '@material-ui/icons/Email'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      height: '100%',
      padding: '10px 5px'
    },
    logoGrid: {
      marginBottom: '35px'
    },
    logo: {
      textAlign: 'center'
    },
    selectGrid: {
      marginBottom: '65px'
    },
    selectContainer: {
      display: 'grid',
      gridTemplateColumns: '0.1fr 0.9fr',
      backgroundColor: theme.palette.secondary.light,
      fontSize: '0.9rem',
      padding: '4px 8px',
      border: 'none',
      borderRadius: '5px',
      color: theme.palette.primary.main,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    selectIcon: {
      minWidth: '0',
      minHeight: '0',
      margin: 'auto'
    },
    select: {
      minWidth: '0',
      minHeight: '0',
      padding: '4px 8px',
      fontSize: '15px',
      textAlign: 'left',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      '&::before': {
        borderBottom: 'none'
      },
      '&::after': {
        borderBottom: 'none'
      },
      '&::hover': {
        borderBottom: 'none'
      }
    },
    appsContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    appButton: {
      justifyContent: 'flex-start',
      margin: '0px',
      color: theme.palette.primary.main
    }
  })
)

const apps = [
  {
    id: '1',
    name: 'Email',
    icon: <EmailIcon />
  },
  {
    id: '2',
    name: 'Conversar',
    icon: <ChatBubbleIcon />
  },
  {
    id: '3',
    name: 'Todo',
    icon: <CheckCircleOutlineIcon />
  },
  {
    id: '4',
    name: 'Calendário',
    icon: <TodayIcon />
  }
]

const AppBar: React.FC<{
  appContextValue: any,
  setAppContextValue: any
}> = (
  { appContextValue, setAppContextValue }
) => {
    const classes = useStyles()
    const [appView, setAppView] = useState('clientArea')

    // transfer to context ?
    const handleViewSelectionChange =
      (event: React.ChangeEvent<{ value: unknown }>): void => {
        setAppView(event.target.value as string)
      }
    return (
      <Paper elevation={3} className={classes.appBar}>
        <Container>
          <Grid xs={12} className={classes.logoGrid}>
            <div className={classes.logo}>
              <img
                src={LogoIgnicao}
                alt="Ignição Digital"
                style={{ height: '70px' }}
              />
            </div>
          </Grid>
          <Grid xs={12} className={classes.selectGrid}>
            <div className={classes.selectContainer}>
              <div className={classes.selectIcon}>
                <HouseIcon />
              </div>

              <div>
                <Select
                  className={classes.select}
                  fullWidth
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={appView}
                  label=''
                  onChange={handleViewSelectionChange}
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value='clientArea' selected>
                    Área Do Cliente
                </MenuItem>
                  <MenuItem value='managerArea'>
                    Área do Gerente
                </MenuItem>
                </Select>
              </div>
            </div>
          </Grid>

          <Grid xs={12}>
            <div className={classes.appsContainer}>
              <Typography variant='body1' gutterBottom>
                <Box fontWeight='fontWeightBold' m={1}>
                  APPS
              </Box>
              </Typography>
              {/* Faster mapping through each item than writing them one by one */}
              {
                apps.map((app) => {
                  return (
                    <Button
                      key={app.id}
                      color='primary'
                      className={classes.appButton}
                      startIcon={app.icon}
                      onClick={
                        (evt: React.SyntheticEvent) => {
                          alert(`Você clicou em ${app.name}`)
                        }
                      }
                    >
                      {app.name}
                    </Button>
                  )
                })
              }
            </div>
          </Grid>
        </Container>
      </Paper>
    )
  }

export default AppBar
