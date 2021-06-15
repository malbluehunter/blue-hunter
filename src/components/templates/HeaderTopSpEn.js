import * as React from "react"
import LogoTop from "../atoms/LogoTop"
import NavSpTop from "../organisms/NavSpTopEn"
import * as styles from "./HeaderTopSp.module.scss"

const HeaderTopSp = props => {
  const { pathname } = props

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo_wrapper}>
          <LogoTop />
        </div>
        <div className={styles.nav_area}>
          <NavSpTop pathname={pathname} />
        </div>
      </div>
    </header>
  )
}

export default HeaderTopSp
