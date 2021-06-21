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
            <a href="#news_02">500,000 JPY of prizes up for grabs in BLUE HUNTER Art Contest!</a>
            <p className={styles.date}>9 July 2021</p>
          </li>
          <li className={styles.localNav_item}>
            <a href="#news_01">Welcome to the BLUE HUNTER homepage</a>
            <p className={styles.date}>9 July 2021</p>
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
