// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextHeading.module.scss"

const TextHeading = props => {
  const { text } = props

  return (
    <div className={styles.heading_wrapper}>
      <h3 className={styles.heading}>{text}</h3>
    </div>
  )
}

export default TextHeading
