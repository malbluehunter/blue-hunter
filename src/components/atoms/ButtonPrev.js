import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"

const ButtonPrev = props => {
  const { hrefPrev, isDisabledPrev } = props

  return (
    <a href={hrefPrev} className={`${styles.btn_wrapper} ${isDisabledPrev ? styles.disabled : ""}`}>
      {isDisabledPrev ? <img src="/world/btn_prev_disabled.png" alt="PREV" loading="lazy" /> : <img src="/world/btn_prev.png" alt="PREV" loading="lazy" />}
    </a>
  )
}
export default ButtonPrev
