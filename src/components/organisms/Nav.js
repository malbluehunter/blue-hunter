import * as React from "react"
import * as styles from "./Nav.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Navi = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.lang_area}>
        <div className={styles.lang_item_01}>
          <a className={styles.lang_item_link}>
            <StaticImage
              src="../../assets/images/common/text_en.png"
              alt="日本語"
              layout="fullWidth"
              className={styles.lang_item_img_01}
            />
          </a>
        </div>
        <div className={styles.lang_item_02}>
          <a className={styles.lang_item_link}>
            <StaticImage
              src="../../assets/images/common/text_en.png"
              alt="英語"
              layout="fullWidth"
              className={styles.lang_item_img_02}
            />
          </a>
        </div>
      </div>
      <div className={styles.nav_bg}>
        <StaticImage
          src="../../assets/images/common/bg_navi.png"
          alt="グローバルナビ背景"
          layout="fullWidth"
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_news.png"
                alt="News"
                layout="fullWidth"
                className={styles.inner_item_img_01}
              />
              <p className={styles.text}>ニュース</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_comic.png"
                alt="Commic"
                layout="fullWidth"
                className={styles.inner_item_img_02}
              />
              <p className={styles.text}>マンガ</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_world.png"
                alt="The World of BH"
                layout="fullWidth"
                className={styles.inner_item_img_03}
              />
              <p className={styles.text}>世界観・設定</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_characters.png"
                alt="Characters"
                layout="fullWidth"
                className={styles.inner_item_img_04}
              />
              <p className={styles.text}>キャラクター</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_staff.png"
                alt="Staff"
                layout="fullWidth"
                className={styles.inner_item_img_05}
              />
              <p className={styles.text}>スタッフ</p>
            </a>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_item_inner}>
            <a className={styles.inner_item_link} href="">
              <StaticImage
                src="../../assets/images/common/nav_text_special.png"
                alt="NEWS"
                layout="fullWidth"
                className={styles.inner_item_img_06}
              />
              <p className={styles.text}>スペシャル</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navi
