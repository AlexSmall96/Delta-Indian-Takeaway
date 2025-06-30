import React from "react"
import styles from '../styles/Image.module.css'

const Image = ({src, height, alt}) => {
    return (
        <img 
            className={styles.image} 
            src={src}
            height={height}
            width={height} 
            alt={alt || ""}
        />
    )
};

export default Image
