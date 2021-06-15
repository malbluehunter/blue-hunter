import * as React from "react"
import BnrArt from "../atoms/BnrArtEn"
import LocalNavNews from "../templates/LocalNavNews"
import MainContentsArea from "./MainContentsArea"
import * as styles from "./NewsContentsInner.module.scss"

const NewsContentsInner = ({ children }) => {
  return (
    <div className={styles.contents_inner}>
      <MainContentsArea>
        {children}
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </MainContentsArea>
      <div className={styles.localnav_wrapper}>
        <LocalNavNews />
      </div>
    </div>
  )
}
export default NewsContentsInner
