import { useContext } from 'react'
import { ShopContext } from '../contex'
import GoodsItem from './GoodsItem'

const GoodsList = () => {

    const {goods = []} = useContext(ShopContext)

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className='goods'>
            {goods.map((item) => <GoodsItem key={item.mainId} {...item} />)}
        </div>
    )
}

export default GoodsList
