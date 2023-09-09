import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
import MainContainer from "../components/MainContainer"

function Layout() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <MainContainer>
                <Outlet></Outlet>
            </MainContainer>
        </div>
    )
}

export default Layout