import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextLeading from "../../../../components/atoms/TextLeading"
import TextMediumSub from "../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../../components/atoms/PageTitle"
import Bread from "../../../../components/molecules/Bread"
import MainContentsTop from "../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../components/organisms/WorldContentsInner"
import PagerArea from "../../../../components/organisms/PagerArea"
import LocalNavWorld02 from "../../../../components/templates/LocalNavWorld02"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/socialsystem/road-to-blue/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/socialsystem/road-to-blue/" />
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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="社会制度 - ブルーへの道程" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="社会制度" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="ブルーへの道程" />
            <ContentsLine pathname={location.pathname} />
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="1.撮影" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_07.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="誰かがUGなどを使って撮影した⽣物の写真・動画が、フェアチェーンに登録され、全世界に共有される。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="2.分析" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_08.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="撮影当時の座標、および関係したUGの⽔質調査結果等が分析にかけられ、環境DNAが判明し、そこから研究者たちによって⽣ 物の種類が推測され、新種の可能性が⾼ければ探索計画（バウンティプロジェクト）が始まる。（Wanted! の状態）" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="3.保護" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_09.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="撮影された⽣物が新種であると判定されるには、⽣体の保護とDNA解析が必要になる。それが済んで、初めて最初の写真の発⾒者および保護したハンターに「ブルー」が付与される。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="../rarity/" hrefNext="" isDisabledPrev={false} isDisabledNext={true} number={8} TotalNumber={8} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld02 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
