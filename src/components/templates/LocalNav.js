import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./LocalNav.module.scss"

const LocalNav = () => {
  return (
    <>
      <div className={styles.localNav_top}>
        <p className={styles.localNav_top_text}>Background MENU</p>
        <StaticImage
          src="../../assets/images/common/local_nav_top.png"
          layout="fullWidth"
        />
      </div>
      <div className={styles.LocalNav_area}>
        <ul className={styles.LocalNav_list}>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
            <a href="">0. 予備知識としてのCCZ</a>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">1. 海洋都市圏の誕生</a>
            <ul className={styles.LocalNav_list_02}>
              <li className={styles.LocalNav_item_02}>
                <a href="">・グラン=ムー【GRANDMW】</a>
              </li>
            </ul>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">２. 国家か、都市か。</a>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">3. 国連から超都連へ。</a>
            <ul className={styles.LocalNav_list_02}>
              <li className={styles.LocalNav_item_02}>
                <a href="">
                  ・The Encyclopedia of ”Octa/M”
                  <br />
                  （1）
                </a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">
                  ・The Encyclopedia of ”Octa/M”
                  <br />
                  （2）
                </a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">
                  ・The Encyclopedia of ”Octa/M”
                  <br />
                  （3）
                </a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">
                  ・The Encyclopedia of ”Octa/M”
                  <br />
                  （4）
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">世界観・設定トップへ戻る</a>
          </li>
        </ul>
      </div>
      <div className={styles.localNav_bottom}>
        <StaticImage
          src="../../assets/images/common/local_nav_bottom.png"
          layout="fullWidth"
        />
      </div>
    </>
  )
}

export default LocalNav
