import * as React from "react"
import * as styles from "./FollowUs.module.scss"

const FollowUs = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://www.instagram.com/blue_hunter_official/" className={styles.link} target="_blank" rel="noopener">
        <p className={styles.text}>FOLLOW US</p>
        <img src="/common/icon_instagram.svg" alt="インスタグラム アイコン" className={styles.img} />
      </a>
    </div>
  )
}
export default FollowUs
