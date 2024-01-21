import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../utilities/baseUrl'
import { Outlet, useNavigate } from 'react-router-dom'

function Menu() {
    const navigate = useNavigate()
    const [menuCategories, setMenuCategories] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/foodMenuCategories`)
            .then(Response => {
                setMenuCategories(Response.data.categories)
            })
            .catch(err => {
                throw err
            })

    }, [])
    const handleClickOnCategory = (id) => {
        navigate(`${id}`);
    }
    return (
        <div className='menu'>

            <div className="menuCategories">
                {
                    menuCategories.map(category => (
                        <div key={category.foods_menu_id} onClick={() => { handleClickOnCategory(category.foods_menu_id) }} className="category">
                            <span className={`mdi ${category.menu_icon}`}></span>
                            <div className="infosCategory">
                                <h2>{category.menu_name}</h2>
                                <p>{category.number_items} articles</p>
                            </div>
                        </div>
                    ))
                }



            </div>
            <div className="separator"></div>
            <div className="menuItems">
                <Outlet></Outlet>

            </div>
        </div>
    )
}

export default Menu