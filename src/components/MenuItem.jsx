import React from "react"
import styles from '../styles/MenuItem.module.css'
import appStyles from '../App.module.css'

const MenuItem = ({item}) => {

    // Determine if dots are required on menu page
    const showDots = item.category !== 'DELTA CLASSICS' || item.price

    // Spice levels to determine number of chilly icons to show
    const spiceLevels = [1, 2, 3]

    return (
        <>
            {/* ITEM NAME, DESCRIPTION & PRICE */}
            <div className={`${styles.item} ${appStyles.blueFont}`}>
                <div className={styles.itemName}>{item.name}</div>
                { showDots? <div className={styles.dotted}></div>: ''}
                <div className={styles.itemPrice}>{item.price}</div>
            </div>
            <p className={`${styles.itemDescription} ${appStyles.blueFont}`}>{item.description} <br /></p>
            {/* CHILLY & VG ICONS  */}
            <p className={styles.icons}>
                {item.spice?
                    <span className={styles.spice}>{spiceLevels.map(level => item.spice >= level ? <i key={level} className="fa-solid fa-pepper-hot"></i>: '' )}</span>
                :''}
                {item.vegetarian? 
                    <span className={styles.vegetarian}>VG</span>
                :''}
            </p>
        </>
    )
};

export default MenuItem