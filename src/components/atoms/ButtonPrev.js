import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonPrev = props => {
  const { href } = props

  return (
    <a href={href}>
      <StaticImage src="../../assets/images/world/btn_prev.png" alt="PREV" />
    </a>
  )
}
export default ButtonPrev
