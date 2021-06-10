import * as React from "react"
import LineImg from "../atoms/LineImg"
import LineImgSp from "../atoms/LineImgSp"
import * as styles from "./ContentsLine.module.scss"

const ContentsLine = props => {
  const { pathname } = props

  return (
    <div className={styles.line}>
      <LineImg pathname={pathname} />
      <LineImgSp pathname={pathname} />
    </div>
  )
}
export default ContentsLine
