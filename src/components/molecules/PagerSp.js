import * as React from "react"
import ButtonNextSp from "../atoms/ButtonNextSp"
import ButtonPrevSp from "../atoms/ButtonPrevSp"
import PageNumber from "../atoms/PageNumber"
import * as styles from "./PagerSp.module.scss"

const PagerSp = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev, number, TotalNumber } = props

  return (
    <div className={styles.pager}>
      <div className={styles.pager_inner}>
        <PageNumber number={number} total={TotalNumber} />
        <div className={styles.btn_area}>
          <ButtonPrevSp hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
          <ButtonNextSp hrefNext={hrefNext} isDisabledNext={isDisabledNext} />
        </div>
      </div>
    </div>
  )
}
export default PagerSp
