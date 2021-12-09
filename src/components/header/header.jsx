import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return(
        <div className={styles.img}>
            <img src="https://cdn.pixabay.com/photo/2021/11/12/06/58/sea-6788169__480.jpg"/>
        </div>
    )
}

export default Header;