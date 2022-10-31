import * as React from "react"
import * as styles from "./ArtLeadEn.module.scss"
import { Link } from "gatsby"

const ArtLeadEn = () => {

  return (
    <div className={styles.lead_area}>
      <div className={styles.lead_inner}>
        <h2 className={styles.lead_title}>
          <picture>
            <source srcSet="/art/lead_heading.svg" media="(min-width: 768px)" width="819" height="56" />
            <img src="/art/lead_heading_sp.svg" alt="What is the BLUE HUNTER project?" loading="lazy"/>
          </picture>
        </h2>
        <div className={styles.lead_textBlock}>
          <p className={styles.lead_text}>“Imagining and forging a better future for the ocean, together”</p>
          <p className={styles.lead_text}>With over 1 million fans worldwide, BLUE HUNTER is a webtoon focused on “the future of the ocean” that has been published in multiple languages and media formats.</p>
          <p className={styles.lead_text}>Through this contest, we invite fans who resonate with the world of BLUE HUNTER to submit their original ideas and visions. Innovations in science and technology will be led by your creations.  </p>
          <p className={styles.lead_text}>The panel of judges will include real marine experts, who will judge submissions for their originality and feasibility, as well as the actual impact they might have on the ocean if made a reality. They will also hold a talk session during the awards ceremony.</p>
          <p className={styles.lead_text}>We aim to raise public interest in the future of our oceans and marine life by expanding the world of BLUE HUNTER through artistic thought and vision. </p>
        </div>
        <p className={styles.lead_attention}>*The “Project to raise awareness of the ocean’s future by marine manga” is being led by the General Incorporated Association for the Creation of Manga / Anime / Games as part of the “Umi to Nippon” project by the Nippon Foundation.</p>
        <Link to="/en/manga-project/" className={`${styles.lead_btn} ${styles.lead_btnPc}`}>What is the BLUE HUNTER project?</Link>
      </div>
    </div>
  )
}

export default ArtLeadEn
