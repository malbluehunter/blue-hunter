// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextMedium.module.scss"

const TextMedium = props => {
  const { text } = props
  return <p className={styles.text}>{text}</p>
}

export default TextMedium
