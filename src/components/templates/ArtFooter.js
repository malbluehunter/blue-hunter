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
                <Link to="/">
                  <img src="/art/icon_twitter.svg" width="72" height="72" />
                </Link>
              </li>
              <li className={styles.footer_snsItem}>
                <Link to="/">
                  <img src="/art/icon_facebook.svg" width="72" height="72" />
                </Link>
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
