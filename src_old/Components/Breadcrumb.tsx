import React from 'react'
import { Typography, IconButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        breadCrumbContainer: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '0.15fr 0.75fr 0.1fr',
            color: theme.palette.primary.main,
            marginBottom: '1.2rem'
        },
        pageTitle: {
            display: 'flex',
            borderRight: `1px solid ${theme.palette.primary.light}`
        },
        breadCrumbItems: {
            display: 'flex',
            margin: 'auto 0px',
            padding: '0 1rem',
            alignItems: 'center'
        },
        configContainer: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        centerTextVertically: {
            display: 'flex',
            alignItems: 'center'
        }
    })
)

const Breadcrumb: React.FC = () => {
    const classes = useStyles()

    const handleHomeButton = () => {
        alert('Ir para home')
    }

    const handleSettingsButton = () => {
        alert('Abrir modal de configurações')
    }

    return (
        <div className={classes.breadCrumbContainer}>
            <div className={classes.pageTitle}>
                <Typography
                    variant='body1'
                    color='primary'
                    className={classes.centerTextVertically}
                >
                    Resultados
                </Typography>
            </div>

            <div className={classes.breadCrumbItems}>
                <IconButton
                    color='primary'
                    title='Home'
                    size='small'
                    onClick={handleHomeButton}
                >
                    <HouseOutlinedIcon />
                </IconButton>

                <Typography
                    variant='body1'
                    color='primary'
                    className={classes.centerTextVertically}
                >
                    <ChevronRightIcon />
                    Cursos
                </Typography>
            </div>

            <div className={classes.configContainer}>
                <IconButton
                    color='primary'
                    title='Configurações'
                    size='small'
                    onClick={handleSettingsButton}
                >
                    <SettingsIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Breadcrumb
