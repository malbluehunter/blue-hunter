import React, { useState } from "react"
import * as styles from "./LocalNavWorld04.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld04 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/worldbuilding/machinery/orca"
  const href02 = "/worldbuilding/machinery/orca2"
  const href03 = "/worldbuilding/machinery/orca3"
  const href04 = "/worldbuilding/machinery/ryujin"
  const href05 = "/worldbuilding/machinery/bounty-kit"
  const href06 = "/worldbuilding/machinery/nano-ball"
  const href07 = "/worldbuilding/machinery/netbow"
  const href08 = "/worldbuilding/machinery/phrem"
  const href09 = "/worldbuilding/machinery/my-ai"
  const href10 = "/worldbuilding/machinery/sigma-jacket"
  const href11 = "/worldbuilding/machinery/sigma-glasses"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>物語の背景 MENU</p>
          <div className={styles.top_img_wrapper}>
            <img src="/common/local_nav_top_blue.webp" />
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>ψOrcaオルカ号（１）</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>ψOrcaオルカ号（２）</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <a href={href03}>ψOrcaオルカ号（３）</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <a href={href04}>ウェイクライダー龍神</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <a href={href05}>バウンティキット</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <a href={href06}>ナノボール</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <a href={href07}>ネットボウ）</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <a href={href08}>フレン</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <a href={href09}>マイAI</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href10) ? styles.current : ""}`}>
                  <a href={href10}>Σジャケット</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href11) ? styles.current : ""}`}>
                  <a href={href11}>Σグラス</a>
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
