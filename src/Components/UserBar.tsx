import React from 'react'
import {
  Container,
  Grid,
  IconButton,
  Typography,
  Card
} from '@material-ui/core'
import {
  Theme,
  makeStyles,
  createStyles
} from '@material-ui/core/styles'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import EmailIcon from '@material-ui/icons/Email'
import TodayIcon from '@material-ui/icons/Today';
import StarOutlineIcon from '@material-ui/icons/StarOutline'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backGroundColor: '#fff'
    }
  })
)

const UserBar: React.FC = () => {
  const classes = useStyles()

  return (
    <Card>
      <Grid container xs={12}>
        <IconButton aria-label='todo'>
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton aria-label='chatBubble'>
          <ChatBubbleIcon />
        </IconButton>
        <IconButton aria-label='email'>
          <EmailIcon />
        </IconButton>
        <IconButton aria-label='calendar'>
          <TodayIcon />
        </IconButton>
        <IconButton aria-label='star' color='secondary'>
          <StarOutlineIcon />
        </IconButton>
      </Grid>
    </Card>
  )
}

export default UserBar
