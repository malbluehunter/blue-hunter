import React, { useState } from "react"
import * as styles from "./LocalNavWorld03.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld03 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/en/worldbuilding/bluehunter/guilds"
  const href02 = "/en/worldbuilding/bluehunter/classes"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>ブルーハンター組織図 MENU</p>
          <div className={styles.top_img_wrapper}>
            <img src="/common/local_nav_top_yellow.webp" />
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>ハンターギルド組織図</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>認定海洋保全官「BLUE HUNTER」の階級</a>
            </li>
            <li className={styles.LocalNav_item}>
              <a href="/worldbuilding/">世界観・設定トップへ戻る</a>
            </li>
          </ol>
        </div>
        <div className={styles.localNav_bottom}>
          <img src="/common/local_nav_bottom.png" />
        </div>
        <div className={styles.btn_openClose} aria-expanded={isOpen} onClick={toggle}>
          {isOpen ? <TextClose /> : <IconDownArrow />}
        </div>
      </div>
    </div>
  )
}

export default LocalNavWorld03
