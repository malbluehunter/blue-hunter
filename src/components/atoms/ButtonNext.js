import * as React from "react"
import * as styles from "./ButtonNext.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ButtonNext = props => {
  const { href } = props

  return (
    <a href={href}>
      <StaticImage src="../../assets/images/world/btn_next.png" alt="NEXT" />
    </a>
  )
}
export default ButtonNext
