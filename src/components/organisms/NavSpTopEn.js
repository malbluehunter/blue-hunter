import React, { useState } from "react"
import * as styles from "./NavSpTop.module.scss"
import HamburgerClose from "../atoms/HamburgerClose"
import HamburgerOpen from "../atoms/HamburgerOpen"

const NavSpTop = props => {
  const { pathname } = props

  // ナビの現在地表示の設定
  let newsCurrent = false
  let comicCurrent = false
  let worldbuildingCurrent = false
  let charactersCurrent = false
  let staffCurrent = false
  let specialCurrent = false
  let topCurrent = false
  let jaCurrent = false
  let enCurrent = false

  // ナビの現在地表示の設定
  if (pathname.match(/news/)) {
    newsCurrent = true
  } else if (pathname.match(/comic/)) {
    comicCurrent = true
  } else if (pathname.match(/worldbuilding/)) {
    worldbuildingCurrent = true
  } else if (pathname.match(/characters/)) {
    charactersCurrent = true
  } else if (pathname.match(/staff/)) {
    staffCurrent = true
  } else if (pathname.match(/special/)) {
    specialCurrent = true
  } else {
    topCurrent = true
  }

  // 言語の現在地表示の設定
  if (!pathname.match(/en/)) {
    jaCurrent = true
  } else if (pathname.match(/en/)) {
    enCurrent = true
  }

  const [isClose, changeState] = useState(false)

  function handleClick() {
    if (isClose === false) {
      changeState(true)
    } else {
      changeState(false)
    }
  }

  return (
    <div className={styles.nav_sp_wrapper}>
      <div class={`${isClose ? styles.active : ""} ${styles.hamburger}`} onClick={handleClick}>
        {isClose ? <HamburgerOpen /> : <HamburgerClose />}
      </div>
      <div className={`${isClose ? styles.active : ""} ${styles.logo_area}`}>
        <a href="https://uminohi.jp/" target="_blank">
          <img src="/common/logo_sp.webp" alt="日本財団 海と日本PROJECT" className={styles.inner_item_logo_01} />
        </a>
        <a href="/en/">
          <img src="/common/logo_bluehunter_sp.webp" alt="BLUE HUNTER" className={styles.inner_item_logo_02} />
        </a>
      </div>
      <nav className={`${isClose ? styles.active : ""} ${styles.globalMenuSp}`}>
        <ul className={styles.inner_list}>
          <li className={`${styles.inner_item} ${topCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/">
              <img src={topCurrent ? "/common/nav_text_top_current_sp.svg" : "/common/nav_text_top_sp.svg"} alt="Top" className={styles.inner_item_img_01} />
              <p className={styles.text}>トップ</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${newsCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/news/">
              <img src={newsCurrent ? "/common/nav_text_news_current_sp.svg" : "/common/nav_text_news_sp.svg"} alt="News" className={styles.inner_item_img_02} />
              <p className={styles.text}>ニュース</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${comicCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/comic/ep1/">
              <img src={comicCurrent ? "/common/nav_text_comic_current_sp.svg" : "/common/nav_text_comic_sp.svg"} alt="Commic" className={styles.inner_item_img_03} />
              <p className={styles.text}>マンガ</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${worldbuildingCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/worldbuilding/">
              <img src={worldbuildingCurrent ? "/common/nav_text_world_current_sp.svg" : "/common/nav_text_world_sp.svg"} alt="The World of BH" className={styles.inner_item_img_04} />
              <p className={styles.text}>世界観・設定</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${charactersCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/characters/kakeru/">
              <img src={charactersCurrent ? "/common/nav_text_characters_current_sp.svg" : "/common/nav_text_characters_sp.svg"} alt="Characters" className={styles.inner_item_img_05} />
              <p className={styles.text}>キャラクター</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${staffCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/staff/">
              <img src={staffCurrent ? "/common/nav_text_staff_current_sp.svg" : "/common/nav_text_staff_sp.svg"} alt="Staff" className={styles.inner_item_img_06} />
              <p className={styles.text}>スタッフ</p>
            </a>
          </li>
          <li className={`${styles.inner_item} ${specialCurrent ? styles.current : ""}`}>
            <a className={styles.inner_item_link} href="/en/special/">
              <img src={specialCurrent ? "/common/nav_text_special_current_sp.svg" : "/common/nav_text_special_sp.svg"} alt="Special" className={styles.inner_item_img_07} />
              <p className={styles.text}>スペシャル</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <ul className={styles.lang_area}>
              <li className={`${styles.lang_item} ${jaCurrent ? styles.current : ""}`}>
                <div className={styles.lang_item_link}>
                  <p className={styles.lang_item_text}>日本語</p>
                  <img src="/common/bg_language.png" alt="日本語" className={styles.lang_item_img} />
                </div>
              </li>
              <li className={`${styles.lang_item} ${enCurrent ? styles.current : ""}`}>
                <div className={styles.lang_item_link}>
                  <p className={styles.lang_item_text}>English</p>
                  <img src="/common/bg_language.png" alt="English" className={styles.lang_item_img} />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavSpTop
