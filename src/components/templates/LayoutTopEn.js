import React, { useState, useEffect } from "react"
import ScrollToTop02 from "../atoms/ScrollToTop02"
import Footer from "./Footer"
import HeaderTop from "./HeaderTopEn"
import HeaderTopSp from "./HeaderTopSpEn"
import * as styles from "./LayoutTop.module.scss"
import TopMainVisual from "./TopMainVisualEn"

const LayoutTop = props => {
  const { pathname, children } = props

  // SP：一定量スクロールでグローバルナビを表示
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const scrollNav = () => {
      if (window.scrollY >= 753) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    scrollNav()
    window.addEventListener("scroll", scrollNav)

    return () => {
      window.removeEventListener("scroll", scrollNav)
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={navbar ? "" : styles.hidden}>
          <HeaderTop pathname={pathname} />
        </div>
        <HeaderTopSp pathname={pathname} />
        <main>
          <TopMainVisual />
          <div className={styles.contents_wrapper}>{children}</div>
          <ScrollToTop02 />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutTop
