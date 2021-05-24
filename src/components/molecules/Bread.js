import * as React from "react"
import * as styles from "./Bread.module.scss"

const Bread = props => {
  const { page01, page02, page03, href01, href02 } = props

  return (
    <div className={styles.bread}>
      <ol>
        <li>
          <a href={href01}>{page01}</a>
        </li>
        <li>
          <a href={href02}>{page02}</a>
        </li>
        <li>
          <p>{page03}</p>
        </li>
      </ol>
    </div>
  )
}
export default Bread
