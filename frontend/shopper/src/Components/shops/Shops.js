
import React, { Component } from 'react'
import AUX from '../../Utils/HOC/AUX'
import SideBar from '../../Ui/sideBar/SideBar'
import Styles from './Shops.module.css'
import  ShopList  from './shopList/ShopList'

export default class Shops extends Component {

    state = {
        dummyData : {
            shops:[
                {
                    shopID:1,
                    shopName:"tool Shop",
                    logoRef:"http:someUrl/logo.jpg",
                    shopTopic:["diy","fix","hardware tools","tool","powerTool"],
                    shopItems:[
                        {
                            itemId:1,
                            itemName:"makita 12V drill",
                            model:"M12VD15",
                            releaseYear:"2015",
                            itemType:"power drill",
                            brand:"makita",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            aditionalInfo:[{}]
                        },
                            
                        {
                            itemId:2,
                            itemName:"signet philips head screw driver",
                            itemType:"philips screw driver",
                            model:"Sphsd16",
                            releaseYear:"2016",
                            brand:"signet",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            aditionalInfo:[{}]}
                        ]},
                {   shopID:2,
                    shopName:"electronic shop",
                    shopTopic:["electronics","tv","gadgets","tv consoles"],
                    shopItems:[
                        {
                            itemId:3,
                            itemName:"makita 18V drill",
                            itemType:"power drill",
                            brand:"makita",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            aditionalInfo:[{}]},
                        {
                            itemId:4,
                            itemName:"signet philips head screw driver",
                            itemType:"screw driver",
                            brand:"signet",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            aditionalInfo:[{}]}
                        ]},
                {   shopID:3,
                    shopName:"tool Shop 2",
                    shopTopic:["diy","fix","hardware tools","tool","powerTool"],
                    shopItems:[
                        {
                            itemId:1,
                            itemName:"bosch 12V drill",
                            itemType:"power drill",
                            brand:"bosch",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            additionalInfo:[{}]},
                            
                        {
                            itemId:2,
                            itemName:"ching chong screw driver",
                            itemType:"screw driver",
                            brand:"ching chong",
                            pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                            aditionalInfo:[{}]}
                        ]},
                        {   shopID:4,
                            shopName:"electronic shop",
                            shopTopic:["electronics","tv","gadgets","tv consoles"],
                            shopItems:[
                                {
                                    itemId:3,
                                    itemName:"makita 18V drill",
                                    itemType:"power drill",
                                    brand:"makita",
                                    pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                                    aditionalInfo:[{}]},
                                {
                                    itemId:4,
                                    itemName:"signet philips head screw driver",
                                    itemType:"screw driver",
                                    brand:"signet",
                                    pictures:["somepicturelink1","somepicturelink2","somepicturelink3"],
                                    aditionalInfo:[{}]}
                                ]}
                    
                        
                    
                        
            ]
        }
    }
    render() {
        const shops = [...this.state.dummyData.shops]

        return (
        <AUX>

            
            <div className={Styles.shopContainer}>
            <SideBar>

            </SideBar>
                
                <ul>
                {shops.map(shop =>{
                    return (
                        <ShopList key={shop.shopID} shopName={shop.shopName} _id={shop.shopID} ></ShopList>     
                    )
                })}
                </ul>
            </div>
        </AUX>
        )
    }
}
