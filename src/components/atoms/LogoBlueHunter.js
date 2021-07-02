import * as React from "react"
import * as styles from "./LogoBlueHunter.module.scss"
import { Link } from "gatsby"

const LogoBlueHunter = props => {
  const { href } = props

  return (
    <Link to={href} className={styles.img__wrap}>
      <picture>
        <source type="image/webp" srcset="/common/logo_bluehunter.webp" />
        <img src="/common/logo_bluehunter.png" />
      </picture>
    </Link>
  )
}
export default LogoBlueHunter
