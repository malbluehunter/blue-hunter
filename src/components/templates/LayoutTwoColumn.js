import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import Footer from "./Footer"
import Header from "./Header"
import * as styles from "./LayoutTwoColumn.module.scss"

const LayoutTwoColumn = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>
          <div className={styles.contents_wrapper}>{children}</div>
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutTwoColumn
