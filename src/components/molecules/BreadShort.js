import * as React from "react"
import * as styles from "./Bread.module.scss"

const BreadShort = props => {
  const { page01, page02, href01 } = props

  return (
    <div className={styles.bread}>
      <ol>
        <li>
          <a href={href01}>{page01}</a>
        </li>
        <li>
          <p>{page02}</p>
        </li>
      </ol>
    </div>
  )
}
export default BreadShort
