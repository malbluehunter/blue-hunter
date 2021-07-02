import * as React from "react"
import * as styles from "./WorldCategoryBtn.module.scss"
import { Link } from "gatsby"

const WorldCategoryBtn = props => {
  const { categoryInfo } = props

  const listItem = [...categoryInfo]

  return (
    <div className={styles.category_wrapper}>
      {listItem.map(item => (
        <div className={styles.category_list}>
          <Link to={item.href} className={styles.btn_link}>
            <div className={styles.category_list_inner}>
              <p className={styles.text}>{item.text}</p>
              <picture>
                <source type="image/webp" srcset={`${item.btn.slice(0, -4)}.webp`} />
                <img className={styles.btn} src={item.btn} alt="MORE" />
              </picture>
            </div>
            <picture>
              <source type="image/webp" srcset={`${item.src.slice(0, -4)}.webp`} />
              <img className={styles.img} src={item.src} alt={item.alt} />
            </picture>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default WorldCategoryBtn
