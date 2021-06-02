import * as React from "react"
import BnrArtTop from "../atoms/BnrArtTop"
import * as styles from "./TopMainVisual.module.scss"

const TopMainVisual = () => {
  return (
    <div className={styles.mainVisual_area}>
      <div className={styles.mainVisual_area_inner}>
        <div className={styles.main_contents_area}>
          <div className={styles.logo_bluehunter_wrapper}>
            <img src="/top/logo_bluehunter.png" alt="BLUE HUNTER" />
          </div>
          <div className={styles.text_wrapper}>
            <img src="/top/top_main_text.png" alt="まだ見たことない海洋生物がこの広い海のどこかに存在しているんだ" />
          </div>
          <div className={styles.news_wrapper}>
            <a className={styles.news_text} href="#">
              <span>2021.6.8</span>Blue Hunter公式アートコンペ開催
            </a>
            <a className={styles.news_btn} href="/news/">
              <img src="/top/top_newsArea_btn.png" alt="MORE" />
            </a>
          </div>
        </div>
        <div className={styles.bnr_wrapper}>
          <BnrArtTop />
        </div>
        <div className={styles.hero_wrapper}>
          <img src="/top/top_hero.png" alt="" />
        </div>
        <div className={styles.scroll_wrapper}>
          <p className={styles.scroll_text}>SCROLL</p>
          <img src="/top/img_scroll.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TopMainVisual
