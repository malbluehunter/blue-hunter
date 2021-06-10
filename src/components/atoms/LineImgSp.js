import * as React from "react"
import * as styles from "./LineImgSp.module.scss"

const LineImgSp = props => {
  const { pathname } = props
  let src = "/common/line_content_lightBlue_sp.webp"

  // URLによって枠のカラーを出し分け
  if (pathname.match(/socialsystem/)) {
    src = "/common/line_content_green_sp.webp"
  } else if (pathname.match(/bluehunter/)) {
    src = "/common/line_content_yellow_sp.webp"
  } else if (pathname.match(/machinery/)) {
    src = "/common/line_content_blue_sp.webp"
  } else if (pathname.match(/technology/)) {
    src = "/common/line_content_purple_sp.webp"
  }

  return (
    <div className={styles.line_area}>
      <img src={src} className={styles.line} />
    </div>
  )
}
export default LineImgSp
