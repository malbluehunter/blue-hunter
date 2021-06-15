import * as React from "react"
import * as styles from "./ButtonLiquid.module.scss"

const ButtonLiquid = props => {
  const { href, children } = props

  return (
    <a href={href} className={styles.btn_wrapper}>
      <img src="/common/btn.png" alt="" loading="lazy" />
      {children}
    </a>
  )
}
export default ButtonLiquid
