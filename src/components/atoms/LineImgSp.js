import * as React from "react"
import * as styles from "./LineImgSp.module.scss"

const LineImgSp = props => {
  const { pathname } = props
  let src = "/common/line_content_lightBlue_sp"

  // URLによって枠のカラーを出し分け
  if (pathname.match(/socialsystem/)) {
    src = "/common/line_content_green_sp"
  } else if (pathname.match(/bluehunter/)) {
    src = "/common/line_content_yellow_sp"
  } else if (pathname.match(/machinery/)) {
    src = "/common/line_content_blue_sp"
  } else if (pathname.match(/technology/)) {
    src = "/common/line_content_purple_sp"
  }

  return (
    <div className={styles.line_area}>
      <picture>
        <source type="image/webp" srcset={`${src}.webp`} />
        <img src={`${src}.png`} alt="" className={styles.line} loading="lazy" />
      </picture>
    </div>
  )
}
export default LineImgSp
