import * as React from "react"
import LineImg from "../atoms/LineImg"
import LineImgSp from "../atoms/LineImgSp"
import * as styles from "./ContentsLine.module.scss"

const ContentsLine = () => {
  return (
    <div className={styles.line}>
      <LineImg />
      <LineImgSp />
    </div>
  )
}
export default ContentsLine
