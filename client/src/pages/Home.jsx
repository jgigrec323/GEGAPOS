import React from 'react'
import Sidebar from "../components/Sidebar"
import MainContainer from "../components/MainContainer"
import { Outlet } from 'react-router-dom'
function Home() {
    return (
        <div className='homePage'>
            <Sidebar></Sidebar>
            <MainContainer>
                <Outlet></Outlet>
            </MainContainer>
        </div>
    )
}

export default Home