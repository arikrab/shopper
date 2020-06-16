import React from 'react'
import Styles from './Loader.module.css'
import loadingImg from '../../assets/Loader.png'

const Loader = () => {
    return (
        <div>
            <img className={Styles.animation} src={loadingImg} alt="loading data..."/>
        </div>
    )
}

export default Loader;
