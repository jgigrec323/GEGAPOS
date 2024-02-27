import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
import MainContainer from "../components/MainContainer"
import SignIn from '../components/SignIn'

function Layout() {

    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <MainContainer>
                <input type="search" className="searchInput" placeholder='Search' />
                <Outlet></Outlet>
            </MainContainer>
            {/* <SignIn></SignIn> */}

        </div>
    )
}

export default Layout