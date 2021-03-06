import * as React from "react"
import * as styles from "./BnrArtTop.module.scss"

const BnrArtTop = () => {
  return (
    <a href="/en/special/" className={styles.bnr_link} rel="noopener">
      <img className={styles.bnr_img} src="/top/bnr_art_top_en.png" alt="BLUE HUNTER Art Contest" loading="lazy" />
    </a>
  )
}
export default BnrArtTop
