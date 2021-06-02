import * as React from "react"
import BnrArt from "../atoms/BnrArt"
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
            <a className={styles.news_text_wrapper} href="#">
              <p className={styles.news_date}>2021.6.8</p>
              <p className={styles.news_text}>Blue Hunter公式アートコンペ開催。Hunter公式アートコンペ開催。</p>
            </a>
            <a className={styles.news_btn} href="/news/">
              <picture>
                <source srcset="/top/top_newsArea_btn.png" media="(min-width: 768px)" />
                <img src="/top/top_newsArea_btn_sp.png" alt="MORE" />
              </picture>
            </a>
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
            <img src="/top/top_hero_sp.png" alt="" />
          </picture>
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
