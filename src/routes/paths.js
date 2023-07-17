// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS_DASHBOARD = '/dashboard'

// ----------------------------------------------------------------------

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500'
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app')
  },
  schedule: {
    app: path(ROOTS_DASHBOARD, '/schedule')
  },

  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),

    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account')
  }
}

export const PATH_DOCS = ''
export const API_DOCS = ''
