import * as React from "react"
import * as styles from "./Label04.module.scss"

const Label04 = props => {
  const { text } = props

  return (
    <div className={styles.label04}>
      <div className={styles.label04_item}>{text}</div>
    </div>
  )
}
export default Label04
