import * as React from "react"
import * as styles from "./ButtonEn.module.scss"

const Button = props => {
  const { href, isDisabled, children } = props

  return (
    <a href={href} className={`${styles.btn_wrapper} ${isDisabled ? styles.disabled : ""}`}>
      {isDisabled ? <img src="/common/btn_disabled.png" alt="" loading="lazy" /> : <img src="/common/btn.png" alt="" loading="lazy" />}
      <p className={styles.text}>{children}</p>
    </a>
  )
}
export default Button
