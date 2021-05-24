import * as React from "react"
import * as styles from "./ButtonNext.module.scss"

const ButtonNextSp = props => {
  const { href } = props

  return (
    <a href={href} className={styles.btn_wrapper}>
      <img src="/world/btn_next_sp.png" alt="NEXT" />
    </a>
  )
}
export default ButtonNextSp
