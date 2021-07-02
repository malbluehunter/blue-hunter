import React, { useState } from "react"
import * as styles from "./LocalNavWorld02En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"
import { Link } from "gatsby"

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
              <Link to={href01}>Tasks (Tk)</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <Link to={href02}>Link (Lk)</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <Link to={href03}>Gains</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <Link to={href04}>Losses</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href05) ? styles.current : ""}`}>
              <Link to={href05}>Fairchain</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href06) ? styles.current : ""}`}>
              <Link to={href06}>Colored Tasks</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href07) ? styles.current : ""}`}>
              <Link to={href07}>Rarity (Rrt)</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href08) ? styles.current : ""}`}>
              <Link to={href08}>The Road to Blue</Link>
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

export default LocalNavWorld02
