import React, { useState } from "react"
import * as styles from "./LocalNavWorld02En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"

const LocalNavWorld02 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/en/worldbuilding/socialsystem/tk"
  const href02 = "/en/worldbuilding/socialsystem/link"
  const href03 = "/en/worldbuilding/socialsystem/gains"
  const href04 = "/en/worldbuilding/socialsystem/losses"
  const href05 = "/en/worldbuilding/socialsystem/fairchain"
  const href06 = "/en/worldbuilding/socialsystem/colored-tasks"
  const href07 = "/en/worldbuilding/socialsystem/rarity"
  const href08 = "/en/worldbuilding/socialsystem/road-to-blue"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>Social System MENU</p>
          <div className={styles.top_img_wrapper}>
            <picture>
              <source type="image/webp" srcset="/common/local_nav_top_green.webp" />
              <img src="/common/local_nav_top_green.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <a href={href01}>Tasks (Tk)</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <a href={href02}>Link (Lk)</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <a href={href03}>Gains</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <a href={href04}>Losses</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <a href={href05}>Fairchain</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href06) ? styles.current : ""}`}>
              <a href={href06}>Colored Tasks</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href07) ? styles.current : ""}`}>
              <a href={href07}>Rarity (Rrt)</a>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href08) ? styles.current : ""}`}>
              <a href={href08}>The Road to Blue</a>
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

export default LocalNavWorld02
