import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import ComicArea from "../components/organisms/ComicArea"
import ShareArea from "../components/molecules/ShareArea"
import LayoutTop from "../components/templates/LayoutTop"
import Button from "../components/atoms/Button"
import BnrArt from "../components/atoms/BnrArt"

const TopPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = ["/top/img_comic_01"]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/" />
        <meta property="og:url" content="https://manga.uminohi.jp/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
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
            <picture>
              <source type="image/webp" srcset="/top/description_top.webp" />
              <img src="/top/description_top.png" alt="" loading="lazy" />
            </picture>
          </div>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <ShareArea />
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_next}>
              <Button href="#" isDisabled={false}>
                第2話を読む
              </Button>
            </div>
            <div className={styles.btn_plan}>
              <Button isDisabled={true}>次回8/x 配信予定</Button>
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
