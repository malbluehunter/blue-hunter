import * as React from "react"
import Button from "../atoms/Button"
import ButtonPrev from "../atoms/ButtonPrev"
import * as styles from "./PagerComic.module.scss"

const PagerComic = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev } = props

  return (
    <div className={styles.pager}>
      <ButtonPrev hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
      <Button hrefNext={hrefNext} isDisabledNext={isDisabledNext} />
    </div>
  )
}
export default PagerComic
