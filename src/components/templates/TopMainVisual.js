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
            <picture>
              <source type="image/webp" srcset="/top/logo_bluehunter.webp" />
              <img src="/top/logo_bluehunter.png" alt="BLUE HUNTER" />
            </picture>
          </div>
          <div className={styles.text_wrapper}>
            <img src="/top/top_main_text.png" alt="まだ見たことない海洋生物がこの広い海のどこかに存在しているんだ" />
          </div>
          <div className={styles.news_wrapper}>
            <a className={styles.news_text_wrapper} href="/news/">
              <p className={styles.news_date}>2021.7.9</p>
              <p className={styles.news_text}>賞金総額50万円『BLUE HUNTER アートコンペティション』開催！</p>
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
            <img src="/top/top_hero_sp.webp" alt="" />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default TopMainVisual
