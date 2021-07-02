import * as React from "react"
import * as styles from "./LogoTop.module.scss"

const LogoTop = () => {
  return (
    <a href="https://uminohi.jp/" className={styles.img_wrap} target="_blank" rel="noopener">
      <img src="/top/logo_top.png" alt="BLUE HUNTER" />
    </a>
  )
}
export default LogoTop
