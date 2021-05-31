import * as React from "react"
import ButtonNextSp from "../atoms/ButtonNextSp"
import ButtonPrevSp from "../atoms/ButtonPrevSp"
import * as styles from "./PagerCharactersSp.module.scss"

const PagerCharactersSp = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev } = props

  return (
    <div className={styles.pager}>
      <div className={styles.pager_inner}>
        <div className={styles.btn_area}>
          <ButtonPrevSp hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
          <ButtonNextSp hrefNext={hrefNext} isDisabledNext={isDisabledNext} />
        </div>
      </div>
    </div>
  )
}
export default PagerCharactersSp
