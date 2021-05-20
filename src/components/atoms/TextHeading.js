// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextHeading.module.scss"

const TextHeading = props => {
  const { text } = props
  return <h3 className={styles.heading}>{text}</h3>
}

export default TextHeading
