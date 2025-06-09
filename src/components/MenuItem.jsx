import React from "react"
import styles from '../styles/MenuItem.module.css'

const MenuItem = ({item}) => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.dotted}></div>
                <div className={styles.itemPrice}>{item.price}</div>
            </div>
            <p className={styles.itemDescription}>{item.description}</p>
        </>
    )
};

export default MenuItem
