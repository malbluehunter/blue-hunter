import * as React from "react"
import * as styles from "./ArtLead.module.scss"
import { Link } from "gatsby"

const ArtLead = () => {

  return (
    <div className={styles.lead_area}>
      <div className={styles.lead_inner}>
        <h2 className={styles.lead_title}>
          <picture>
            <source srcSet="/art/text_lead_heading.svg" media="(min-width: 768px)" width="819" height="56" />
            <img src="/art/text_lead_heading_sp.svg" alt="ノミネート作品を公開！結果発表イベントを開催します" loading="lazy" />
          </picture>
        </h2>
        <div className={styles.lead_event}>
          <dl className={styles.lead_event_detail}>
            <div className={styles.lead_event_item}>
              <dt>イベント名</dt>
              <dd><p className={styles.lead_event_txt}>BLUE HUNTER ART COMPETITION AWARD 2022</p></dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>開催日時</dt>
              <dd>
                <p className={styles.lead_event_txt}>2022年12月18日(日)</p>
                <p className={styles.lead_event_txt_sm}>14時30分入場　15時開始予定</p>
              </dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>会場</dt>
              <dd>
                <p className={styles.lead_event_txt}>WITH HARAJUKU HALL</p>
                <p className={styles.lead_event_txt_sm}>東京都渋谷区神宮前1丁目14-30<a href="" className={styles.lead_event_txt_link}>地図で見る</a></p>
              </dd>
            </div>
            <div className={styles.lead_event_item}>
              <dt>出演者</dt>
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
          <p className={styles.lead_text}>12月18日にWITH HARAJUKU HALLで、結果発表イベントを行います。<br />イベントへの参加は誰でもできます。<br />イベントの模様はオンラインでも公開されます。楽しみにお待ちください。</p>
        </div>
        <Link to="/manga-project/" className={styles.lead_btn}>イベントについて詳細はこちら</Link>
      </div>
    </div>
  )
}

export default ArtLead
