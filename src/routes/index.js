import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboard'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// config
import { PATH_AFTER_LOGIN } from '../config'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <DashboardLayout />
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'schedule', element: <SchedulePage />},
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'account', element: <UserAccount /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '', element: <Navigate to="/dashboard/app" replace /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ])
}

const UserProfile = Loadable(lazy(() => import('../pages/UserProfile')))
const UserAccount = Loadable(lazy(() => import('../pages/UserAccount')))

// DASHBOARD
const GeneralApp = Loadable(lazy(() => import('../pages/DashboardAppPage')))
const SchedulePage = Loadable(lazy(() => import('../pages/CalendarPage')))

// ERROR HANDLING
const Page500 = Loadable(lazy(() => import('../pages/Page500')))
const Page403 = Loadable(lazy(() => import('../pages/Page403')))
const Page404 = Loadable(lazy(() => import('../pages/Page404')))
