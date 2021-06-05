import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../components/atoms/PageTitle"
import BreadShort from "../../components/molecules/BreadShort"
import LayoutTwoColumn from "../../components/templates/LayoutTwoColumn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../components/atoms/BnrArt"
import WorldCategoryBtn from "../../components/organisms/WorldCategoryBtn"

const WorldPage = ({ location }) => {
  const categoryInfo = [
    { src: "/world/bg_top_01.png", alt: "Background", text: "海洋都市圏「グラン=ムー」の成り立ちと発展を年譜に沿って説明します。", btn: "/world/btn_top_01.png" },
    { src: "/world/bg_top_02.png", alt: "Social System", text: "タスクやフェアチェーンとは？物語に欠かせない用語を解説します。", btn: "/world/btn_top_02.png" },
    { src: "/world/bg_top_03.png", alt: "Road to Blue Hunter", text: "ハンターギルド組織やブルーハンターの階級について明らかにします。", btn: "/world/btn_top_03.png" },
    { src: "/world/bg_top_04.png", alt: "Machinery", text: "カケル達が搭乗するオルカ号や、ハンター達が使っている便利な道具の紹介です。", btn: "/world/btn_top_04.png" },
    { src: "/world/bg_top_05.png", alt: "Technology", text: "2050年は今より技術が成熟した世界。進歩したテクノロジーの紹介です。", btn: "/world/btn_top_05.png" },
  ]

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="世界観・設定" />
        <div className={styles.contents_inner}>
          <WorldCategoryBtn categoryInfo={categoryInfo} />
        </div>
        {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
