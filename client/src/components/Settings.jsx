import React from 'react'
import MyProfile from './MyProfile'
import UsersManagement from './UsersManagement'
import SystemConfig from './SystemConfig'

function Settings() {
    return (
        <section className="settings">
            <h1 className="compTitle">Settings</h1>
            <div className="top">
                <ul className="settingsNav">
                    <li>My profile</li>
                    <li>Users management</li>
                    <li>System configuration</li>
                </ul>
            </div>
            <div className="separator"></div>
            <div className="bottom">
                <MyProfile></MyProfile>
                <UsersManagement></UsersManagement>
                <SystemConfig></SystemConfig>
            </div>
        </section>
    )
}

export default Settings