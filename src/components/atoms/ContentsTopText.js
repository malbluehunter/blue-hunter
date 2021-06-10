// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./ContentsTopText.module.scss"

const ContentsTopText = props => {
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
    <p
      className={`${styles.text}
  ${color == "purple" ? styles.color_purple : color == "green" ? styles.color_green : color == "yellow" ? styles.color_yellow : color == "blue" ? styles.color_blue : styles.color_lightBlue}`}
    >
      {text}
    </p>
  )
}

export default ContentsTopText
