import React, { useState } from "react"
import * as styles from "./NavSp.module.scss"
import HamburgerClose from "../atoms/HamburgerClose"
import HamburgerOpen from "../atoms/HamburgerOpen"

const NavSp = () => {
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
      <div class={styles.hamburger} onClick={handleClick}>
        {isClose ? <HamburgerOpen /> : <HamburgerClose />}
      </div>
      <div className={styles.logo_area}>
        <a href="https://uminohi.jp/" target="_blank">
          <img src="/common/logo_sp.png" alt="ロゴ" className={styles.inner_item_logo_01} />
        </a>
        <img src="/common/logo_bluehunter_sp.png" alt="ロゴ" className={styles.inner_item_logo_02} />
      </div>
      <nav className={`${isClose ? styles.active : ""} ${styles.globalMenuSp}`}>
        <ul className={styles.inner_list}>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_news_sp.png" alt="News" className={styles.inner_item_img_01} />
              <p className={styles.text}>ニュース</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_comic_sp.png" alt="Commic" className={styles.inner_item_img_02} />
              <p className={styles.text}>マンガ</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_world_sp.png" alt="The World of BH" className={styles.inner_item_img_03} />
              <p className={styles.text}>世界観・設定</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_characters_sp.png" alt="Characters" className={styles.inner_item_img_04} />
              <p className={styles.text}>キャラクター</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_staff_sp.png" alt="Staff" className={styles.inner_item_img_05} />
              <p className={styles.text}>スタッフ</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <a href="#" className={styles.inner_item_link}>
              <img src="/common/nav_text_special_sp.png" alt="Special" className={styles.inner_item_img_06} />
              <p className={styles.text}>スペシャル</p>
            </a>
          </li>
          <li className={styles.inner_item}>
            <ul className={styles.lang_area}>
              <li className={styles.lang_item}>
                <a href="#" className={styles.lang_item_link}>
                  <img src="/common/text_ja_hover_sp.png" alt="Special" className={styles.lang_item_img} />
                </a>
              </li>
              <li className={styles.lang_item}>
                <a href="#" className={styles.lang_item_link}>
                  <img src="/common/text_en_sp.png" alt="Special" className={styles.lang_item_img} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavSp
