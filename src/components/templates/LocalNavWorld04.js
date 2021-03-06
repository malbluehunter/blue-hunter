import React, { useState } from "react"
import * as styles from "./LocalNavWorld04.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"
import { Link } from "gatsby"

const LocalNavWorld04 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/worldbuilding/machinery/orca"
  const href02 = "/worldbuilding/machinery/ryujin"
  const href03 = "/worldbuilding/machinery/bounty-kit"
  const href04 = "/worldbuilding/machinery/nano-ball"
  const href05 = "/worldbuilding/machinery/netbow"
  const href06 = "/worldbuilding/machinery/phrem"
  const href07 = "/worldbuilding/machinery/my-ai"
  const href08 = "/worldbuilding/machinery/sigma-jacket"
  const href09 = "/worldbuilding/machinery/sigma-glasses"

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
            <picture>
              <source type="image/webp" srcset="/common/local_nav_top_blue.webp" />
              <img src="/common/local_nav_top_blue.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <Link to={href01}>ψOrca -オルカ号-</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <Link to={href02}>ウェイクライダー 龍神</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <Link to={href03}>バウンティキット</Link>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href04) ? styles.current : ""}`}>
                  <Link to={href04}>-ナノボール-</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href05) ? styles.current : ""}`}>
                  <Link to={href05}>-ネットボウ-</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <Link to={href06}>-フレン-</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <Link to={href07}>-マイAI-</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <Link to={href08}>-Σ(シグマ)ジャケット-</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <Link to={href09}>-Σ(シグマ)グラス-</Link>
                </li>
              </ul>
            </li>
            <li className={styles.LocalNav_item}>
              <Link to="/worldbuilding/">世界観・設定トップへ戻る</Link>
            </li>
          </ol>
        </div>
        <div className={styles.localNav_bottom}>
          <img src="/common/local_nav_bottom.png" alt="" />
        </div>
        <div className={styles.btn_openClose} aria-expanded={isOpen} onClick={toggle}>
          {isOpen ? <TextClose /> : <IconDownArrow />}
        </div>
      </div>
    </div>
  )
}

export default LocalNavWorld04
