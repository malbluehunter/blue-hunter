import * as React from "react"
import Logo from "../atoms/Logo"
import LogoBlueHunter from "../atoms/LogoBlueHunter"
import Nav from "../organisms/Nav"
import NavSp from "../organisms/NavSp"
import * as styles from "./Header.module.scss"

const Header = props => {
  const { pathname } = props

  return (
    <header>
      <div className={styles.header__wrapper}>
        <div className={styles.logo__wrapper}>
          <Logo />
          <LogoBlueHunter href="/" />
        </div>
        <div className={styles.nav_area}>
          <NavSp pathname={pathname} />
          <Nav pathname={pathname} />
        </div>
      </div>
    </header>
  )
}

export default Header
