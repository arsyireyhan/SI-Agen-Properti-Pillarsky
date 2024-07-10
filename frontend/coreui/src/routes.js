import React from 'react';

import swal from 'sweetalert';
import { HOST_URL } from './plugins/api';

// COREUI

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

//======================================================================================================================================================

//token & role
const token = localStorage.getItem('token')
const role = localStorage.getItem('role')

//Login & Register
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));

// Admin Side
const dashboardAdmin = React.lazy(() => import('./views/pillarsky/admin/dashboardAdmin'));
const manageTransaksi = React.lazy(() => import('./views/pillarsky/admin/manageTransaksi'));
const propertiSingleAdmin = React.lazy(() => import('./views/pillarsky/admin/propertiSingleAdmin')); //directory file
const cekPembayaran = React.lazy(() => import('./views/pillarsky/admin/cekPembayaran'));
const manageAccount = React.lazy(() => import('./views/pillarsky/admin/manageAccount'));
const manageBundle = React.lazy(() => import('./views/pillarsky/admin/manageBundle'));
const manageAdmin = React.lazy(() => import('./views/pillarsky/admin/manageAdmin'));
const halamanPesan = React.lazy(() => import('./views/pillarsky/admin/halamanPesan'));
const editStatusTransaksi = React.lazy(() => import('./views/pillarsky/admin/editStatusTransaksi'));

//Account Side
const dashboardUser = React.lazy(() => import('./views/pillarsky/user/dashboardUser'));
const halamanCheckout = React.lazy(() => import('./views/pillarsky/user/halamanCheckout'));
const halamanFavorit = React.lazy(() => import('./views/pillarsky/user/halamanFavorit'));
const halamanProperti = React.lazy(() => import('./views/pillarsky/user/halamanProperti'));
const halamanRiwayat = React.lazy(() => import('./views/pillarsky/user/halamanRiwayat'));
const pasangIklan = React.lazy(() => import('./views/pillarsky/user/pasangIklan'));
const propertiSingle = React.lazy(() => import('./views/pillarsky/user/propertiSingle'));
const profilUser = React.lazy(() => import('./views/pillarsky/user/profilUser'));
const manageProperti = React.lazy(() => import('./views/pillarsky/user/manageProperti'));
const halamanUjicoba = React.lazy(() => import('./views/pillarsky/user/halamanUjicoba.js'));
const editProperti = React.lazy(() => import('./views/pillarsky/user/editProperti'));


const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Path Login & Register
  {path: '/login', exact: true, name: Login},
  {path: '/register', exact: true, name: Register},
  
  //Path Admin
  { path: '/admin', name: 'Admin', component: dashboardUser, exact: true},
  { path: '/admin/dashboardAdmin', name: 'Dashboard Admin', component: dashboardAdmin},
  { path: '/admin/manageTransaksi', name: 'Manage Transaksi', component: manageTransaksi},
  { path: '/admin/propertiSingle/:id', name: 'Detail Properti', component: propertiSingleAdmin},
  { path: '/admin/cekPembayaran/:id', name: 'Cek Pembayaran', component: cekPembayaran},
  { path: '/admin/halamanPesan/:id', name: 'Halaman Pesan', component: halamanPesan},
  { path: '/admin/manageAdmin', name: 'Manage Admin', component: manageAdmin},
  { path: '/admin/manageAccount', name: 'Manage Account', component: manageAccount},
  { path: '/admin/manageBundle', name: 'Manage Bundle', component: manageBundle},
  { path: '/admin/editStatusTransaksi', name: 'Edit Status', component: editStatusTransaksi},

  //Path User
  { path: '/user', name: 'User', component: dashboardUser, exact: true},
  { path: '/user/dashboardUser', name: 'Dashboard User', component: dashboardUser},
  { path: '/user/halamanCheckout/:id', name: 'Checkout', component: halamanCheckout},
  { path: '/user/halamanFavorit', name: 'Favorit', component: halamanFavorit},
  { path: '/user/halamanProperti', name: 'Properti', component: halamanProperti},
  { path: '/user/halamanRiwayat', name: 'Riwayat', component: halamanRiwayat},
  { path: '/user/pasangIklan', name: 'Pasang Iklan', component: pasangIklan},
  { path: '/user/propertiSingle/:id', name: 'Detail Properti', component: propertiSingle},
  { path: '/user/profilUser/:id', name: 'Profil User', component: profilUser},
  { path: '/user/manageProperti', name: 'Manage Properti', component: manageProperti},
  { path: '/user/halamanUjicoba', name: 'Halaman Ujicoba', component: halamanUjicoba},
  { path: '/user/editProperti/:id', name: 'Halaman Edit Properti', component: editProperti},

//======================================================================================================================================================
  //Path Template CoreUI
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
