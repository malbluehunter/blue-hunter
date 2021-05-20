import * as React from "react"
import * as styles from "./ButtonNext.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonNextSp = props => {
  const { href } = props

  return (
    <a href={href} className={styles.btn_wrapper}>
      <StaticImage src="../../assets/images/world/btn_next_sp.png" alt="NEXT" />
    </a>
  )
}
export default ButtonNextSp
