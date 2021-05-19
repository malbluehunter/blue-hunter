import * as React from "react"
import Logo from "../atoms/Logo"
import LogoBlueHunter from "../atoms/LogoBlueHunter"
import Navi from "../organisms/Nav"
import * as styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header__wraper}>
        <div className={styles.logo__wrapper}>
          <Logo />
          <LogoBlueHunter />
        </div>
        <div>
          <Navi />
        </div>
      </div>
    </header>
  )
}

export default Header
