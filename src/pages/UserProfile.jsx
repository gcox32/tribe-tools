import { Container } from '@mui/material'
import useSettings from '../hooks/useSettings'
// hooks
import { useUserData } from '../hooks/useUserData';
// routes
import { PATH_DASHBOARD } from '../routes/paths'
// components
import Page from '../components/Page'
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs'
// sections

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings()
  const user = useUserData();
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <Page title="User: Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: `${user.given_name} ${user.family_name}` || '' }
          ]}
        />
      </Container>
    </Page>
  )
}
