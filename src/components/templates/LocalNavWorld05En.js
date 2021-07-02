import React, { useState } from "react"
import * as styles from "./LocalNavWorld05En.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrow from "../atoms/IconDownArrow"
import { Link } from "gatsby"

const LocalNavWorld05 = props => {
  const { pathname } = props
  const [isOpen, setisOpen] = useState(false)

  // ローカルナビのリンク先
  const href01 = "/en/worldbuilding/technology/sigmar-sigmaview"
  const href02 = "/en/worldbuilding/technology/ug"
  const href03 = "/en/worldbuilding/technology/bioverse"
  const href04 = "/en/worldbuilding/technology/phylogenetic-tree"

  // SPの時ローカルナビをクリックで開閉
  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div>
      <div className={styles.localNav}>
        <div className={styles.localNav_top} onClick={toggle}>
          <p className={styles.localNav_top_text}>Technology MENU</p>
          <div className={styles.top_img_wrapper}>
            <picture>
              <source type="image/webp" srcset="/common/local_nav_top_purple.webp" />
              <img src="/common/local_nav_top_purple.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
        {/* 現在地の目次にstyles.currentを付与*/}
        <div className={styles.LocalNav_area} aria-expanded={isOpen}>
          <ol className={styles.LocalNav_list} start="0">
            <li className={`${styles.LocalNav_item} ${pathname.match(href01) ? styles.current : ""}`}>
              <Link to={href01}>ΣR/ΣV</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href02) ? styles.current : ""}`}>
              <Link to={href02}>Underwater Gear (UG)</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href03) ? styles.current : ""}`}>
              <Link to={href03}>Bioverse</Link>
            </li>
            <li className={`${styles.LocalNav_item} ${pathname.match(href04) ? styles.current : ""}`}>
              <Link to={href04}>Phylogenetic Tree</Link>
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

export default LocalNavWorld05
