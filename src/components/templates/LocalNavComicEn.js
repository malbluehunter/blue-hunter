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
        <p className={styles.localNav_top_text}>Chapter list</p>
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
            <Link to="/en/comic/ep1/">Episode 1</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
              <Link to="#">Episode 2</Link>
              <LabelNew />
          </li> */}
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep1/">Episode 1</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep2/">Episode 2</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep3/">Episode 3</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep4/">Episode 4</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep5/">Episode 5</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep6/">Episode 6</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep7/">Episode 7</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep8/">Episode 8</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep9/">Episode 9</Link>
          </li>
          <li className={`${styles.LocalNav_item}`}>
            <Link to="/en/comic/ep10/">Episode 10</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.current}`}>
            <Link to="/en/comic/ep11/">Episode 11</Link>
            <LabelNew />
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">Episode 12</Link>
          </li>
          <li className={`${styles.LocalNav_item} ${styles.disabled}`}>
            <Link to="#">Episode 13</Link>
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
