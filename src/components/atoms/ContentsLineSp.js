import * as React from "react"
import * as styles from "./ContentsLineSp.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ContentsLineSp = () => {
  return (
    <div className={styles.line_area}>
      <StaticImage
        src="../../assets/images/common/line_content_sp.png"
        layout="fullWidth"
        className={styles.line}
      />
    </div>
  )
}
export default ContentsLineSp
