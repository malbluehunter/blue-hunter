import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import ArtTopEn from "../organisms/ArtTopEn"
import ArtLeadEn from "../organisms/ArtLeadEn"
import ArtBnrEn from "../organisms/ArtBnrEn"
import ArtFooterEn from "./ArtFooterEn"
// import Header from "./Header"
import * as styles from "./LayoutArtEn.module.scss"

const LayoutArtEn = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        {/* <Header /> */}
        <ArtTopEn />
        <ArtLeadEn />
        <main>
          <div className={styles.contents_wrapper}>{children}</div>
          <ScrollToTop />
        </main>
        <ArtBnrEn />
        <ArtFooterEn />
      </div>
    </>
  )
}

export default LayoutArtEn
