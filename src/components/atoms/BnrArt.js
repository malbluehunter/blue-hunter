import * as React from "react"
import * as styles from "./BnrArt.module.scss"

const BnrArt = () => {
  return (
    <div className={styles.bnr_wrapper}>
      <a href="https://bha.myanimelist.net" className={styles.bnr_link} target="_blank">
        <img className={styles.bnr_img} src="/world/bnr_world.png" alt="アートコンペ作品募集中" />
      </a>
    </div>
  )
}
export default BnrArt
