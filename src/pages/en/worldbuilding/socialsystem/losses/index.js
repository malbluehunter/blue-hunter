import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextLeading from "../../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../../components/atoms/TextAnnotation"
import TextMediumSub from "../../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../../../components/atoms/PageTitle"
import Bread from "../../../../../components/molecules/Bread"
import MainContentsTop from "../../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInner"
import PagerArea from "../../../../../components/organisms/PagerArea"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/socialsystem/losses/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/socialsystem/losses/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Social System - Losses" />
        <WorldContentsInner>
          <MainContentsTop text="Social System" />
          <MainContentsMiddleWorld>
            <TextHeading text="Losses" />
            <ContentsLine />
            <TextMedium text="'Losses' are made through actions that adversely affect society (specifically, the unilateral use of fossil fuels). If too many Losses are made, Task-counting may be frozen, and movement may be prohibited. However, Gains and Losses are meant to be balanced, and the goal is to keep a positive total." />
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../gains/" hrefNext="../fairchain/" isDisabledPrev={false} isDisabledNext={false} number={4} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
