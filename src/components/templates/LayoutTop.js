import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import Footer from "./Footer"
import HeaderTop from "./HeaderTop"
import * as styles from "./LayoutTop.module.scss"
import TopMainVisual from "./TopMainVisual"

const LayoutTop = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <HeaderTop />
        <main>
          <TopMainVisual />
          <div className={styles.contents_wrapper}>
            {children}
          </div>
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutTop
