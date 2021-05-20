import * as React from "react"
import ButtonNextSp from "../atoms/ButtonNextSp"
import ButtonPrevSp from "../atoms/ButtonPrevSp"
import PageNumber from "../atoms/PageNumber"
import * as styles from "./PagerSp.module.scss"

const PagerSp = () => {
  return (
    <div className={styles.pager}>
      <div className={styles.pager_inner}>
        <PageNumber number="1" total="10" />
        <div className={styles.btn_area}>
          <ButtonPrevSp href="#" />
          <ButtonNextSp href="#" />
        </div>
      </div>
    </div>
  )
}
export default PagerSp
