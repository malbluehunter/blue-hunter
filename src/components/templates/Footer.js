import * as React from "react"
import * as styles from "./Footer.module.scss"
import Copyright from "../atoms/Copyright"
import FollowUs from "../molecules/FollowUs"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_bg_wrapper}>
        <img src="/common/bg_footer.png" className={styles.footer_bg} />
        <img src="/common/bg_footer_sp.png" className={styles.footer_bg_sp} />
      </div>
      <div className={styles.footer_area}>
        <div className={styles.footer_inner}>
          <FollowUs />
          <ul className={styles.bnr_list}>
            <li className={styles.bnr_item}>
              <a href="https://uminohi.jp/" target="_blank">
                <img src="/common/bnr_footer_01.png" alt="日本財団 海と日本PROJECT" />
              </a>
            </li>
            <li className={styles.bnr_item}>
              <a href="https://world-eggs.jp/" target="_blank">
                <img src="/common/bnr_footer_02.png" alt="Worldeggs" />
              </a>
            </li>
            <li className={styles.bnr_item}>
              <a href="https://cannajapan.co.jp/" target="_blank">
                <img src="/common/bnr_footer_03.png" alt="カンナジャパン" />
              </a>
            </li>
            <li className={styles.bnr_item}>
              <a href="https://myanimelist.net/" target="_blank">
                <img src="/common/bnr_footer_04.png" alt="MAL" />
              </a>
            </li>
          </ul>
          <Copyright text="Copyright © The Nippon Foundation" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
