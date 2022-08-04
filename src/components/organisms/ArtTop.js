import * as React from "react"
import * as styles from "./ArtTop.module.scss"
import { Link } from "gatsby"

const ArtTop = () => {

  return (
    <div className={styles.mv_area}>
      <div className={styles.mv_left}>
        <div>
          <img src="/art/logo_mv_left.svg" width="200" height="342" />
        </div>
      </div>
      <div className={styles.mv_main}>
        <div className={styles.mv_lotoTop}>
          <img src="/art/logo_mv_main.png" width="417" height="80" />
        </div>
        <div className={styles.mv_lotoCenter}>
          <img src="/art/logo_art_compe.svg" width="640" height="348" />
        </div>
        <div className={styles.mv_announce}>
          <div className={styles.mv_announceTop}>
            <p>最高賞金<span>30</span>万円!</p>
          </div>
          <div className={styles.mv_announceBottom}>
            <dl>
              <dt>応募期間</dt>
              <dd>2022年10月13日(木) 00:00まで</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtTop
