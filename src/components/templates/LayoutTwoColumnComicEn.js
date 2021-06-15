import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import Footer from "./Footer"
import Header from "./HeaderEn"
import * as styles from "./LayoutTwoColumnComic.module.scss"

const LayoutTwoColumnComic = props => {
  const { children, pathname } = props

  return (
    <>
      <div className={styles.container}>
        <Header pathname={pathname} />
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
