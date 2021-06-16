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
        <p className={styles.localNav_top_text}>Chapter list</p>
        <div className={styles.top_img_wrapper}>
          <img src="/common/local_nav_top_lightBlue.webp" />
        </div>
      </div>
      <div className={styles.LocalNav_area} aria-expanded={isOpen}>
        <ul className={styles.LocalNav_list} start="0">
          {/* <li className={styles.LocalNav_item}>
            <a href="/en/comic/ep1/">Episode 1</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <a href="">Episode 2</a>
              <LabelNew />
          </li> */}
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <a href="/en/comic/ep1/">Episode 1</a>
              <LabelNew />
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 2</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 3</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 4</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 5</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 6</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 7</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 8</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 9</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 10</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 11</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 12</a>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <a href="">Episode 13</a>
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
