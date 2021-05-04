import { useContext } from 'react'
import BasketItem from './BasketItem'
import { ShopContext } from '../contex'

function BasketList() {

    const {order = [], handleBasketShow} = useContext(ShopContext)
    console.log(order)

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active blue">Корзина</li>
            {
                order.length
                    ? order.map((item) => <BasketItem key={item.id} {...item}/>)
                    : <li className="collection-item ">Корзина пуста</li>
            }
            <li className="collection-item active blue  btn-order">Общая стоймость: {totalPrice} руб.
                <button className='btn btn-small blue lighten-2' onClick={()=> alert('Если Вам понравилось данное приложение, поставьте пожалуйста звездочку на GitHub :)')}> Оформить</button>
            </li>

            <i
                className='material-icons basket-close '
                onClick={handleBasketShow}>
                close
            </i>
        </ul>
    )
}

export default BasketList