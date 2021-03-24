import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import UserProfilePicture from '../Assets/user_profile.png'
import UserProfilePlaceholder from '../Assets/user_profile_placeholder.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userProfileButtonContainer: {
      display: 'flex',
      margin: 'auto auto auto 25px',
    },
    nameContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    userName: {
      textAlign: 'right',
      fontSize: '1rem',
      fontWeight: 'bold'
    },
    userCaption: {
      textAlign: 'right',
      fontSize: '0.8rem'
    },
    userPictureContainer: {
      marginLeft: '1rem',
      height: '2.5rem',
      width: '2.5rem',
      color: theme.palette.primary.light,
      borderRadius: '50rem'
    }
  })
)

const UserProfileButton: React.FC = () => {
  const [profilePictureToggler, setProfilePictureToggler] = useState(false)
  const classes = useStyles()

  const userProfilePictureToggle = () => {
    setProfilePictureToggler((prev: React.ComponentState) => !prev)
  }

  return (
    <div className={classes.userProfileButtonContainer}>
      <div className={classes.nameContainer}>
        <div className={classes.userName}>
          <span>Erick César M.</span>
        </div>
        <div className={classes.userCaption}>
          <p>Usuário VIP</p>
        </div>
      </div>

      <div
        className={classes.userPictureContainer}
        title="Clique-me"
        style={{
          backgroundSize: profilePictureToggler ? '150%' : '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${profilePictureToggler ? UserProfilePicture : UserProfilePlaceholder})`,
          cursor: 'pointer',
          boxShadow: 'rgba(0, 0, 0, 0.28) 2px 3px 8px'
        }}
        onClick={userProfilePictureToggle}
      >
      </div>
    </div>
  )
}

export default UserProfileButton
