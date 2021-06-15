import * as React from "react"
import LogoTop from "../atoms/LogoTop"
import Nav from "../organisms/NavEn"
import NavSp from "../organisms/NavSpEn"
import * as styles from "./HeaderTop.module.scss"

const HeaderTop = props => {
  const { pathname } = props

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logo__wrapper}>
          <LogoTop />
        </div>
        <div className={styles.nav_area}>
          <NavSp pathname={pathname} />
          <Nav pathname={pathname} />
        </div>
      </div>
    </header>
  )
}

export default HeaderTop
