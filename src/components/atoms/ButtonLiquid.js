import * as React from "react"
import * as styles from "./ButtonLiquid.module.scss"

const ButtonLiquid = props => {
  const { href, isDisabled, children } = props

  return (
    <a href={href} className={`${styles.btn_wrapper} ${isDisabled ? styles.disabled : ""}`}>
      {isDisabled ? <img src="/common/btn_disabled.png" alt="" /> : <img src="/common/btn.png" alt="" />}
      <p className={styles.text}>{children}</p>
    </a>
  )
}
export default ButtonLiquid
