import { Container } from '@mui/material'
import useSettings from '../hooks/useSettings'
// routes
import { PATH_DASHBOARD } from '../routes/paths'
// components
import Page from '../components/Page'
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs'
// sections

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings()

  return (
    <Page title="User: Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Given Name' || '' }
          ]}
        />
      </Container>
    </Page>
  )
}
