import * as React from "react"
import * as styles from "./LogoBlueHunter.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const LogoBlueHunter = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/common/logo_bluehunter.png"
        alt="BLUE HUNTER"
      />
    </div>
  )
}
export default LogoBlueHunter
