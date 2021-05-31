import * as React from "react"
import ButtonNext from "../atoms/ButtonNext"
import ButtonPrev from "../atoms/ButtonPrev"
import * as styles from "./PagerCharacters.module.scss"

const PagerCharacters = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev } = props

  return (
    <div className={styles.pager}>
      <ButtonPrev hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
      <ButtonNext hrefNext={hrefNext} isDisabledNext={isDisabledNext} />
    </div>
  )
}
export default PagerCharacters
