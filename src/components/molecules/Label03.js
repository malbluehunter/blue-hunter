import * as React from "react"
import * as styles from "./Label03.module.scss"

const Label03 = props => {
  const { text } = props

  return (
    <div className={styles.label03}>
      <p className={styles.label03_text}>{text}</p>
    </div>
  )
}
export default Label03
