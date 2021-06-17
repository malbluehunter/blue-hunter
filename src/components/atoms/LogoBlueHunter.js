import * as React from "react"
import * as styles from "./LogoBlueHunter.module.scss"

const LogoBlueHunter = props => {
  const { href } = props

  return (
    <a href={href} className={styles.img__wrap}>
      <picture>
        <source type="image/webp" srcset="/common/logo_bluehunter.webp" />
        <img src="/common/logo_bluehunter.png" />
      </picture>
    </a>
  )
}
export default LogoBlueHunter
