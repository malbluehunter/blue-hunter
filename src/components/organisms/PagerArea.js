import * as React from "react"
import Pager from "../molecules/Pager"
import PagerSp from "../molecules/PagerSp"
import * as styles from "./PagerArea.module.scss"

const PagerArea = () => {
  return (
    <div className={styles.pager_wrapper}>
      <Pager hrefNext="/" hrefPrev="/" disabledNext={false} isDisabledPrev={true} />
      <PagerSp />
    </div>
  )
}

export default PagerArea
