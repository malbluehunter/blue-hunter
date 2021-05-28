import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextLeading from "../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../components/atoms/TextAnnotation"
import TextMediumSub from "../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../../components/atoms/PageTitle"
import Bread from "../../../../components/molecules/Bread"
import MainContentsTop from "../../../../components/organisms/MainContentsTop"
import MainContentsMiddle from "../../../../components/organisms/MainContentsMiddle"
import ContentsLine from "../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../components/organisms/WorldContentsInner"

const WorldPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
      {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「Blue Hunter」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「Blue Hunter」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="Blue Hunter, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
      {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「Blue Hunter」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="../../../../static/common/nav_text_news_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_comic_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_world_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_characters_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_staff_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_special_hover.png"/>
      </Helmet>

      <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.min.js"></script>

      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of Blue Hunter" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - 0.予備知識としてのCCZ" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddle>
            <TextHeading text="0.予備知識としてのCCZ" />
            <ContentsLine />
            <TextMedium text="2020年現在、ハワイ南東沖にあるクラリオン断層帯とクリッパートン断層帯に囲まれたCCZ（クラリオン・クリッパートン領域）は、鉱物資源であるマンガン団塊が豊富に存在し、海洋法に基づく国際海底機構（本部はジャマイカ）がその採掘権を管理している。⽇本も⼀部、採掘権を⺠間企業DORD経由で取得。他に英国、ロシア、ドイツ、フランス、インド、中国、韓国など。アメリカは海洋法を批准しないが、独⾃のルートにて採掘権を主張している。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_01.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="見出しパターン" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン。" />
            </div>
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="＊注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン。" />
            </div>
          </MainContentsMiddle>
          <MainContentsBottom />
        </WorldContentsInner>
      </LayoutTwoColumn>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default WorldPage
