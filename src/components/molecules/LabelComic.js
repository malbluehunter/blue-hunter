import * as React from "react"
import * as styles from "./LabelComic.module.scss"

const LabelComic = props => {
  const { text } = props

  return (
    <div className={styles.label}>
      <div className={styles.label_item}>{text}</div>
    </div>
  )
}
export default LabelComic
