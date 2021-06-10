// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./PageNumber.module.scss"

const PageNumber = props => {
  const { number, total, pathname } = props
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
    <p className={styles.text}>
      <span
        className={`${styles.text_highlight}
    ${color == "purple" ? styles.color_purple : color == "green" ? styles.color_green : color == "yellow" ? styles.color_yellow : color == "blue" ? styles.color_blue : styles.color_lightBlue}`}
      >
        {number}
      </span>
      /{total}
    </p>
  )
}

export default PageNumber
