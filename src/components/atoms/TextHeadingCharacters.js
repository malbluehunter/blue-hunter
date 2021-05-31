// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./TextHeadingCharacters.module.scss"

const TextHeadingCharacters = props => {
  const { text } = props

  return (
    <div className={styles.heading_wrapper}>
      <h3 className={styles.heading}>{text}</h3>
    </div>
  )
}

export default TextHeadingCharacters
