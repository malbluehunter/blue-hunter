import * as React from "react"
import * as styles from "./Nav.module.scss"
import { Link } from "gatsby"

const Nav = props => {
  const { pathname } = props

  let newsCurrent = false
  let comicCurrent = false
  let worldbuildingCurrent = false
  let charactersCurrent = false
  let staffCurrent = false
  let specialCurrent = false
  let jaCurrent = false
  let enCurrent = false

  // ナビの現在地表示
  if (pathname.match(/\/news\//)) {
    newsCurrent = true
  } else if (pathname.match(/\/comic\//)) {
    comicCurrent = true
  } else if (pathname.match(/\/worldbuilding\//)) {
    worldbuildingCurrent = true
  } else if (pathname.match(/\/characters\//)) {
    charactersCurrent = true
  } else if (pathname.match(/\/staff\//)) {
    staffCurrent = true
  } else if (pathname.match(/\/special\//)) {
    specialCurrent = true
  }

  // 言語の現在地表示
  if (!pathname.match(/\/en\//)) {
    jaCurrent = true
  } else if (pathname.match(/\/en\//)) {
    enCurrent = true
  }

  // 日本語ページに切り替え
  const pathnameJa = pathname.replace("/en/", "/")

  const changeToJaURL = () => {
    if (pathname.match(/\/en\//)) {
      window.location.href = pathnameJa
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.lang_area}>
        <div className={`${styles.lang_item} ${jaCurrent ? styles.current : ""}`} onClick={changeToJaURL}>
          <div className={styles.lang_item_link}>
            <p className={styles.lang_item_text}>日本語</p>
            <img src="/common/bg_language.png" alt="日本語" className={styles.lang_item_img} />
          </div>
        </div>
        <div className={`${styles.lang_item} ${enCurrent ? styles.current : ""}`}>
          <div className={styles.lang_item_link}>
            <p className={styles.lang_item_text}>English</p>
            <img src="/common/bg_language.png" alt="English" className={styles.lang_item_img} />
          </div>
        </div>
      </div>
      <div className={styles.nav_bg}>
        <picture>
          <source type="image/webp" srcset="/common/bg_navi.webp" />
          <img src="/common/bg_navi.png" alt="グローバルナビ背景" />
        </picture>
      </div>
      <div className={styles.menu}>
        <div className={`${styles.menu_item} ${newsCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/news/">
              <img src={newsCurrent ? "/common/nav_text_news_current.svg" : "/common/nav_text_news.svg"} alt="News" className={`${styles.menu_item_img_01} ${styles.menu_item_img}`} />
              <img src="/common/nav_text_news_current.svg" alt="News" className={`${styles.menu_item_img_01} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>ニュース</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu_item} ${comicCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/comic/ep1/">
              <img src={comicCurrent ? "/common/nav_text_comic_current.svg" : "/common/nav_text_comic.svg"} alt="Commic" className={`${styles.menu_item_img_02} ${styles.menu_item_img}`} />
              <img src="/common/nav_text_comic_current.svg" alt="Commic" className={`${styles.menu_item_img_02} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>マンガ</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu_item} ${worldbuildingCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/worldbuilding/">
              <img
                src={worldbuildingCurrent ? "/common/nav_text_world_current.svg" : "/common/nav_text_world.svg"}
                alt="The World of BH"
                className={`${styles.menu_item_img_03} ${styles.menu_item_img}`}
              />
              <img src="/common/nav_text_world_current.svg" alt="The World of BH" className={`${styles.menu_item_img_03} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>世界観・設定</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu_item} ${charactersCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/characters/kakeru/">
              <img
                src={charactersCurrent ? "/common/nav_text_characters_current.svg" : "/common/nav_text_characters.svg"}
                alt="Characters"
                className={`${styles.menu_item_img_04} ${styles.menu_item_img}`}
              />
              <img src="/common/nav_text_characters_current.svg" alt="Characters" className={`${styles.menu_item_img_04} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>キャラクター</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu_item} ${staffCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/staff/">
              <img src={staffCurrent ? "/common/nav_text_staff_current.svg" : "/common/nav_text_staff.svg"} alt="Staff" className={`${styles.menu_item_img_05} ${styles.menu_item_img}`} />
              <img src="/common/nav_text_staff_current.svg" alt="Staff" className={`${styles.menu_item_img_05} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>スタッフ</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu_item} ${specialCurrent ? styles.current : ""}`}>
          <div className={styles.menu_item_inner}>
            <Link className={styles.menu_item_link} to="/en/special/">
              <img src={specialCurrent ? "/common/nav_text_special_current.svg" : "/common/nav_text_special.svg"} alt="Special" className={`${styles.menu_item_img_06} ${styles.menu_item_img}`} />
              <img src="/common/nav_text_special_current.svg" alt="Special" className={`${styles.menu_item_img_06} ${styles.menu_item_img_hover}`} />
              <p className={styles.text}>スペシャル</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
