import * as React from "react"
import * as styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <a href="https://uminohi.jp/" className={styles.img__wrap} target="_blank" rel="noopener">
      <picture>
        <source type="image/webp" srcset="/common/logo.webp" />
        <img src="/common/logo.png" alt="BLUE HUNTER" />
      </picture>
    </a>
  )
}
export default Logo
