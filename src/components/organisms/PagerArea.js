import * as React from "react"
import Pager from "../molecules/Pager"
import PagerSp from "../molecules/PagerSp"
import * as styles from "./PagerArea.module.scss"

const PagerArea = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev, number, TotalNumber, pathname } = props

  return (
    <div className={styles.pager_wrapper}>
      <Pager hrefNext={hrefNext} hrefPrev={hrefPrev} isDisabledNext={isDisabledNext} isDisabledPrev={isDisabledPrev} number={number} TotalNumber={TotalNumber} pathname={pathname} />
      <PagerSp hrefNext={hrefNext} hrefPrev={hrefPrev} isDisabledNext={isDisabledNext} isDisabledPrev={isDisabledPrev} number={number} TotalNumber={TotalNumber} pathname={pathname} />
    </div>
  )
}

export default PagerArea
