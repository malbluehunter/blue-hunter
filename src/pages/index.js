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
  const src = [
    "/top/img_top_ep1_ja.png",
    "/comic/01_ja/bh_001_01.png",
    "/comic/01_ja/bh_001_02.png",
    "/comic/01_ja/bh_001_03.png",
    "/comic/01_ja/bh_001_04.png",
    "/comic/01_ja/bh_001_05.png",
    "/comic/01_ja/bh_001_06.png",
    "/comic/01_ja/bh_001_07.png",
    "/comic/01_ja/bh_001_08.png",
    "/comic/01_ja/bh_001_09.png",
    "/comic/01_ja/bh_001_10.png",
    "/comic/01_ja/bh_001_11.png",
    "/comic/01_ja/bh_001_12.png",
    "/comic/01_ja/bh_001_13.png",
    "/comic/01_ja/bh_001_14.png",
    "/comic/01_ja/bh_001_15.png",
    "/comic/01_ja/bh_001_16.png",
    "/comic/01_ja/bh_001_17.png",
    "/comic/01_ja/bh_001_18.png",
    "/comic/01_ja/bh_001_19.png",
    "/comic/01_ja/bh_001_20.png",
    "/comic/01_ja/bh_001_21.png",
    "/comic/01_ja/bh_001_22.png",
    "/comic/01_ja/bh_001_23.png",
    "/comic/01_ja/bh_001_24.png",
    "/comic/01_ja/bh_001_25.png",
    "/comic/01_ja/bh_001_26.png",
    "/comic/01_ja/bh_001_27.png",
    "/comic/01_ja/bh_001_28.png",
    "/comic/01_ja/bh_001_29.png",
    "/comic/01_ja/bh_001_30.png",
    "/comic/01_ja/bh_001_31.png",
    "/comic/01_ja/bh_001_32.png",
    "/comic/01_ja/bh_001_33.png",
    "/comic/01_ja/bh_001_34.png",
    "/comic/01_ja/bh_001_35.png",
    "/comic/01_ja/bh_001_36.png",
    "/comic/01_ja/bh_001_37.png",
    "/comic/01_ja/bh_001_38.png",
    "/comic/01_ja/bh_001_39.png",
    "/comic/01_ja/bh_001_40.png",
    "/comic/01_ja/bh_001_41.png",
    "/comic/01_ja/bh_001_42.png",
    "/comic/01_ja/bh_001_43.png",
    "/comic/01_ja/bh_001_44.png",
    "/comic/01_ja/bh_001_45.png",
    "/comic/01_ja/bh_001_46.png",
    "/comic/01_ja/bh_001_47.png",
    "/comic/01_ja/bh_001_48.png",
    "/comic/01_ja/bh_001_49.png",
    "/comic/01_ja/bh_001_50.png",
    "/comic/01_ja/bh_001_51.png",
    "/comic/01_ja/bh_001_52.png",
    "/comic/01_ja/bh_001_53.png",
    "/comic/01_ja/bh_001_54.png",
    "/comic/01_ja/bh_001_55.png",
    "/comic/01_ja/bh_001_56.png",
    "/comic/01_ja/bh_001_57.png",
    "/comic/01_ja/bh_001_58.png",
    "/comic/01_ja/bh_001_59.png",
    "/comic/01_ja/bh_001_60.png",
    "/comic/01_ja/bh_001_61.png",
    "/comic/01_ja/bh_001_62.png",
    "/comic/01_ja/bh_001_63.png",
    "/comic/01_ja/bh_001_64.png",
    "/comic/01_ja/bh_001_65.png",
    "/comic/01_ja/bh_001_66.png",
    "/comic/01_ja/bh_001_67.png",
    "/comic/01_ja/bh_001_68.png",
    "/comic/01_ja/bh_001_69.png",
    "/comic/01_ja/bh_001_70.png",
    "/comic/01_ja/bh_001_71.png",
    "/comic/01_ja/bh_001_72.png",
    "/comic/01_ja/bh_001_73.png",
    "/comic/01_ja/bh_001_74.png",
    "/comic/01_ja/bh_001_75.png",
    "/comic/01_ja/bh_001_76.png"
  ]
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
        <link rel="preload" as="image" href="/common/nav_text_news_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" /><meta name="robots" content="noindex" />
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
            {/* <div className={styles.btn_next}>
              <Button href="/comic/ep2/" isDisabled={false}>
                第2話を読む
              </Button>
            </div> */}
            <div className={styles.btn_plan}>
              <Button isDisabled={true}>次回7/16 配信予定</Button>
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
