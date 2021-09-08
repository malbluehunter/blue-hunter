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
            <Link to="#news_07">作品の募集を締め切りました</Link>
            <p className={styles.date}>2021.9.10</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_06">第7話を公開しました</Link>
            <p className={styles.date}>2021.8.6</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_05">第6話を公開しました</Link>
            <p className={styles.date}>2021.7.30</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_04">第5話を公開しました</Link>
            <p className={styles.date}>2021.7.21</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_03">第4話を公開しました</Link>
            <p className={styles.date}>2021.7.16</p>
          </li>
          <li className={`${styles.localNav_item}`}>
            <Link to="#news_02">賞金総額50万円『BLUE HUNTER アートコンペティション』開催！</Link>
            <p className={styles.date}>2021.7.9</p>
          </li>
          <li className={styles.localNav_item}>
            <Link to="#news_01">サイト公開しました</Link>
            <p className={styles.date}>2021.7.9</p>
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
