import * as React from "react"
import BnrArt from "../atoms/BnrArt"
import LocalNav from "../templates/LocalNav"
import MainContentsArea from "./MainContentsArea"
import PagerArea from "./PagerArea"
import * as styles from "./WorldContentsInner.module.scss"

const WorldContentsInner = ({ children }) => {
  return (
    <div className={styles.contents_inner}>
      <MainContentsArea>
        {children}
        <PagerArea />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </MainContentsArea>
      <LocalNav />
    </div>
  )
}
export default WorldContentsInner
