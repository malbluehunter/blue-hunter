import * as React from "react"
import * as styles from "./HamburgerClose.module.scss"

const HamburgerClose = () => {
  return (
    <div className={styles.img__wrap}>
      <img src="/common/hamburger_close.png" className={styles.img} />
    </div>
  )
}
export default HamburgerClose
