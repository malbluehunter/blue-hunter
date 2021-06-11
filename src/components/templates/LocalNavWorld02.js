import React, { useState } from "react"
import * as styles from "./LocalNavWorld02.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld02 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/worldbuilding/socialsystem/tk"
  const href02 = "/worldbuilding/socialsystem/link"
  const href03 = "/worldbuilding/socialsystem/gains"
  const href04 = "/worldbuilding/socialsystem/losses"
  const href05 = "/worldbuilding/socialsystem/fairchain"
  const href06 = "/worldbuilding/socialsystem/colored-tasks"
  const href07 = "/worldbuilding/socialsystem/rarity"
  const href08 = "/worldbuilding/socialsystem/road-to-blue"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>社会制度 MENU</p>
          <div className={styles.top_img_wrapper}>
            <img src="/common/local_nav_top_green.webp" />
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>Tk -タスク-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>Lk -リンク-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <a href={href03}>ゲイン -善行-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <a href={href04}>ロス -悪行-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <a href={href05}>フェアチェーン</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href06) ? styles.current : ""}`}>
              <a href={href06}>カラータスク</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href07) ? styles.current : ""}`}>
              <a href={href07}>Rrt -レアリティ-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href08) ? styles.current : ""}`}>
              <a href={href08}>ブルーへの道程</a>
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

export default LocalNavWorld02
