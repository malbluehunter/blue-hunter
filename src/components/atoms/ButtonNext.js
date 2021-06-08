import * as React from "react"
import * as styles from "./ButtonNext.module.scss"

const ButtonNext = props => {
  const { hrefNext, isDisabledNext } = props

  return (
    <a href={hrefNext} className={`${styles.btn_wrapper} ${isDisabledNext ? styles.disabled : ""}`}>
      {isDisabledNext ? <img src="/world/btn_next_disabled.png" alt="NEXT" loading="lazy" /> : <img src="/world/btn_next.png" alt="NEXT" loading="lazy" />}
    </a>
  )
}
export default ButtonNext
