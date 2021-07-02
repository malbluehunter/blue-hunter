import React, { useState } from "react"
import * as styles from "./LocalNavWorld01En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"
import { Link } from "gatsby"

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
              <Link to={href01}>Background Knowledge: CCZ</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <Link to={href02}>Birth of Marine Metropolitan Areas</Link>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href03) ? styles.current : ""}`}>
                  <Link to={href03}>GRAND/MW</Link>
                </li>
              </ul>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <Link to={href04}>A Nation? A City?</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <Link to={href05}>From UN to UiC</Link>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <Link to={href06}>Encyclopedia of Octa/M (1)</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <Link to={href07}>Encyclopedia of Octa/M (2)</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <Link to={href08}>Encyclopedia of Octa/M (3)</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <Link to={href09}>Encyclopedia of Octa/M (4)</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href10) ? styles.current : ""}`}>
                  <Link to={href10}>Underwater Electrical Supply Towers (SeaForce)</Link>
                </li>
              </ul>
            </li>
            <li className={styles.LocalNav_item}>
              <Link to="/en/worldbuilding/">Return to The World of BH</Link>
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

export default LocalNavWorld01
