import React, { Component } from 'react'
//import React from 'react'
import Axios from 'axios'

import Loader from '../../../Ui/Loader/Loader'
import ShopItem from './ShopItem/ShopItem'
class Shop extends Component {

    state = {data : null }


    componentDidMount(){
        
        fetchData(4000,(v)=>{
    
               
            })
            .then(result =>{
                this.setState({data: {
                    _id:'1',
                    shopName:"someName",
                    items : [{name:'item1',price:21},{name:'item2',price:42}]
                    }
                })
            })
        }

    render() {  

        let shopRender;
        let data = {...this.state.data}
        
        if (this.state.data === null){
            shopRender = <div>
                <Loader />
            </div>
            //render loader
        }else{
            //render data
            console.log(this.state.data);
            
            shopRender = 
            <div>
                <h3>{data.shopName}</h3>
                {data.items.map(item =>{
                    return(
                <div>
                    <ShopItem itemName={item.name} price={item.price}/>
                </div>
                )
                })}
                
            </div>
        }
        return (
            <div>
                {shopRender}
            </div>
        )
    }
     
}

function fetchData(t, v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }


export default Shop;