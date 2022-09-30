import * as React from "react"
import * as styles from "./ArtTop.module.scss"
import { Link } from "gatsby"

const ArtTop = () => {

  return (
    <div className={styles.mv_area}>
      <div className={styles.mv_left}>
        <div className={styles.mv_leftImg}>
          <a href="https://uminohi.jp/" target="_blank">
            <picture>
              <source srcSet="/art/logo_mv_left.svg" media="(min-width: 768px)" />
              <img src="/art/logo_mv_left_sp.svg" alt="日本財団海と日本PROJECTCHANGE FOR THE BLUE 海の未来を変える挑戦" />
            </picture>
          </a>
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
        <div className={styles.mv_balloon}>
          <picture>
            <source srcSet="/art/img_end_balloon.svg" media="(min-width: 768px)" />
            <img src="/art/img_end_balloon_sp.svg" width="2390" height="153" alt="応募締め切りました。たくさんのご応募ありがとうございました" />
          </picture>
        </div>
        <div className={styles.mv_lotoCenter}>
          <img src="/art/logo_art_compe.svg" width="640" height="348" alt="BLUE HUNTER Art Contest ブルーハンターアートコンペティションvol.2 " />
        </div>
        <div className={styles.mv_announce}>
          <div className={styles.mv_announceTop}>
            <p>総額<span>65</span>万円!</p>
          </div>
          <div className={styles.mv_announceBottom}>
            <p>ノミネート作品発表は2022年11月24日です</p>
          </div>
        </div>
        <p className={styles.mv_notice}>2022年度作品の募集は締め切りました。<br className={styles.showSp} />現在一次審査中です。</p>
      </div>
    </div>
  )
}

export default ArtTop
