import * as React from "react"
import * as styles from "./ArtLead.module.scss"
import { Link } from "gatsby"

const ArtLead = () => {

  return (
    <div className={styles.lead_area}>
      <div className={styles.lead_inner}>
        <h2 className={styles.lead_title}>
          <picture>
            <source srcSet="/art/lead_heading.svg" media="(min-width: 768px)" width="819" height="56" />
            <img src="/art/lead_heading_sp.svg" alt="What is the BLUE HUNTER project?" loading="lazy" />
          </picture>
        </h2>
        <div className={styles.lead_textBlock}>
          <p className={styles.lead_text}>「みんなで海洋の未来を空想し、より良い未来を創る」</p>
          <p className={styles.lead_text}>全世界で70万人超が熱狂するWebtoon(縦読みマンガ)作品『BLUE HUNTER』を中心に<br className={styles.pc_only}/>
          ”海洋の未来”をテーマにした物語・世界観を多言語、多メディアで展開。</p>
          <p className={styles.lead_text}>世界観に共鳴する世界中のBLUE HUNTERファンから、<br className={styles.pc_only} />
          アートコンペティションを通じて、現実の科学技術を牽引するような独創的な発想(空想)を募集。<br />
          海洋の専門家を中心とした審査チームが「発想の何が独創的なのか？」<br className={styles.pc_only} />
          「実現可能性と実現した際の海洋未来へのインパクト」を真剣に検討し、<br className={styles.pc_only} />
          トークセッションと共にアワード形式のイベントを行い、全世界へ発信。</p>
          <p className={styles.lead_text}>発想(空想)の力で『BLUE HUNTER』の世界を拡張し人々の関心を高め、<br className={styles.pc_only} />
          発想(空想)を具現化していく。より良い海洋未来を創るプロジェクトです。</p>
        </div>
        <p className={styles.lead_attention}>※「海洋マンガによる海の未来普及プロジェクト」を推進する一般社団法人マンガ・アニメ・ゲーム教育創造機構は、<br className={styles.pc_only} />日本財団「海と日本プロジェクト」の一環として、本活動を行っております。</p>
        <Link to="#about" className={styles.lead_btn}>BLUE HUNTERプロジェクトとは？</Link>
        <div className={styles.lead_btnComingSoon}>coming soon</div>
      </div>
    </div>
  )
}

export default ArtLead
