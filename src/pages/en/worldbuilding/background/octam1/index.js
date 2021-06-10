import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/octam1/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/octam1/" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Background - Encyclopedia of Octa/M (1)" />
        <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Background" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Encyclopedia of Octa/M (1)" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Based on a four-layer structure, the first and second layers are connected by eight buildings and float on the water as a single 'mega float'. Freight trains and carts responsible for the transportation of mineral resources run along a set of double-helix elevators known as the 'line' that runs between the 2nd and 4th layers." />
            <TextMedium text="The areas surrounded by the helix are called 'cylinders', and fisheries and other aquaculture can be found until about 1000m below sea level, which is where the OMZ (oxygen minimum zone) begins. Industrial waste is carefully calculated to ensure there is no leakage from the cylinder." />
            <TextMedium text="There are eight elevators (mainly for human use) situated at the bottom of the eight towers, which are able to move vertically by applying hydro-structure (adjusting water pressure). The 2nd and 3rd layers are anchored to the seabed with wires, and balls that function as ballasts move up and down to independently keep each layer horizontal." />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_05.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Names for each layer" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="1st Stratum = ST. INSULAM" />
              <TextMediumSub text="From the latin for 'island'" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="2nd Stratum = ST. VADUM" />
              <TextMediumSub text="From the latin for shallow" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="3rd Stratum = ST. ALTUM" />
              <TextMediumSub text="From the latin for deep" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="4th Stratum = ST. SOLUM" />
              <TextMediumSub text="From the latin for base" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Names for each line" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Between strata 2-3......v-line" />
              <TextMediumSub text="Between strata 3-4......s-line" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Names for each cylinder" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Between strata 2-3......V cylinder" />
              <TextMediumSub text="Between strata 3-4......S cylinder" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../un-to-uic/" hrefNext="../octam2/" isDisabledPrev={false} isDisabledNext={false} number={6} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
