import React from 'react'
import Styles from './NavBtn.module.css'
import { NavLink } from 'react-router-dom'


const NavBtn = (props) => {
    const linkName = props.name === "home"?"/":"/"+props.name;
    let exact=false
    if (linkName ==="/"){
        exact = true;
    }
    return (
    <li className={[Styles.navBtn,Styles.text].join(' ')}>
        <NavLink className={Styles.text} 
            to={linkName}
            exact = {exact}>
            {props.name}
        </NavLink>     
    </li>
    )
}
export default NavBtn


