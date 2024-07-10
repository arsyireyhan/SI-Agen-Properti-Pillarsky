import React from 'react'
import CIcon from '@coreui/icons-react'
const NavGuest = () => {
    return [
        {
            _tag : 'CSidebarNavTitle',
            _children : ['Guest']
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Dashboard User',
            to: '/user/dashboardUser',
            icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
        },

        {
            _tag: 'CSidebarNavItem',
            name: 'Login',
            to: '/login',
            icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Register',
            to: '/register',
            icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
        },
    ]
} 

const _navAccount = NavGuest();

export default _navAccount