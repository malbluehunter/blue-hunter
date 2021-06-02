import * as React from "react"
import LogoTop from "../atoms/LogoTop"
import Nav from "../organisms/Nav"
import NavSp from "../organisms/NavSp"
import * as styles from "./HeaderTop.module.scss"

const HeaderTop = () => {
  return (
    <header>
      <div className={styles.header__wrapper}>
        <div className={styles.logo__wrapper}>
          <LogoTop />
        </div>
        <div className={styles.nav_area}>
          <NavSp />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default HeaderTop
