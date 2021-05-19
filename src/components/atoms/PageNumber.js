// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import * as React from "react"
import * as styles from "./PageNumber.module.scss"

const PageNumber = props => {
  const { number, total } = props
  return (
    <p className={styles.text}>
      <span className={styles.text_highlight}>{number}</span>/{total}
    </p>
  )
}

export default PageNumber
