import * as React from "react"
import * as styles from "./ArtBnr.module.scss"
import { Link } from "gatsby"

const ArtBnr = () => {

  return (
    <div className={styles.bnr_area}>
      <div className={styles.bnr_inner}>
        <div className={styles.bnr_block}>
          <div className={styles.bnr_titleWrap}>
            <h3 className={styles.bnr_title}>BLUE HUNTERの世界</h3>
          </div>
          <div className={styles.bnr_top}>
            <Link to="/">
              <h4 className={styles.bnr_topTitle}>BLUE HUNTERプロジェクトとは？
                <span><img src="/art/text_bnr_top.svg" width="235" height="16" /></span>
              </h4>
            </Link>
          </div>
        </div>
        <div className={styles.bnr_block}>
          <div className={styles.bnr_titleWrap}>
            <h3 className={styles.bnr_title}>連載マンガ</h3>
          </div>
          <ul className={styles.bnr_list}>
            <li className={styles.bnr_item}>
              <Link to="/">
                <img src="/art/bnr1.jpg" width="440" height="240" />
              </Link>
            </li>
            <li className={styles.bnr_item}>
              <Link to="/">
                <span className={styles.bnr_pop}>NEW</span>
                <img src="/art/bnr2.jpg" width="440" height="240" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ArtBnr
