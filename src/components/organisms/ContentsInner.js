import * as React from "react"
import MainContentsArea02 from "./MainContentsArea02"
import * as styles from "./ContentsInner.module.scss"

const ContentsInner = ({ children }) => {
  return (
    <div className={styles.contents_inner}>
      <MainContentsArea02>
        <div className={styles.main_contents_area_top}></div>
        {children}
        <div className={styles.main_contents_area_bottom}></div>
      </MainContentsArea02>
    </div>
  )
}
export default ContentsInner
