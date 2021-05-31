import * as React from "react"
import * as styles from "./Label02.module.scss"

const Label02 = props => {
  const { text } = props

  return (
    <div className={styles.label02}>
      <div className={styles.label02_item}>{text}</div>
    </div>
  )
}
export default Label02
