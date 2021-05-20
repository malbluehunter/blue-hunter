// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextAnnotation.module.scss"

const TextAnnotation = props => {
  const { text } = props
  return <p className={styles.annotation}>{text}</p>
}

export default TextAnnotation
