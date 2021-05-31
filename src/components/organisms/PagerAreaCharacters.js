import * as React from "react"
import PagerCharacters from "../molecules/PagerCharacters"
import PagerCharactersSp from "../molecules/PagerCharactersSp"
import * as styles from "./PagerAreaCharacters.module.scss"

const PagerAreaCharacters = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev } = props

  return (
    <div className={styles.pager_wrapper}>
      <PagerCharacters hrefNext={hrefNext} hrefPrev={hrefPrev} isDisabledNext={isDisabledNext} isDisabledPrev={isDisabledPrev} />
      <PagerCharactersSp hrefNext={hrefNext} hrefPrev={hrefPrev} isDisabledNext={isDisabledNext} isDisabledPrev={isDisabledPrev} />
    </div>
  )
}

export default PagerAreaCharacters
