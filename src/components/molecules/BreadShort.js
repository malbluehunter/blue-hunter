import * as React from "react"
import * as styles from "./Bread.module.scss"
import { Link } from "gatsby"

const BreadShort = props => {
  const { page01, page02, href01 } = props

  return (
    <div className={styles.bread}>
      <ol>
        <li>
          <Link to={href01}>{page01}</Link>
        </li>
        <li>
          <p>{page02}</p>
        </li>
      </ol>
    </div>
  )
}
export default BreadShort
