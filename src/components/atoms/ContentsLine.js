import * as React from "react"
import * as styles from "./ContentsLine.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ContentsLine = () => {
  return (
    <div className={styles.line_area}>
      <StaticImage
        src="../../assets/images/common/line_content.png"
        layout="fullWidth"
      />
    </div>
  )
}
export default ContentsLine
