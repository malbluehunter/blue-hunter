import * as React from "react"
import * as styles from "./PageTitle.module.scss"

const PageTitle = props => {
  const { src } = props

  return (
    <div className={styles.img__wrap}>
      <img src={src} alt="The World of Blue Hunter" />
    </div>
  )
}
export default PageTitle
