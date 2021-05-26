import * as React from "react"
import IconFacebook from "../atoms/IconFacebook"
import IconTwitter from "../atoms/IconTwitter"
import * as styles from "./ComicSnsArea.module.scss"

const ComicSnsArea = () => {
  return (
    <div className={styles.sns_area}>
      <div className={styles.text_area}>
        <p className={styles.text}>— SHARE —</p>
      </div>
      <div className={styles.sns_icon_wrapper}>
        <div className={styles.facebook_wrapper}>
          <IconFacebook />
        </div>
        <div className={styles.twitter_wrapper}>
          <IconTwitter />
        </div>
      </div>
    </div>
  )
}
export default ComicSnsArea
