import * as React from "react"
import * as styles from "./ArtFooter.module.scss"
import { Link } from "gatsby"

const ArtFooter = () => {
  return (
    <footer>
      <div className={styles.footer_area}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_sns}>
            <h2 className={styles.footer_snsTitle}>Share</h2>
            <ul className={styles.footer_snsList}>
              <li className={styles.footer_snsItem}>
                <a className={styles.link} href="https://twitter.com/share?url=https://bha.myanimelist.net/&text=BLUEHUNTER_Art_Contest&hashtags=bluehunter" target="_blank" rel="noopener">
                  <img src="/art/icon_twitter.svg" width="72" height="72" alt="Twitter" />
                </a>
              </li>
              <li className={styles.footer_snsItem}>
                <a className={styles.link} href="https://www.facebook.com/share.php?u=https://bha.myanimelist.net/" target="_blank" rel="noopener">
                  <img src="/art/icon_facebook.svg" width="72" height="72" alt="Facebook"/>
                </a>
              </li>
            </ul>
          </div>
          <p className={styles.footer_copyright}>©2021 MyAnimeList Co.,Ltd., All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default ArtFooter
