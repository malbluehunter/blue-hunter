import * as React from "react"
import IconFacebook from "../atoms/IconFacebook"
import IconTwitter from "../atoms/IconTwitter"
import * as styles from "./ShareArea.module.scss"

const ShareArea = () => {
  return (
    <div className={styles.sns_area}>
      <div className={styles.text_area}>
        <p className={styles.text}>— SHARE —</p>
      </div>
      <div className={styles.sns_icon_wrapper}>
        <div className={styles.facebook_wrapper}>
          <a className={styles.link} href="https://www.facebook.com/share.php?u=https://manga.uminohi.jp" target="_blank" rel="noopener">
            <IconFacebook />
          </a>
        </div>
        <div className={styles.twitter_wrapper}>
          <a className={styles.link} href="https://twitter.com/share?url=https://manga.uminohi.jp&text=BLUE HUNTER Official Site&hashtags=bluehunter" target="_blank" rel="noopener">
            <IconTwitter />
          </a>
        </div>
      </div>
    </div>
  )
}
export default ShareArea
