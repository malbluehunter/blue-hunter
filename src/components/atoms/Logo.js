import * as React from "react"
import * as styles from "./Logo.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/common/logo.png"
        alt="BLUE HUNTER"
        layout="fullWidth"
      />
    </div>
  )
}
export default Logo
