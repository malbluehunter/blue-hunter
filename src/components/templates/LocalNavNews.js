import React from "react"
import * as styles from "./LocalNavNews.module.scss"

const LocalNavNews = () => {
  return (
    <div className={styles.localNav}>
      <div className={styles.localNav_top}>
        <img src="/common/local_nav_top_sub.png" />
      </div>
      <div className={styles.localNav_area}>
        <ol className={styles.localNav_list} start="0">
          <li className={`${styles.localNav_item} ${styles.current}`}>
            <a href="">Blue Hunter公式アートコンペ開催</a>
            <p className={styles.date}>2021.6.8</p>
          </li>
          <li className={styles.localNav_item}>
            <a href="">サイト公開しました</a>
            <p className={styles.date}>2021.6.7</p>
          </li>
        </ol>
      </div>
      <div className={styles.localNav_bottom}>
        <img src="/common/local_nav_bottom.png" />
      </div>
    </div>
  )
}

export default LocalNavNews
