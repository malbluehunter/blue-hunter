import * as React from "react"
import * as styles from "./ArtLeadEn.module.scss"
import { Link } from "gatsby"

const ArtLeadEn = () => {

  return (
    <div className={styles.lead_area}>
      <div className={styles.lead_inner}>
        <h2 className={styles.lead_title}>
          <picture>
            <source srcSet="/art/text_lead_heading_final_en.svg" media="(min-width: 768px)" width="819" height="56" />
            <img src="/art/text_lead_heading_final_en_sp.svg" alt="Thank you for all your submissions" loading="lazy" />
          </picture>
        </h2>
        {/* <div className={styles.lead_event}>
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
                <p className={styles.lead_event_txt_sm}>1-14-30 Jingumae, Shibuya-ku, Tokyo<a href="https://www.google.co.jp/maps/place/WITH+HARAJUKU+HALL/@35.670355,139.7024034,18.61z/data=!3m1!5s0x60188cbadaff9a03:0x993c37339a5b439e!4m6!3m5!1s0x60188d3ced759743:0xe9cd4e70975bad6b!8m2!3d35.6706188!4d139.7031351!16s%2Fg%2F11fmc3nnn6?hl=en" target="_blank" rel="noopener" className={styles.lead_event_txt_link}>View map</a></p>
              </dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>Guests</dt>
              <dd>
                <ul className={styles.lead_performer_list}>
                  <li>
                    <p className={styles.lead_event_txt}>Rika Nagae<span className={styles.lead_event_txt_sm}>（VA: Manatsu Kusakabe）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>Marina Inoue<span className={styles.lead_event_txt_sm}>（VA: Ashiro Sudo）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>Hitomi Ueda<span className={styles.lead_event_txt_sm}>（VA: Sara Shingyoji）</span></p>
                  </li>
                  <li>
                    <p className={styles.lead_event_txt}>Karin Takahashi<span className={styles.lead_event_txt_sm}>（VA: Toko Sazanami）</span></p>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles.lead_textBlock}>
          <p className={styles.lead_text}>Entries chosen by the judges during the final selection process will be announced at the special event held at WITH HARAJUKU HALL on December 18.</p>
        </div> */}
        {/* 詳細がないのでボタンを非表示にする */}
        {/* <Link to="#" className={`${styles.lead_btn}`}>Learn more about the event</Link> */}
      </div>
    </div>
  )
}

export default ArtLeadEn
