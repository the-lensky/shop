import React, { useEffect, useContext } from 'react'

import { ShopContext } from '../contex'

import { API_URL, API_KEY } from '../config'

import Preloader from './Preloader'
import GoodsList from './GoodsList'
import Cart from './Cart'
import BasketList from './BasketList'
import Alert from './Alert'


const Shop = () => {

    const {order, setGoods, loading,  isBasketShow, alertName} = useContext(ShopContext)
    console.log(order)
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
            })
    }, [])

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? <Preloader/> : <GoodsList/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    )
}

export default Shop
