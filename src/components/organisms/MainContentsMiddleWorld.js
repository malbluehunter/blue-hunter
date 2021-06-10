import * as React from "react"
import * as styles from "./MainContentsMiddleWorld.module.scss"

const MainContentsMiddleWorld = props => {
  const { children, pathname } = props
  let color

  // URLによって枠のカラーを出し分け
  if (pathname.match(/background/)) {
    color = "lightBlue"
  } else if (pathname.match(/socialsystem/)) {
    color = "green"
  } else if (pathname.match(/bluehunter/)) {
    color = "yellow"
  } else if (pathname.match(/machinery/)) {
    color = "blue"
  } else if (pathname.match(/technology/)) {
    color = "purple"
  }

  return (
    <div
      className={`${styles.main_contents_area_middle}
    ${color == "purple" ? styles.color_purple : color == "green" ? styles.color_green : color == "yellow" ? styles.color_yellow : color == "blue" ? styles.color_blue : styles.color_lightBlue}`}
    >
      <div className={styles.main_contents_area_inner}>{children}</div>
    </div>
  )
}
export default MainContentsMiddleWorld
