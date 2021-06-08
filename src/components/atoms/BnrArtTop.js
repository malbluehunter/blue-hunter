import * as React from "react"
import * as styles from "./BnrArtTop.module.scss"

const BnrArtTop = () => {
  return (
    <a href="https://bha.myanimelist.net" className={styles.bnr_link} target="_blank">
      <img className={styles.bnr_img} src="/top/bnr_art_top.png" alt="アートコンペ作品募集中" loading="lazy" />
    </a>
  )
}
export default BnrArtTop
