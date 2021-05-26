import * as React from "react"
import ButtonNext from "../atoms/ButtonNext"
import ButtonPrev from "../atoms/ButtonPrev"
import PageNumber from "../atoms/PageNumber"
import * as styles from "./PagerComic.module.scss"

const PagerComic = props => {
  const { hrefNext, hrefPrev, disabledNext, isDisabledPrev } = props

  return (
    <div className={styles.pager}>
      <ButtonPrev hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
      <PageNumber number="1" total="10" />
      <ButtonNext hrefNext={hrefNext} disabledNext={disabledNext} />
    </div>
  )
}
export default PagerComic
