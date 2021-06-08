import React, { useState } from "react"
import * as styles from "./LocalNavWorld.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>物語の背景 MENU</p>
          <div className={styles.top_img_wrapper}>
            <img src="/common/local_nav_top.png" />
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <a href="/worldbuilding/background/ccz">予備知識としてのCCZ</a>
            </li>
            <li className={styles.LocalNav_item}>
              <a href="/worldbuilding/background/marine-metropolitan-areas">海洋都市圏の誕生</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/grandmw">グラン=ムー【GRAND/MW】</a>
                </li>
              </ul>
            </li>
            <li className={styles.LocalNav_item}>
              <a href="/worldbuilding/background/nation-or-city">国家か、都市か。</a>
            </li>
            <li className={styles.LocalNav_item}>
              <a href="/worldbuilding/background/un-to-uic">国連から超都連へ。</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/octam1">The Encyclopedia of ”Octa/M”（1）</a>
                </li>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/octam2">The Encyclopedia of ”Octa/M”（2）</a>
                </li>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/octam3">The Encyclopedia of ”Octa/M”（3）</a>
                </li>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/seaforce">海中発送電塔（シーフォース）</a>
                </li>
                <li className={styles.LocalNav_item_02}>
                  <a href="/worldbuilding/background/octam4">The Encyclopedia of ”Octa/M”（4）</a>
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

export default LocalNavWorld
