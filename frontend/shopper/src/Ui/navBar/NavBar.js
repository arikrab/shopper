import React from 'react'
import NavBtn from './navBtn/NavBtn'
import Styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    
    const pages = ["home","shops","items","cart"]
    return (
    <ul className={Styles.navbar}>

      {pages.map(pageLink =>{
        return <NavBtn name={pageLink} key={pageLink} />
      }) }   
    
    </ul>
    )
}
export default NavBar;

/* <ul>
          <li>
            <Link to="/" exact="true">
              main
            </Link>
          </li>
          <li>
          <Link to="/shops">
              shop
            </Link>
          </li>
          <li>
          <Link to="/items">
              items
            </Link>
          </li>
          <li>
          <Link to="/cart">
              cart
        </Link>
          </li>
        </ul> */