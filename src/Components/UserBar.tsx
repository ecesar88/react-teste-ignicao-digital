import React, { useState } from 'react'
import {
  IconButton,
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
import TodayIcon from '@material-ui/icons/Today'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarIcon from '@material-ui/icons/Star'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search'
import UserProfileButton from './UserProfileButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      color: theme.palette.primary.main
    },
    userBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.2rem 0.6rem'
    }
  })
)

const UserBar: React.FC = () => {
  const [starred, setStarred] = useState(false)
  const classes = useStyles()

  const handleButtonCheck = () => {
    // do something
  }

  const handleButtonChat = () => {
    // do something
  }

  const handleButtonEmail = () => {
    // do something
  }

  const handleButtonCalendar = () => {
    // do something
  }

  const handleButtonStar = () => {
    setStarred((prev: React.ComponentState) => !prev)
  }

  const handleButtonNotification = () => {
    // do something
  }

  const handleButtonSearch = () => {
    // do something
  }

  return (
    <Card>
      <div className={classes.userBarContainer}>
        <div>
          <IconButton
            aria-label='todo'
            className={classes.iconButton}
            onClick={handleButtonCheck}
          >
            <CheckCircleOutlineIcon />
          </IconButton>

          <IconButton
            aria-label='chatBubble'
            className={classes.iconButton}
            onClick={handleButtonChat}
          >
            <ChatBubbleIcon />
          </IconButton>

          <IconButton
            aria-label='email'
            className={classes.iconButton}
            onClick={handleButtonEmail}
          >
            <EmailIcon />
          </IconButton>

          <IconButton
            aria-label='calendar'
            className={classes.iconButton}
            onClick={handleButtonCalendar}
          >
            <TodayIcon />
          </IconButton>

          <IconButton
            aria-label='star'
            style={{ color: starred ? '#ffba25' : '#999999' }}
            onClick={handleButtonStar}
          >
            {
              starred
                ? (
                  <StarIcon />
                )
                : (
                  <StarOutlineIcon />
                )
            }
          </IconButton>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <IconButton
              aria-label='calendar'
              className={classes.iconButton}
              onClick={handleButtonNotification}
            >
              <NotificationsNoneIcon />
            </IconButton>

            <IconButton
              aria-label='calendar'
              className={classes.iconButton}
              onClick={handleButtonSearch}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <UserProfileButton />
        </div>
      </div>
    </Card>
  )
}

export default UserBar
