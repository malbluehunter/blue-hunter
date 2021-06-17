import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextMediumSub from "../../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../../components/templates/LayoutTwoColumnEn"
import PageTitle from "../../../../../components/atoms/PageTitle"
import Bread from "../../../../../components/molecules/Bread"
import MainContentsTop from "../../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInnerEn"
import PagerArea from "../../../../../components/organisms/PagerArea"
import LocalNavWorld05En from "../../../../../components/templates/LocalNavWorld05En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/technology/sigmar-sigmaview/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/technology/sigmar-sigmaview/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" /><meta name="robots" content="noindex" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Technology - ΣR/ΣV" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Technology" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="ΣR/ΣV" />
            <TextMedium text="Pronunciation: ‘Sigma-R' / 'Sigma-View’" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="A virtual space UI used by Hunters while underwater (may also refer to the high performance underwater goggles used to view it). It reacts to brain waves, and the user needs to say 'SUBMERGE' in their mind in order to log in. The command to log out is 'EMERGE'. The sea will display as pure white, and coordinates are mapped out with a mesh-like grid. The view within the ΣV corresponds exactly to the real world, and Hunters use the colors displayed in these 'blocks' to move, think and capture the target specimens." />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Example" />
              <TextMediumSub text="Red Block:  Traces of eDNA" />
              <TextMediumSub text="Blue Blocks: Forecast Area" />
              <TextMediumSub text="Crosses: Living Creatures" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Σ (Sigma) is the name of the original Hunter Guild and has the mathematical meaning of 'summation'. Their aim in developing and releasing this UI was to make it so Hunters can see all the essential information they need at the blink of an eye." />
            </div>
            {/* <div className={styles.img_wrapper}>
              <img src="/world/world_img_technology_03.png" alt="" />
            </div> */}
            </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="/en/worldbuilding/technology/ug/" isDisabledPrev={true} isDisabledNext={false} number={1} TotalNumber={4} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld05En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
