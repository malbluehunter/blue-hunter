import * as React from "react"
import * as styles from "./BnrArtTop.module.scss"

const BnrArtTop = () => {
  return (
    <a href="/special/" className={styles.bnr_link} rel="noopener">
      <img className={styles.bnr_img} src="/top/bnr_art_top.png" alt="アートコンペ結果発表" loading="lazy" />
    </a>
  )
}
export default BnrArtTop
