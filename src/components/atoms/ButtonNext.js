import * as React from "react"
import * as styles from "./ButtonNext.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonNext = props => {
  const { hrefNext, isDisabledNext } = props

  return (
    <a href={hrefNext} className={`${styles.btn_wrapper} ${isDisabledNext ? styles.disabled : ""}`}>
      {isDisabledNext ? <StaticImage src="../../assets/images/world/btn_next_disabled.png" alt="PREV" /> : <StaticImage src="../../assets/images/world/btn_next.png" alt="PREV" />}
    </a>
  )
}
export default ButtonNext
