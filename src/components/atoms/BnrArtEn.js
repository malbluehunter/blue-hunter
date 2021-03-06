import * as React from "react"
import * as styles from "./BnrArt.module.scss"

const BnrArt = () => {
  return (
    <div className={styles.bnr_wrapper}>
      <a href="/en/special/" className={styles.bnr_link} rel="noopener">
        <img className={styles.bnr_img} src="/common/bnr_art_en.png" alt="BLUE HUNTER Art Contest" loading="lazy" />
      </a>
    </div>
  )
}
export default BnrArt
