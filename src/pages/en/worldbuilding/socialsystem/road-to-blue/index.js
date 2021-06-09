import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextLeading from "../../../../../components/atoms/TextLeading"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/socialsystem/road-to-blue/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/socialsystem/road-to-blue/" />
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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Social System - The Road to Blue" />
        <WorldContentsInner>
          <MainContentsTop text="Social System" />
          <MainContentsMiddleWorld>
            <TextHeading text="The Road to Blue" />
            <ContentsLine />
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="1. Photography/Filming" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_07.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Somebody captures footage of a creature using Underwater Gear etc and uploads it to the Fairchain so it can be accessed from all over the world." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="2. Analysis" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_08.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The environmental DNA (eDNA) is identified by analyzing various details such as the coordinates of where the footage was taken and water samples taken by the UG. Once researchers can make an educated guess as to its species, if it is likely to be a new species, a Bounty Project will begin." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="3. Capture" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_09.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="It is necessary to capture a specimen and analyze its DNA in order to determine whether or not it is a new species. If so, the person who took the original footage and the Hunter who captured it will be awarded Blue." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../rarity/" hrefNext="" isDisabledPrev={false} isDisabledNext={true} number={8} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
