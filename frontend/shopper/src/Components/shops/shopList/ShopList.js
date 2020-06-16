import React from 'react'
import Logo from '../../../Utils/logoDemo/logo.bmp'
import { Link } from 'react-router-dom';


const Shop = (props) => {
    
    const Styles = 0;
    return (
        <li>
            <div className={Styles.shopWrapper}>
                <div className={Styles.shopContainer}>
                    <img src={Logo} alt="logohere"></img>
                    <div>
                        <h4>{props.shopName}</h4>
                        <input hidden={props._id}></input>
                        <Link to={'/shop/'+props._id}>enter shop</Link>
                        
                        
                    </div>
                </div>
            </div>    
        </li>
    )
}


export default Shop;