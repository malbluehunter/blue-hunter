import * as React from "react"
import * as styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.lang_area}>
        <div className={styles.lang_item_01}>
          <a className={styles.lang_item_link}>
            <img src="/common/text_ja.png" alt="日本語" className={styles.lang_item_img_01} />
          </a>
        </div>
        <div className={styles.lang_item_02}>
          <a className={styles.lang_item_link}>
            <img src="/common/text_en.png" alt="英語" className={styles.lang_item_img_02} />
          </a>
        </div>
      </div>
      <div className={styles.nav_bg}>
        <img src="/common/bg_navi.png" alt="グローバルナビ背景" />
      </div>
      <div className={styles.inner}>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_news.png" alt="News" className={styles.inner_item_img_01} />
              <p className={styles.text}>ニュース</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_comic.png" alt="Commic" className={styles.inner_item_img_02} />
              <p className={styles.text}>マンガ</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_world.png" alt="The World of BH" className={styles.inner_item_img_03} />
              <p className={styles.text}>世界観・設定</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_characters.png" alt="Characters" className={styles.inner_item_img_04} />
              <p className={styles.text}>キャラクター</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_staff.png" alt="Staff" className={styles.inner_item_img_05} />
              <p className={styles.text}>スタッフ</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <img src="/common/nav_text_special.png" alt="NEWS" className={styles.inner_item_img_06} />
              <p className={styles.text}>スペシャル</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
