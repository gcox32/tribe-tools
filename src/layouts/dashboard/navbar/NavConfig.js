// routes
import { PATH_DASHBOARD, PATH_PAGE } from '../../../routes/paths'
// components
import SvgIconStyle from '../../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item')
}

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'dashboard', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'schedule', path: PATH_DASHBOARD.schedule.app, icon: ICONS.calendar },
      { title: 'output score', path: PATH_DASHBOARD.output.app, icon: ICONS.analytics},
    ]
  }

]

export default navConfig
