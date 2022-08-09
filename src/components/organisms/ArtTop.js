import * as React from "react"
import * as styles from "./ArtTop.module.scss"
import { Link } from "gatsby"

const ArtTop = () => {

  return (
    <div className={styles.mv_area}>
      <div className={styles.mv_left}>
        <div className={styles.mv_leftImg}>
          <picture>
            <source srcSet="/art/logo_mv_left.svg" media="(min-width: 768px)" />
            <img src="/art/logo_mv_left_sp.svg" alt="日本財団海と日本PROJECTCHANGE FOR THE BLUE 海の未来を変える挑戦" />
          </picture>
        </div>
        <div className={styles.mv_lang}>
          <p className={styles.mv_langActive}>日本語</p>
          <span>|</span>
          <Link to="/en/art/" className={styles.mv_langInactive}>English</Link>
        </div>
      </div>
      <div className={styles.mv_main}>
        <div className={styles.mv_lotoTop}>
          <img src="/art/logo_mv_main.png" width="417" height="80" alt="BLUEHUNTER 真夏と時のカイリュウ" />
        </div>
        <div className={styles.mv_lotoCenter}>
          <img src="/art/logo_art_compe.svg" width="640" height="348" alt="BLUE HUNTER Art Contest ブルーハンターアートコンペティションvol.2 " />
        </div>
        <div className={styles.mv_announce}>
          <div className={styles.mv_announceTop}>
            <p>最高賞金<span>30</span>万円!</p>
          </div>
          <div className={styles.mv_announceBottom}>
            <dl>
              <dt>応募期間</dt>
              <dd>2022年10月13日(木) 10:00まで</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtTop
