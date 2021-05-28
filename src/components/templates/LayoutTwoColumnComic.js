import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import Footer from "./Footer"
import Header from "./Header"
import * as styles from "./LayoutTwoColumnComic.module.scss"

const LayoutTwoColumnComic = ({ children }) => {
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

export default LayoutTwoColumnComic
