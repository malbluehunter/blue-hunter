import React, { useState } from "react"
import * as styles from "./LocalNavWorld04.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld04 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/en/worldbuilding/machinery/orca"
  const href02 = "/en/worldbuilding/machinery/ryujin"
  const href03 = "/en/worldbuilding/machinery/bounty-kit"
  const href04 = "/en/worldbuilding/machinery/nano-ball"
  const href05 = "/en/worldbuilding/machinery/netbow"
  const href06 = "/en/worldbuilding/machinery/phrem"
  const href07 = "/en/worldbuilding/machinery/my-ai"
  const href08 = "/en/worldbuilding/machinery/sigma-jacket"
  const href09 = "/en/worldbuilding/machinery/sigma-glasses"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>メカ・アイテム MENU</p>
          <div className={styles.top_img_wrapper}>
            <img src="/common/local_nav_top_blue.webp" />
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>ψOrca -オルカ号-</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>ウェイクライダー 龍神</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <a href={href03}>バウンティキット</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href04) ? styles.current : ""}`}>
                  <a href={href04}>-ナノボール-</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href05) ? styles.current : ""}`}>
                  <a href={href05}>-ネットボウ-</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <a href={href06}>-フレン-</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <a href={href07}>-マイAI-</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <a href={href08}>-Σ(シグマ)ジャケット-</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <a href={href09}>-Σ(シグマ)グラス-</a>
                </li>

              </ul>
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

export default LocalNavWorld04
