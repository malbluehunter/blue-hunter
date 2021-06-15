import * as React from "react"
import BnrArtEn from "../atoms/BnrArtEn"
import MainContentsArea from "./MainContentsArea"
import * as styles from "./WorldContentsInner.module.scss"

const WorldContentsInner = ({ children }) => {
  return (
    <MainContentsArea>
      {children}
      <div className={styles.bnr_area}>
        <BnrArtEn />
      </div>
    </MainContentsArea>
  )
}
export default WorldContentsInner
