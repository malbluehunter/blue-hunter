import * as React from "react"
import * as styles from "./Bread.module.scss"
import { Link } from "gatsby"

const Bread = props => {
  const { page01, page02, page03, href01, href02 } = props

  return (
    <div className={styles.bread}>
      <ol>
        <li>
          <Link to={href01}>{page01}</Link>
        </li>
        <li>
          <Link to={href02}>{page02}</Link>
        </li>
        <li>
          <p>{page03}</p>
        </li>
      </ol>
    </div>
  )
}
export default Bread
