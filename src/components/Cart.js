import React, { useContext } from 'react'
import { ShopContext } from '../contex'

function Cart() {

    const {order, handleBasketShow} = useContext(ShopContext)

    const quantity = order.length

    return (
        <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
            <i className="material-icons tiny">shopping_cart</i>
            {quantity ? <span children='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export default Cart