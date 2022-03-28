import * as React from "react"
import BnrArt from "../atoms/BnrArt"
import BnrArtTop from "../atoms/BnrArtTop"
import * as styles from "./TopMainVisual.module.scss"
import { Link } from "gatsby"

const TopMainVisual = () => {
  return (
    <div className={styles.mainVisual_area}>
      <div className={styles.mainVisual_area_inner}>
        <div className={styles.main_contents_area}>
          <div className={styles.logo_bluehunter_wrapper}>
            <picture>
              <source type="image/webp" srcset="/top/logo_bluehunter.webp" />
              <img src="/top/logo_bluehunter.png" alt="BLUE HUNTER" />
            </picture>
          </div>
          <div className={styles.text_wrapper}>
            <img src="/top/top_main_text.png" alt="まだ見たことない海洋生物がこの広い海のどこかに存在しているんだ" />
          </div>
          <div className={styles.news_wrapper}>
            <Link className={styles.news_text_wrapper} to="/comic/ep13/">
              <p className={styles.news_date}>2022.3.30</p>
              <p className={styles.news_text}>第13話を公開しました</p>
            </Link>
            <Link className={styles.news_btn} to="/comic/ep13/">
              <picture>
                <source srcset="/top/top_newsArea_btn.png" media="(min-width: 768px)" />
                <img src="/top/top_newsArea_btn_sp.png" alt="MORE" />
              </picture>
            </Link>
          </div>
        </div>
        <div className={styles.bnr_wrapper}>
          <div className={styles.view_pc}>
            <BnrArtTop />
          </div>
          <div className={styles.view_sp}>
            <BnrArt />
          </div>
        </div>
        <div className={styles.hero_wrapper}>
          <picture>
            <source srcset="/top/top_hero.png" media="(min-width: 768px)" />
            <img src="/top/top_hero_sp.webp" alt="" />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default TopMainVisual
