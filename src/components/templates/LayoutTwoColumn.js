import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import Footer from "./Footer"
import Header from "./Header"
import * as styles from "./LayoutTwoColumn.module.scss"

const LayoutTwoColumn = props => {
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

export default LayoutTwoColumn
