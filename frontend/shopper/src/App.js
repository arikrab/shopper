import React, { Component } from 'react'
import Styles from './App.css';
import  NavBar  from './Ui/navBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import { Home } from './Components/home/Home';
import { Items } from './Components/items/Items';
import Shops from './Components/shops/Shops'
import Shop from './Components/shops/Shop/Shop'
import { Cart } from './Components/cart/Cart'





export default class App extends Component {
  
  
  
  render() {
    
    
    return (
      <Router>
      <div className={Styles.allContainer}>
        <NavBar />
          <div className={Styles.afterNavContainer}>

           <Switch>



            <Route path="/" exact component={Home}/>
              
            <Route path="/shops" component={Shops}/>
              
            <Route path="/items" component={Items}/>
              
            <Route path="/cart" component={Cart}/>

            <Route path="/shop/:id" component={Shop}/>
              
          </Switch>
        </div>
              
      </div>
    </Router>
      
    
  )
}
  
}



