import React from 'react'
import CIcon from '@coreui/icons-react'

const NavAdmin = () => {
    const token = localStorage.getItem("token");

    if (token){
        return [
            // dashboard admin (dashboardAdmin)
            //ADMIN
            {
                _tag : 'CSidebarNavTitle',
                _children : ['Admin']
            },

            // {
            //     _tag: 'CSidebarNavItem',
            //     name: 'dashboard Admin',
            //     to: '/admin/dashboardAdmin',
            //     icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            // },

            {
                _tag : 'CSidebarNavDropdown',
                name : 'Admin',
                route : '/admin',
                icon : 'cil-user',
                _children : [
                {
                    _tag: 'CSidebarNavItem',
                    name: 'Manage Transaksi',
                    to: '/admin/manageTransaksi',
                    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
                },
                ] 

            },
        ]
    } else {

    }
}

const _navAdmin = NavAdmin();

export default _navAdmin