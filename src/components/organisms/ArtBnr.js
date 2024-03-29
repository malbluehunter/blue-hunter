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
            <Link to="/manga-project/">
              <picture>
                <source srcSet="/art/bnr_about.png" media="(min-width: 768px)" />
                <img src="/art/bnr_about_sp.jpg" width="316" height="180" alt="BLUE HUNTERプロジェクトとは? What is the BLUE HUNTER project?"/>
              </picture>
            </Link>
          </div>
        </div>
        <div className={styles.bnr_block}>
          <div className={`${styles.bnr_titleWrap} ${styles.bnr_titleWrapVer2}`}>
            <h3 className={styles.bnr_title}>連載マンガ</h3>
          </div>
          <ul className={styles.bnr_list}>
            <li className={styles.bnr_item}>
              <Link to="/">
                <img src="/art/bnr1.jpg" width="440" height="240" alt="BLUE HUNTER 今すぐ読む" />
              </Link>
            </li>
            <li className={`${styles.bnr_item} ${styles.bnr_itemNoLink}`}>
              <a href="https://bluehunter.jp/" target="_blank">
                <span className={styles.bnr_pop}>NEW</span>
                <img src="/art/bnr2.jpg" width="440" height="240" alt="coming soon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ArtBnr
