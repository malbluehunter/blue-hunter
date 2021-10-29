import React, { useState } from "react"
import * as styles from "./LocalNavComic.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrowComic from "../atoms/IconDownArrowComic"
import LabelNew from "../atoms/LabelNew"
import { Link } from "gatsby"

const LocalNavComic = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    isOpen ? setisOpen(false) : setisOpen(true)
  }

  return (
    <div className={styles.localNav}>
      <div className={styles.localNav_top} onClick={toggle}>
        <p className={styles.localNav_top_text}>シリーズ一覧</p>
        <div className={styles.top_img_wrapper}>
          <picture>
            <source type="image/webp" srcset="/common/local_nav_top_lightBlue.webp" />
            <img src="/common/local_nav_top_lightBlue.png" alt="" loading="lazy" />
          </picture>
        </div>
      </div>
      <div className={styles.LocalNav_area} aria-expanded={isOpen}>
        <ul className={styles.LocalNav_list} start="0">
          {/* <li className={styles.LocalNav_item}>
            <Link to="#">第1話</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <Link to="#">第2話</Link>
              <LabelNew />
          </li> */}
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep1/">第1話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep2/">第2話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep3/">第3話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep4/">第4話</Link>            
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep5/">第5話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep6/">第6話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep7/">第7話</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/comic/ep8/">第8話</Link>            
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
            <Link to="/comic/ep9/">第9話</Link>
            <LabelNew />
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">第10話</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">第11話</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">第12話</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">第13話</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}></li>
        </ul>
      </div>
      <div className={styles.localNav_bottom}>
        <img src="/common/local_nav_bottom.png" alt="" />
      </div>
      <div className={styles.btn_openClose} aria-expanded={isOpen} onClick={toggle}>
        {isOpen ? <TextClose /> : <IconDownArrowComic />}
      </div>
    </div>
  )
}

export default LocalNavComic
