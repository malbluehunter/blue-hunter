import * as React from "react"
import ButtonNext from "../atoms/ButtonNext"
import ButtonPrev from "../atoms/ButtonPrev"
import PageNumber from "../atoms/PageNumber"
import * as styles from "./Pager.module.scss"

const Pager = () => {
  return (
    <div className={styles.pager}>
      <ButtonPrev href="#" />
      <PageNumber number="1" total="10" />
      <ButtonNext href="#" />
    </div>
  )
}
export default Pager
