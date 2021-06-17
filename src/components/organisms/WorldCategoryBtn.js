import * as React from "react"
import * as styles from "./WorldCategoryBtn.module.scss"

const WorldCategoryBtn = props => {
  const { categoryInfo } = props

  const listItem = [...categoryInfo]

  return (
    <div className={styles.category_wrapper}>
      {listItem.map(item => (
        <div className={styles.category_list}>
          <a href={item.href} className={styles.btn_link}>
            <div className={styles.category_list_inner}>
              <p className={styles.text}>{item.text}</p>
              <picture>
                <source type="image/webp" srcset={`${item.btn.slice(0, -4)}.webp`} />
                <img className={styles.btn} src={item.btn} alt="MORE" loading="lazy" />
              </picture>
            </div>
            <picture>
              <source type="image/webp" srcset={`${item.src.slice(0, -4)}.webp`} />
              <img className={styles.img} src={item.src} alt={item.alt} loading="lazy" />
            </picture>
          </a>
        </div>
      ))}
    </div>
  )
}

export default WorldCategoryBtn
