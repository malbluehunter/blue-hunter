import * as React from "react"
import * as styles from "./PageTitle.module.scss"

const PageTitle = props => {
  const { src, alt } = props

  return (
    <div className={styles.img__wrap}>
      <img src={src} alt={alt} />
    </div>
  )
}
export default PageTitle
