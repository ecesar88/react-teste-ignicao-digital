import React, { useState } from 'react'
import {
  IconButton,
  Card,
  TextField
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
    component: {
      margin: '1rem 0'
    },
    iconButton: {
      color: theme.palette.primary.main
    },
    userBarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.2rem 0.6rem'
    },
    searchBar: {
      width: '30rem',
      height: '100%',
      margin: 'auto 0',
      transition: '500ms linear',
      boxShadow: 'rgba(0, 0, 0, 0.28) 2px 3px 8px'
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: 'red',
      }
    },
    notchedOutline: {
      borderColor: 'purple'
    },
    focusedNotchedOutline: {

    }
  })
)

const UserBar: React.FC = () => {
  const [starred, setStarred] = useState(false)
  const [search, setSearch] = useState(false)
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
    setSearch((prev: React.ComponentState) => !prev)
    setTimeout(() => {
      document.getElementById('searchInput')?.focus()
    }, 100);
  }

  return (
    <Card className={classes.component} elevation={3}>
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
        {
          search
            ? (
              <div className={classes.searchBar}>
                <TextField
                  id='searchInput'
                  fullWidth
                  label=''
                  variant='outlined'
                  size='small'
                  placeholder='Buscar:'
                  className={classes.notchedOutline}
                  inputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.focusedNotchedOutline,
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </div>
            )
            : (
              <>
              </>
            )
        }

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
              style={{
                backgroundColor: search ? '#bcbcbc' : 'unset'
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <UserProfileButton />
        </div>
      </div>
    </Card >
  )
}

export default UserBar
