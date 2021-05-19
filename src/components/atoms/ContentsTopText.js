// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./ContentsTopText.module.scss"

const ContentsTopText = props => {
  const { text } = props
  return <p className={styles.text}>{text}</p>
}

export default ContentsTopText
