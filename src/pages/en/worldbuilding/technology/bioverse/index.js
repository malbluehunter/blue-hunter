import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
        <meta
          name="description"
          content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here."
        />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/technology/bioverse/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/technology/bioverse/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Technology - Bioverse" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
            <MainContentsTop pathname={location.pathname} text="Technology" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Bioverse" />
              <ContentsLine pathname={location.pathname} />
              <TextMedium text="A virtual user interface that expresses the characteristics of living things and the relationships between species via cards. It can use CG to transform into various shapes such as becoming spherical or flat. The protagonist can use them when facing enemies or creatures. Used by the main characters when fighting against enemies and creatures. It can switch between different modes, usually the Phylogenetic Tree Mode and the Relative Mode. when being used in the Control Room, it is operated by voice. When being used underwater, it is operated by brain waves in the ΣR/ΣV." />
              <TextMedium text="One of the highlights of this system is seeing the main characters use the cards to transform their Nano Ball." />
              <div className={styles.img_wrapper}>
                <img src="/world/world_img_technology_01.png" alt="" />
              </div>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
            {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
            <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/technology/ug/" hrefNext="/en/worldbuilding/technology/phylogenetic-tree/" isDisabledPrev={false} isDisabledNext={false} number={3} TotalNumber={4} />
            {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
          </WorldContentsInner>
          <LocalNavWorld05En pathname={location.pathname} />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
