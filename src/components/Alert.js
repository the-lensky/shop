import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../contex'

function Alert() {
    const {alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext)


    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    )
}

export default Alert
