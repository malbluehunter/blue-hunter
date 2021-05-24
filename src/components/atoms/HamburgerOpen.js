import * as React from "react"
import * as styles from "./HamburgerOpen.module.scss"

const HamburgerOpen = () => {
  return (
    <div className={styles.img__wrap}>
      <img src="/common/hamburger_open.png" className={styles.img} />
    </div>
  )
}
export default HamburgerOpen
