import React, { useState } from "react"
import * as styles from "./LocalNavWorld04En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"
import { Link } from "gatsby"

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
          <p className={styles.localNav_top_text}>Machinery MENU</p>
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
              <Link to={href01}>ψOrca</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <Link to={href02}>Wake Rider Ryujin</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <Link to={href03}>Bounty Kit</Link>
              <ul className={styles.LocalNav_list_02}>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href04) ? styles.current : ""}`}>
                  <Link to={href04}>Nano Ball</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href05) ? styles.current : ""}`}>
                  <Link to={href05}>Netbow</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href06) ? styles.current : ""}`}>
                  <Link to={href06}>PHREM</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href07) ? styles.current : ""}`}>
                  <Link to={href07}>My-AI</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href08) ? styles.current : ""}`}>
                  <Link to={href08}>Σ-Jacket</Link>
                </li>
                <li className={`${styles.LocalNav_item_02} ${pathname.match(href09) ? styles.current : ""}`}>
                  <Link to={href09}>Σ-Glasses</Link>
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

export default LocalNavWorld04
