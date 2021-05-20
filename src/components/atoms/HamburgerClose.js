import * as React from "react"
import * as styles from "./HamburgerClose.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const HamburgerClose = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/common/hamburger_close.png"
        layout="fullWidth"
        className={styles.img}
      />
    </div>
  )
}
export default HamburgerClose
