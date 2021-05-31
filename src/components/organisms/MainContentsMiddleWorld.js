import * as React from "react"
import * as styles from "./MainContentsMiddleWorld.module.scss"

const MainContentsMiddleWorld = ({ children }) => {
  return (
    <div className={styles.main_contents_area_middle}>
      <div className={styles.main_contents_area_inner}>{children}</div>
    </div>
  )
}
export default MainContentsMiddleWorld
