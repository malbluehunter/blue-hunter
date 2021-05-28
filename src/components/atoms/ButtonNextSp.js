import * as React from "react"
import * as styles from "./ButtonNext.module.scss"

const ButtonNextSp = props => {
  const { hrefNext, isDisabledNext } = props

  return (
    <a href={hrefNext} className={`${styles.btn_wrapper} ${isDisabledNext ? styles.disabled : ""}`}>
      {isDisabledNext ? <img src="/world/btn_next_disabled_sp.png" alt="NEXT" /> : <img src="/world/btn_next_sp.png" alt="NEXT" />}
    </a>
  )
}
export default ButtonNextSp
