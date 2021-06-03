import * as React from "react"
import LogoTop from "../atoms/LogoTop"
import NavSpTop from "../organisms/NavSpTop"
import * as styles from "./HeaderTopSp.module.scss"

const HeaderTopSp = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo_wrapper}>
          <LogoTop />
        </div>
        <div className={styles.nav_area}>
          <NavSpTop />
        </div>
      </div>
    </header>
  )
}

export default HeaderTopSp
