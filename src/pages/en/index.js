import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import ComicArea from "../../components/organisms/ComicArea"
import ShareArea from "../../components/molecules/ShareArea"
import LayoutTop from "../../components/templates/LayoutTop_en"
import Button from "../../components/atoms/Button"
import BnrArt from "../../components/atoms/BnrArt"

const TopPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = ["/top/img_comic_01.webp"]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <LayoutTop pathname={location.pathname}>
        <div className={styles.contents_inner}>
          <div className={styles.description}>
            <img src="/top/description_top_en.png" alt="" />
          </div>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <ShareArea />
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_next}>
              <Button href="#" isDisabled={false}>
                Read Chapter 2
              </Button>
            </div>
            <div className={styles.btn_plan}>
              <Button isDisabled={true}>Next chapter out X Aug</Button>
            </div>
          </div>
          <div className={styles.bnr_area}>
            <BnrArt />
          </div>
        </div>
      </LayoutTop>
    </>
  )
}

export default TopPage
