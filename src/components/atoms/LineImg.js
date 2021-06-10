import * as React from "react"
import * as styles from "./LineImg.module.scss"

const LineImg = props => {
  const { pathname } = props
  let src = "/common/line_content_lightBlue.webp"

  // URLによって枠のカラーを出し分け
  if (pathname.match(/socialsystem/)) {
    src = "/common/line_content_green.webp"
  } else if (pathname.match(/bluehunter/)) {
    src = "/common/line_content_yellow.webp"
  } else if (pathname.match(/machinery/)) {
    src = "/common/line_content_blue.webp"
  } else if (pathname.match(/technology/)) {
    src = "/common/line_content_purple.webp"
  }

  return (
    <div className={styles.line_area}>
      <img src={src} alt="" />
    </div>
  )
}
export default LineImg
