import * as React from "react"
import * as styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <a href="https://uminohi.jp/" className={styles.img__wrap} target="_blank">
      <img src="/common/logo.png" alt="BLUE HUNTER" />
    </a>
  )
}
export default Logo
