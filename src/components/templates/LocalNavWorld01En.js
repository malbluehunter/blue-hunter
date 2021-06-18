import React, { useState } from "react"
import * as styles from "./LocalNavWorld01En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld01 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/en/worldbuilding/background/ccz"
  const href02 = "/en/worldbuilding/background/marine-metropolitan-areas"
  const href03 = "/en/worldbuilding/background/grandmw"
  const href04 = "/en/worldbuilding/background/nation-or-city"
  const href05 = "/en/worldbuilding/background/un-to-uic"
  const href06 = "/en/worldbuilding/background/octam1"
  const href07 = "/en/worldbuilding/background/octam2"
  const href08 = "/en/worldbuilding/background/octam3"
  const href09 = "/en/worldbuilding/background/octam4"
  const href10 = "/en/worldbuilding/background/seaforce"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>Background MENU</p>
          <div className={styles.top_img_wrapper}>
            <picture>
              <source type="image/webp" srcset="/common/local_nav_top_lightBlue.webp" />
              <img src="/common/local_nav_top_lightBlue.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>Background Knowledge: CCZ</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>Birth of Marine Metropolitan Areas</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href03) ? styles.current : ""}`}>
                  <a href={href03}>GRAND/MW</a>
                </li>
              </ul>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <a href={href04}>A Nation? A City?</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <a href={href05}>From UN to UiC</a>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <a href={href06}>Encyclopedia of Octa/M (1)</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <a href={href07}>Encyclopedia of Octa/M (2)</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <a href={href08}>Encyclopedia of Octa/M (3)</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <a href={href09}>Encyclopedia of Octa/M (4)</a>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href10) ? styles.current : ""}`}>
                  <a href={href10}>Underwater Electrical Supply Towers (SeaForce)</a>
                </li>
              </ul>
            </li>
            <li className={styles.LocalNav_item}>
              <a href="/en/worldbuilding/">Return to The World of BH</a>
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

export default LocalNavWorld01
