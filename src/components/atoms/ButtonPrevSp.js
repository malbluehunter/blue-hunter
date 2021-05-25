import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"

const ButtonPrevSp = props => {
  const { hrefPrev, isDisabledPrev } = props

  return (
    <a href={hrefPrev} className={`${styles.btn_wrapper} ${isDisabledPrev ? styles.disabled : ""}`}>
      {isDisabledPrev ? <img src="/world/btn_prev__disabled_sp.png" alt="PREV" /> : <img src="/world/btn_prev_sp.png" alt="PREV" />}
    </a>
  )
}
export default ButtonPrevSp
