import React from 'react'

const GoodsItem = (props) => {
    const {displayName, displayType: type} = props
    const price = props.price.finalPrice
    const full_background = props.displayAssets.length > 0 ? props.displayAssets[0].full_background : `https://via.placeholder.com/300x400?text=${displayName}`

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{type}</p>
            </div>
            <div className="card-action">
                <button className="btn waves-effect waves-light " type="submit">Купить</button>
                <span className='right' style={{fontSize: '1.35rem'}}>{price} руб.</span>
            </div>
        </div>
    )
}

export default GoodsItem
