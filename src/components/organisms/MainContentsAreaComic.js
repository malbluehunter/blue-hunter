import * as React from "react"
import * as styles from "./MainContentsAreaComic.module.scss"

const MainContentsAreaComic = ({ children }) => {
  return <div className={styles.main_contents_area}>{children}</div>
}
export default MainContentsAreaComic
