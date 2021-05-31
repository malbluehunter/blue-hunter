
import * as React from "react"
import * as styles from "./MainContentsMiddle02.module.scss"

const MainContentsMiddle02 = ({ children }) => {
  return (
    <div className={styles.main_contents_area_middle}>
      <div className={styles.main_contents_area_inner}>{children}</div>
    </div>
  )
}
export default MainContentsMiddle02
