import * as React from "react"
import * as styles from "./ButtonPrev.module.scss"

const ButtonPrevSp = props => {
  const { href } = props

  return (
    <a href={href} className={styles.btn_wrapper}>
      <img src="/world/btn_prev_sp.png" alt="PREV" />
    </a>
  )
}
export default ButtonPrevSp
