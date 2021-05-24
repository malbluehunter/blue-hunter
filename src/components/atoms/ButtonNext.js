import * as React from "react"
import * as styles from "./ButtonNext.module.scss"

const ButtonNext = props => {
  const { hrefNext, isDisabledNext } = props

  return (
    <a href={hrefNext} className={`${styles.btn_wrapper} ${isDisabledNext ? styles.disabled : ""}`}>
      {isDisabledNext ? <img src="/world/btn_next_disabled.png" alt="PREV" /> : <img src="/world/btn_next.png" alt="PREV" />}
    </a>
  )
}
export default ButtonNext
