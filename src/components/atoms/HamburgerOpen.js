import * as React from "react"
import * as styles from "./HamburgerOpen.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const HamburgerOpen = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/common/hamburger_open.png"
        layout="fullWidth"
        className={styles.img}
      />
    </div>
  )
}
export default HamburgerOpen
