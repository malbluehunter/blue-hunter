import * as React from "react"
import * as styles from "./LineImg.module.scss"

const LineImg = props => {
  const { pathname } = props
  let src = "/common/line_content_lightBlue"

  // URLによって枠のカラーを出し分け
  if (pathname.match(/socialsystem/)) {
    src = "/common/line_content_green"
  } else if (pathname.match(/bluehunter/)) {
    src = "/common/line_content_yellow"
  } else if (pathname.match(/machinery/)) {
    src = "/common/line_content_blue"
  } else if (pathname.match(/technology/)) {
    src = "/common/line_content_purple"
  }

  return (
    <div className={styles.line_area}>
      <picture>
        <source type="image/webp" srcset={`${src}.webp`} />
        <img src={`${src}.png`} loading="lazy" alt="" />
      </picture>
    </div>
  )
}
export default LineImg
