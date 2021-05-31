import * as React from "react"
import * as styles from "./Label01.module.scss"

const Label01 = props => {
  const { text } = props

  return (
    <div className={styles.label01}>
      <div className={styles.label01_item}>{text}</div>
    </div>
  )
}
export default Label01
