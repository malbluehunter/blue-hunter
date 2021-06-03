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

const WorldPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
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
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="社会制度 - ブルーへの道程" />
        <WorldContentsInner>
          <MainContentsTop text="社会制度" />
          <MainContentsMiddleWorld>
            <TextHeading text="ブルーへの道程" />
            <ContentsLine />
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="1.撮影" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_07.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="誰かがUGなどを使って撮影した⽣物の写真・動画が、フェアチェーンに登録され、全世界に共有される。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="2.分析" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_08.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="撮影当時の座標、および関係したUGの⽔質調査結果等が分析にかけられ、環境DNAが判明し、そこから研究者たちによって⽣ 物の種類が推測され、新種の可能性が⾼ければ探索計画（バウンティプロジェクト）が始まる。（Wanted! の状態）" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="3.保護" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_09.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="撮影された⽣物が新種であると判定されるには、⽣体の保護とDNA解析が必要になる。それが済んで、初めて最初の写真の発⾒者および保護したハンターに「ブルー」が付与される。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../rarity/" hrefNext="" isDisabledPrev={false} isDisabledNext={true} number={8} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
