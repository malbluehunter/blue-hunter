import * as React from "react"
import * as styles from "./WorldCategoryBtn.module.scss"

const WorldCategoryBtn = props => {
  const { categoryInfo } = props

  const listItem = [...categoryInfo]

  return (
    <div className={styles.category_wrapper}>
      {listItem.map(item => (
        <div className={styles.category_list}>
          <div className={styles.category_list_inner}>
            <p className={styles.text}>{item.text}</p>
            <a href="" className={styles.btn_link}>
              <img className={styles.btn} src={item.btn} alt="MORE" />
            </a>
          </div>
          <img className={styles.img} src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}

export default WorldCategoryBtn
