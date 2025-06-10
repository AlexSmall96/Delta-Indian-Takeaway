import React from "react"
import styles from '../styles/MenuItem.module.css'

const MenuItem = ({item}) => {

    const showDots = item.category !== 'DELTA CLASSICS' || item.price

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>{item.name}</div>
                { showDots? <div className={styles.dotted}></div>: ''}
                <div className={styles.itemPrice}>{item.price}</div>
            </div>
            <p className={styles.itemDescription}>{item.description} <br /></p>
            <p className={styles.itemSpice}>
                {item.spice? 
                        item.spice === 2? 
                            <><i class="fa-solid fa-pepper-hot"></i><i class="fa-solid fa-pepper-hot"></i></>
                        : 
                            <i class="fa-solid fa-pepper-hot"></i>:
                ''}
            </p>
        </>
    )
};

export default MenuItem
