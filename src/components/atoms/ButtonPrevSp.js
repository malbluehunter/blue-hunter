import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonPrevSp = props => {
  const { href } = props

  return (
    <a href={href} className={styles.btn_wrapper}>
      <StaticImage src="../../assets/images/world/btn_prev_sp.png" alt="PREV" />
    </a>
  )
}
export default ButtonPrevSp
