import React from 'react'

function Cart(props) {
    const {quantity = 0} = props
    return (
        <div className='cart blue darken-4 white-text'>
            <i className="material-icons tiny">shopping_cart</i>
            {quantity ? <span children='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export default Cart