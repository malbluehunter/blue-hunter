import * as React from "react"
import * as styles from "./Footer.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Copyright from "../atoms/Copyright"
import FollowUs from "../molecules/FollowUs"

const Footer = () => {
  return (
    <footer>
      <div>
        <StaticImage
          src="../../assets/images/common/bg_footer.png"
          layout="fullWidth"
        />
      </div>
      <div className={styles.footer_area}>
        <div className={styles.footer_inner}>
          <FollowUs />
          <ul className={styles.bnr_list}>
            <li className={styles.bnr_item}>
              <StaticImage
                src="../../assets/images/common/bnr_footer_01.png"
                alt="日本財団 海と日本PROJECT"
                layout="fullWidth"
              />
            </li>
            <li className={styles.bnr_item}>
              <StaticImage
                src="../../assets/images/common/bnr_footer_02.png"
                alt="日本財団 海と日本PROJECT"
                layout="fullWidth"
              />
            </li>
            <li className={styles.bnr_item}>
              <StaticImage
                src="../../assets/images/common/bnr_footer_03.png"
                alt="日本財団 海と日本PROJECT"
                layout="fullWidth"
              />
            </li>
            <li className={styles.bnr_item}>
              <StaticImage
                src="../../assets/images/common/bnr_footer_04.png"
                alt="日本財団 海と日本PROJECT"
                layout="fullWidth"
              />
            </li>
          </ul>
          <Copyright text="Copyright © The Nippon Foundation" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
