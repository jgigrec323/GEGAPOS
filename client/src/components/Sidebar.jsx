import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import { baseUrl } from "../utilities/baseUrl"

function Sidebar() {
    const [links, setLinks] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/menuLinks/getAllMenuLinks`)
            .then(Response => {
                setLinks(Response.data.menuLinks)
            })
            .catch(err => {
                throw err
            })

    }, [])

    return (
        <div className="sidebar">
            <div className="logo">GEGAPOS</div>
            <div className="links">
                {links.map(link => {
                    if (link.menu_visibility) {
                        return <NavLink className="link" key={link.menu_links_id} to={link.url}>{link.menu_link_text}</NavLink>
                    }
                })}
            </div>
            <div className="users">
                <div className="user">
                    <span className="userInitials">J</span> jgigrec323</div>
                <div className="user">
                    <span className="userInitials">B</span> Booba</div>
                <div className="user"><span className="userInitials">H</span> Herve</div>
            </div>
        </div>
    )
}

export default Sidebar