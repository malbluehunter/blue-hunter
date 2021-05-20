import * as React from "react"
import * as styles from "./Logo.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <a href="https://uminohi.jp/" className={styles.img__wrap} target="_blank">
      <StaticImage
        src="../../assets/images/common/logo.png"
        alt="BLUE HUNTER"
        layout="fullWidth"
      />
    </a>
  )
}
export default Logo
