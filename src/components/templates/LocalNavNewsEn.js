import React from "react"
import * as styles from "./LocalNavNews.module.scss"
import { Link } from "gatsby"

const LocalNavNews = () => {
  return (
    <div className={styles.localNav}>
      <div className={styles.localNav_top}>
        <img src="/common/local_nav_top_sub.png" />
      </div>
      <div className={styles.localNav_area}>
        <ol className={styles.localNav_list} start="0">
          <li className={`${styles.localNav_item} ${styles.current}`}>
            <Link to="#news_07">Applications to the art contest are now closed</Link>
            <p className={styles.date}>September 9, 2021</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_06">Chapter 7 of the BLUE HUNTER manga now available!</Link>
            <p className={styles.date}>August 5, 2021</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_05">Chapter 6 of the BLUE HUNTER manga now available!</Link>
            <p className={styles.date}>July 29, 2021</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_04">Chapter 5 of the BLUE HUNTER manga now available!</Link>
            <p className={styles.date}>July 20, 2021</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_03">Chapter 4 of the BLUE HUNTER manga now available!</Link>
            <p className={styles.date}>July 16, 2021</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_02">500,000 JPY of prizes up for grabs in BLUE HUNTER Art Contest!</Link>
            <p className={styles.date}>July 9, 2021</p>
          </li>
          <li className={styles.localNav_item}>
            <Link to="#news_01">Welcome to the BLUE HUNTER homepage</Link>
            <p className={styles.date}>July 9, 2021</p>
          </li>
        </ol>
      </div>
      <div className={styles.localNav_bottom}>
        <img src="/common/local_nav_bottom.png" alt="" />
      </div>
    </div>
  )
}

export default LocalNavNews
