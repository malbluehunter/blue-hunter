import * as React from "react"
import ButtonNext from "../atoms/ButtonNext"
import ButtonPrev from "../atoms/ButtonPrev"
import PageNumber from "../atoms/PageNumber"
import * as styles from "./Pager.module.scss"

const Pager = props => {
  const { hrefNext, hrefPrev, isDisabledNext, isDisabledPrev, number } = props

  return (
    <div className={styles.pager}>
      <ButtonPrev hrefPrev={hrefPrev} isDisabledPrev={isDisabledPrev} />
      <PageNumber number={number} total="10" />
      <ButtonNext hrefNext={hrefNext} isDisabledNext={isDisabledNext} />
    </div>
  )
}
export default Pager
