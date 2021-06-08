import * as React from "react"
import BnrArt from "../atoms/BnrArt"
import MainContentsArea from "./MainContentsArea"
import * as styles from "./WorldContentsInner.module.scss"

const WorldContentsInner = ({ children }) => {
  return (
    <MainContentsArea>
      {children}
      <div className={styles.bnr_area}>
        <BnrArt />
      </div>
    </MainContentsArea>
  )
}
export default WorldContentsInner
