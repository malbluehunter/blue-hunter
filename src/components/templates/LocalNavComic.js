import React, { useState } from "react"
import * as styles from "./LocalNavComic.module.scss"
import TextClose from "../atoms/TextClose"
import IconDownArrowComic from "../atoms/IconDownArrowComic"
import LabelNew from "../atoms/LabelNew"

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
          <img src="/common/local_nav_top_lightBlue.webp" />
        </div>
      </div>
      <div className={styles.LocalNav_area} aria-expanded={isOpen}>
        <ul className={styles.LocalNav_list} start="0">
          {/* <li className={styles.LocalNav_item}>
            <a href="">第1話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <a href="">第2話</a>
              <LabelNew />
          </li> */}
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <a href="/comic/ep1/">第1話</a>
              <LabelNew />
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第2話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第3話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第4話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第5話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第6話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第7話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第8話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第9話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第10話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第11話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第12話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">第13話</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}></li>
        </ul>
      </div>
      <div className={styles.localNav_bottom}>
        <img src="/common/local_nav_bottom.png" />
      </div>
      <div className={styles.btn_openClose} aria-expanded={isOpen} onClick={toggle}>
        {isOpen ? <TextClose /> : <IconDownArrowComic />}
      </div>
    </div>
  )
}

export default LocalNavComic
