import * as React from "react"
import * as styles from "./Bread.module.scss"

const Bread = props => {
  const { page01, page02, page03 } = props
  return (
    <div className={styles.bread}>
      <ol>
        <li>
          <a href="/">{page01}</a>
        </li>
        <li>
          <a href="#">{page02}</a>
        </li>
        <li>
          <a href="#">{page03}</a>
        </li>
      </ol>
    </div>
  )
}
export default Bread
