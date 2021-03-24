import React from 'react'
import { Card, Button, Box, Typography, Divider } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Slider from '@material-ui/core/Slider'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

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
        }
    })
)

const Filters: React.FC = () => {
    const classes = useStyles()
    const [radioValue, setRadioValue] = React.useState('female')
    const [sliderValue, setSliderValue] = React.useState<number>(30);

    const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(evt.target.value);
    }

    const handleSliderChange = (evt: any, newValue: number | number[]) => {
        setSliderValue(newValue as number);
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
                        <RadioGroup aria-label='price' name='prices' value={radioValue} onChange={handleRadioChange}>
                            <FormControlLabel value='10' control={<Radio />} label='R$10,00' />
                            <FormControlLabel value='10-100' control={<Radio />} label='R$10-$100' />
                            <FormControlLabel value='100-500' control={<Radio />} label='R$100-$500' />
                            <FormControlLabel value='500' control={<Radio />} label='R$500' />
                            <FormControlLabel value='all' control={<Radio />} label='Todos' />
                        </RadioGroup>
                    </FormControl>
                </div>

                <Divider />

                <Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="continuous-slider" />

                <Divider />
            </Card>
        </div>
    )
}

export default Filters
