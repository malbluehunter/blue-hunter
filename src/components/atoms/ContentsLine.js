import * as React from "react"
import * as styles from "./ContentsLine.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ContentsLine = () => {
  return (
    <StaticImage
      src="../../assets/images/common/line_content.png"
      layout="fullWidth"
    />
  )
}
export default ContentsLine
