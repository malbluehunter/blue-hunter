import * as React from "react"
import * as styles from "./BnrArt.module.scss"

const BnrArt = () => {
  return (
    <div className={styles.bnr_wrapper}>
      <a href="/special/" className={styles.bnr_link} rel="noopener">
        <picture>
          <source type="image/webp" srcset="/common/bnr_art.webp" />
          <img src="/common/bnr_art.png" loading="lazy" className={styles.bnr_img} alt="アートコンペ結果発表" />
        </picture>
      </a>
    </div>
  )
}
export default BnrArt
