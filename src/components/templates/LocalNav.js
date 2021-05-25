import React, { useState } from "react"
import * as styles from "./LocalNav.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNav = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }
  const itemList = ["The Encyclopedia of ”Octa/M”（1）", "The Encyclopedia of ”Octa/M”（2）", "The Encyclopedia of ”Octa/M”（3）"]

  return (
    <div className={styles.localNav}>
      <div className={styles.localNav_top} onClick={toggle}>
        <p className={styles.localNav_top_text}>物語の背景 MENU</p>
        <div className={styles.top_img_wrapper}>
          <img src="/common/local_nav_top.png" />
        </div>
      </div>
      <div className={styles.LocalNav_area} aria-expanded={isOpen}>
        <ol className={styles.LocalNav_list} start="0">
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
            <a href="">予備知識としてのCCZ</a>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">2行パターン海洋都市圏の誕生海洋都市圏の誕生海洋都市圏の誕生</a>
            <ul className={styles.LocalNav_list_02}>
              <li className={styles.LocalNav_item_02}>
                <a href="">2行パターングラン=ムー【GRAND/MW】海洋都市圏の誕生</a>
              </li>
            </ul>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">国家か、都市か。</a>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">国連から超都連へ。</a>
            <ul className={styles.LocalNav_list_02}>
              <li className={styles.LocalNav_item_02}>
                <a href="">The Encyclopedia of ”Octa/M”（1）</a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">The Encyclopedia of ”Octa/M”（2）</a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">The Encyclopedia of ”Octa/M”（3）</a>
              </li>
              <li className={styles.LocalNav_item_02}>
                <a href="">The Encyclopedia of ”Octa/M”（4）</a>
              </li>
            </ul>
          </li>
          <li className={styles.LocalNav_item}>
            <a href="">世界観・設定トップへ戻る</a>
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
  )
}

export default LocalNav
