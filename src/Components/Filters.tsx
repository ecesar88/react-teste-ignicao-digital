import React from 'react'
import { Card, Button, Box, Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filterContainer: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0.8rem'
        },
        filterContainerTitle: {
            paddingBottom: '0.8rem'
        },
        filterContentContainer: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px'
        },
        filterContentTitle: {
            fontWeight: 'bold'
        },
        inputContainer: {
            paddingLeft: '1rem'
        }
    })
)

const Filters: React.FC = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('female')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
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

                <div>
                    <FormControl component="fieldset" className={classes.inputContainer}>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    </FormControl>
                </div>

            </Card>
        </div>
    )
}

export default Filters
