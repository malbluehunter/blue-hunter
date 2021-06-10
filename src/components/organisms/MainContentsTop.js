import React from "react"
import ContentsTopText from "../atoms/ContentsTopText"
import * as styles from "./MainContentsTop.module.scss"

const MainContentsTop = props => {
  const { text, pathname } = props
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
      className={`${styles.main_contents_area_top}
    ${color == "purple" ? styles.color_purple : color == "green" ? styles.color_green : color == "yellow" ? styles.color_yellow : color == "blue" ? styles.color_blue : styles.color_lightBlue}`}
    >
      <ContentsTopText text={text} pathname={pathname} />
    </div>
  )
}
export default MainContentsTop
