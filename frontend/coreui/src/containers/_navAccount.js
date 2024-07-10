import React from 'react'
import CIcon from '@coreui/icons-react'
const NavAccount = () => {
    const token = localStorage.getItem("token");

    if (token){
        return [
             // dashboard user (dashboardUser)
            //USER
            {
                _tag : 'CSidebarNavTitle',
                _children : ['User']
            },

            {
                _tag: 'CSidebarNavItem',
                name: 'Dashboard User',
                to: '/user/dashboardUser',
                icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Halaman Favorit',
                to: '/user/halamanFavorit',
                icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Manage Properti',
                to: '/user/manageProperti',
                icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            },

            // {
            //     _tag : 'CSidebarNavDropdown',
            //     name : 'User',
            //     route : '/user',
            //     icon : 'cil-user',
            //     _children : [
                
            //     {
            //         _tag: 'CSidebarNavItem',
            //         name: 'Pasang Iklan',
            //         to: '/user/pasangIklan',
            //         icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            //     },

            //     {
            //         _tag: 'CSidebarNavItem',
            //         name: 'Halaman Properti',
            //         to: '/user/halamanProperti',
            //         icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            //     },

            //     {
            //         _tag: 'CSidebarNavItem',
            //         name: 'Halaman Favorit',
            //         to: '/user/halamanFavorit',
            //         icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            //     },

            //     {
            //         _tag: 'CSidebarNavItem',
            //         name: 'Manage Properti',
            //         to: '/user/manageProperti',
            //         icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            //     },

            //     {
            //         _tag: 'CSidebarNavItem',
            //         name: 'Halaman Ujicoba',
            //         to: '/user/halamanUjicoba',
            //         icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
            //     },
            //     ],
            // },
        ]
    } else {

    }
}

const _navAccount = NavAccount();

export default _navAccount