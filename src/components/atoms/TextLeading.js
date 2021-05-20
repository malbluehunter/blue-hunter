// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextLeading.module.scss"

const TextLeading = props => {
  const { text } = props
  return <h4 className={styles.leading}>{text}</h4>
}

export default TextLeading
