import * as React from "react"
import * as styles from "./Nav.module.scss"

const Nav = props => {
  const { pathname } = props

  return (
    <div className={styles.wrap}>
      <div className={styles.lang_area}>
        <div className={styles.lang_item}>
          <a className={styles.lang_item_link}>
            <p className={styles.lang_text}>日本語</p>
            <img src="/common/bg_language.png" alt="日本語" className={styles.lang_item_img} />
          </a>
        </div>
        <div className={styles.lang_item}>
          <a className={styles.lang_item_link}>
            <p className={styles.lang_text}>English</p>
            <img src="/common/bg_language.png" alt="English" className={styles.lang_item_img} />
          </a>
        </div>
      </div>
      <div className={styles.nav_bg}>
        <img src="/common/bg_navi.png" alt="グローバルナビ背景" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_item}>
          <div className={pathname.match(/news/) ? styles.current : ""}>
            <a className={styles.menu_item_link} href="/news/">
              <img src="/common/nav_text_news.svg" alt="News" className={styles.menu_item_img_01} />
              <p className={styles.text}>ニュース</p>
            </a>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_inner}>
            <a className={styles.menu_item_link} href="/comic/ep1/">
              <img src="/common/nav_text_comic.svg" alt="Commic" className={styles.menu_item_img_02} />
              <p className={styles.text}>マンガ</p>
            </a>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_inner}>
            <a className={styles.menu_item_link} href="/worldbuilding/">
              <img src="/common/nav_text_world.svg" alt="The World of BH" className={styles.menu_item_img_03} />
              <p className={styles.text}>世界観・設定</p>
            </a>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_inner}>
            <a className={styles.menu_item_link} href="/characters/kakeru/">
              <img src="/common/nav_text_characters.svg" alt="Characters" className={styles.menu_item_img_04} />
              <p className={styles.text}>キャラクター</p>
            </a>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_inner}>
            <a className={styles.menu_item_link} href="/staff/">
              <img src="/common/nav_text_staff.svg" alt="Staff" className={styles.menu_item_img_05} />
              <p className={styles.text}>スタッフ</p>
            </a>
          </div>
        </div>
        <div className={styles.menu_item}>
          <div className={styles.menu_item_inner}>
            <a className={styles.menu_item_link} href="/special/">
              <img src="/common/nav_text_special.svg" alt="Special" className={styles.menu_item_img_06} />
              <p className={styles.text}>スペシャル</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
