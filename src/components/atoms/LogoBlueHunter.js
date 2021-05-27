import * as React from "react"
import * as styles from "./LogoBlueHunter.module.scss"

const LogoBlueHunter = props => {
  const { href } = props

  return (
    <a href={href} className={styles.img__wrap}>
      <img src="/common/logo_bluehunter.png" alt="BLUE HUNTER" />
    </a>
  )
}
export default LogoBlueHunter
