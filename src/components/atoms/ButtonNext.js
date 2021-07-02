import * as React from "react"
import * as styles from "./ButtonNext.module.scss"
import { Link } from "gatsby"

const ButtonNext = props => {
  const { hrefNext, isDisabledNext } = props

  return (
    <Link to={hrefNext} className={`${styles.btn_wrapper} ${isDisabledNext ? styles.disabled : ""}`}>
      {isDisabledNext ? <img src="/world/btn_next_disabled.png" alt="NEXT" loading="lazy" /> : <img src="/world/btn_next.png" alt="NEXT" loading="lazy" />}
    </Link>
  )
}
export default ButtonNext
