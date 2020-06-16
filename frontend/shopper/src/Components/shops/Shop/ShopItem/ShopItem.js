import React from 'react'
import duumyImg from '../../../../Utils/logoDemo/logo.bmp'

const ShopItem = (props) => {
    return (
        <div>
            <img src={duumyImg} alt="some img"></img>
            <h3>item name : {props.itemName}</h3>
            <h3>item price: {props.price}</h3>
            <form action="/api/add-item-to-orders" method="POST">
                <label for="quantity" ></label>
                <input placeholder="quantity" type="number" min="1" name="quantity" />
                <label for="productid"></label>
                <input type="hidden" value={props.itemID} name="productid"/>
                <div>
                    <a href="/item-description"><button type="button">item decription</button></a>
                    <input type="submit" pattern="order"></input>
                </div>
            </form>
        </div>
    )
}

export default ShopItem;