import * as React from "react"
import ScrollToTop from "../atoms/ScrollToTop"
import ArtTop from "../organisms/ArtTop"
import ArtLead from "../organisms/ArtLead"
import ArtBnr from "../organisms/ArtBnr"
import ArtFooter from "./ArtFooter"
// import Header from "./Header"
import * as styles from "./LayoutArt.module.scss"

const LayoutArt = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        {/* <Header /> */}
        <ArtTop />
        <ArtLead />
        <main>
          <div className={styles.contents_wrapper}>{children}</div>
          <ScrollToTop />
        </main>
        <ArtBnr />
        <ArtFooter />
      </div>
    </>
  )
}

export default LayoutArt
