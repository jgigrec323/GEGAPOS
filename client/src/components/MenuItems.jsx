import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../utilities/baseUrl';

function MenuItems() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/foodMenuItems/category/${categoryId}`)
            .then(Response => {
                setItems(Response.data)
            })
            .catch(error => {
                throw error
            });
    }, [categoryId]);

    return (
        <>
            {
                items.map(item => (
                    <div className="menuItem" key={item.item_id}>
                        <div className="side"></div>
                        <div className="menuItemInfo">
                            <h2>{item.item_name}</h2>
                            <p className="price">{item.item_price} GNF</p>
                        </div>
                        <div className="qtySelection">
                            <span className="minus">-</span>
                            <span className="qty">0</span>
                            <span className="plus">+</span>
                        </div>
                    </div>
                ))
            }

        </>
    );
}


export default MenuItems