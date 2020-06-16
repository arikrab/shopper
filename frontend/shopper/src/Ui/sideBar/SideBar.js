import React from 'react'
import Styles from './sidebar.module.css'

const SideBar = (props) => {
    return (
        <div className={Styles.sidebar}>
            {props.children}
        </div>
    )
}

export default SideBar;
