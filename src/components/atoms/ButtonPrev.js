import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonPrev = props => {
  const { hrefPrev, isDisabledPrev } = props

  return (
    <a href={hrefPrev} className={`${styles.btn_wrapper} ${isDisabledPrev ? styles.disabled : ""}`}>
      {isDisabledPrev ? <StaticImage src="../../assets/images/world/btn_prev_disabled.png" alt="PREV" /> : <StaticImage src="../../assets/images/world/btn_prev.png" alt="PREV" />}
    </a>
  )
}
export default ButtonPrev
