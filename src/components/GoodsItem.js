import React, { useContext } from 'react'
import { ShopContext } from '../contex'

const GoodsItem = (props) => {

    const { addToBasket } = useContext(ShopContext)

    const {mainId: id, displayName: name, displayDescription: description} = props
    const price = props.price.finalPrice
    const full_background = props.displayAssets.length > 0 ? props.displayAssets[0].full_background : `https://via.placeholder.com/300x400?text=${name}`

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn blue "
                    onClick={() => {
                        addToBasket({id, name, price})
                    }}
                    type="submit"
                >
                    Купить
                </button>
                <span className='right' style={{fontSize: '1.35rem'}}>{price} руб.</span>
            </div>
        </div>
    )
}

export default GoodsItem
