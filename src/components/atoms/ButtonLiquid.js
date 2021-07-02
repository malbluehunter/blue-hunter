import * as React from "react"
import * as styles from "./ButtonLiquid.module.scss"
import { Link } from "gatsby"

const ButtonLiquid = props => {
  const { href, children } = props

  return (
    <Link to={href} className={styles.btn_wrapper}>
      <img src="/common/btn.png" alt="" loading="lazy" />
      {children}
    </Link>
  )
}
export default ButtonLiquid
