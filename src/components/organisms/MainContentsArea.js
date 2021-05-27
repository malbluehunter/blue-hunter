import * as React from "react"
import * as styles from "./MainContentsArea.module.scss"

const MainContentsArea = ({ children }) => {
  return <div className={styles.main_contents_area}>{children}</div>
}
export default MainContentsArea
