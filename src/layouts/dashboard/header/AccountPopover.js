import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { alpha } from '@mui/material/styles'
import { Box, Divider, Typography, Stack, MenuItem } from '@mui/material'
import { Authenticator } from '@aws-amplify/ui-react';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths'
// hooks
import { useUserData } from '../../../hooks/useUserData'
// components
import MyAvatar from '../../../components/MyAvatar'
import MenuPopover from '../../../components/MenuPopover'
import { IconButtonAnimate } from '../../../components/animate'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    linkTo: '/dashboard/app'
  },
  {
    label: 'Profile',
    linkTo: PATH_DASHBOARD.user.profile
  },
  {
    label: 'Settings',
    linkTo: PATH_DASHBOARD.user.account
  }
]

// ----------------------------------------------------------------------

AccountPopover.propTypes = {
  userName: PropTypes.object
}

export default function AccountPopover() {

  const [open, setOpen] = useState(null)

  const handleOpen = (event) => {
    setOpen(event.currentTarget)
  }
  const handleClose = () => {
    setOpen(null)
  }

  const user = useUserData();
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)
            }
          })
        }}
      >
        <MyAvatar />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75
          }
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user.given_name} {user.family_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Authenticator >
          {({ signOut }) => (
            <MenuItem onClick={signOut} sx={{ m: 1 }}>
              Logout
            </MenuItem>
          )}
        </Authenticator>
      </MenuPopover>
    </>
  )
}
