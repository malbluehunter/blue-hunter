import * as React from "react"
import * as styles from "./ArtLeadEn.module.scss"
import { Link } from "gatsby"

const ArtLeadEn = () => {

  return (
    <div className={styles.lead_area}>
      <div className={styles.lead_inner}>
        <h2 className={styles.lead_title}>
          <picture>
            <source srcSet="/art/text_lead_heading_en.svg" media="(min-width: 768px)" width="819" height="56" />
            <img src="/art/text_lead_heading_en_sp.svg" alt="ノミネート作品を公開！結果発表イベントを開催します" loading="lazy" />
          </picture>
        </h2>
        <div className={styles.lead_event}>
          <dl className={styles.lead_event_detail}>
            <div className={styles.lead_event_item}>
              <dt>Event</dt>
              <dd><p className={styles.lead_event_txt}>BLUE HUNTER ART COMPETITION AWARD 2022</p></dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>Event date</dt>
              <dd>
                <p className={styles.lead_event_txt}>December 18, 2022 12am JST</p>
                <p className={styles.lead_event_txt}>December 17, 2022 7am PT</p>
              </dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>Location</dt>
              <dd>
                <p className={styles.lead_event_txt}>WITH HARAJUKU HALL</p>
                <p className={styles.lead_event_txt_sm}>東京都渋谷区神宮前1丁目14-30<a href="https://www.google.co.jp/maps/place/WITH+HARAJUKU+HALL/@35.670355,139.7024034,18.61z/data=!3m1!5s0x60188cbadaff9a03:0x993c37339a5b439e!4m6!3m5!1s0x60188d3ced759743:0xe9cd4e70975bad6b!8m2!3d35.6706188!4d139.7031351!16s%2Fg%2F11fmc3nnn6?hl=en" target="_blank" rel="noopener" className={styles.lead_event_txt_link}>地図で見る</a></p>
              </dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>Guests</dt>
              <dd>
                <ul className={styles.lead_performer_list}>
                  <li>
                    <p className={styles.lead_event_txt}>長江里加<span className={styles.lead_event_txt_sm}>（日下部 真夏役）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>井上麻里奈<span className={styles.lead_event_txt_sm}>（須藤 藍白役）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>上田瞳<span className={styles.lead_event_txt_sm}>（真行寺 沙羅役）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>高橋花林<span className={styles.lead_event_txt_sm}>（漣 燈子役）</span></p>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles.lead_textBlock}>
          <p className={styles.lead_text}>Entries that were nominated by the judges during the preliminary selection process will be announced on December 18 at xxxxxx via a special event. The event will be shared online, and everyone is welcome to join. Look forward to it! </p>
        </div>
        <Link to="#" className={`${styles.lead_btn}`}>Learn more about the event</Link>
      </div>
    </div>
  )
}

export default ArtLeadEn
