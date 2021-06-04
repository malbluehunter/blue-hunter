// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextSmall.module.scss"

const TextSmall = props => {
  const { text } = props
  return <p className={styles.text}>{text}</p>
}

export default TextSmall
