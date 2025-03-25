import React from 'react'
import styles from "./square.module.css"
const Square = ({text}) => {
    

  return (
    <div>
      <div className={styles["main"]}>
        <div className={styles["top-left"]}></div>
        <div className={styles["top-right"]}></div>
        <div className={styles["bottom-right"]}></div>
        <div className={styles["bottom-left"]}></div>
        <p className={styles["text"]}>{text}</p>
      </div>
    </div>
  )
}

export default Square
