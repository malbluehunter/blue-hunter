import * as React from "react"
import ContentsTopText from "../atoms/ContentsTopText"
import * as styles from "./MainContentsTop.module.scss"

const MainContentsTop = props => {
  const { text } = props

  return (
    <div className={styles.main_contents_area_top}>
      <ContentsTopText text={text} />
    </div>
  )
}
export default MainContentsTop
