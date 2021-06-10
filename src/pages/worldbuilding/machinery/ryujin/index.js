import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
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
import LocalNavWorld04 from "../../../../components/templates/LocalNavWorld04"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/machinery/ryujin/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/machinery/ryujin/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="メカ・アイテム - ウェイクライダー 龍神" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="メカ・アイテム" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="ウェイクライダー 龍神" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="100km/h以上ものスピードを誇るウェイクライダー「⿓神」（遠隔操縦ジェットスキー&amp;合体分離式ウェイクボード）。⽔上ミッションではウェイクライダーの⾳で⽣物をドライブ（追う）またはエスケイプ（逃げる）しつつ、ハンターは最⼤100メートルもの距離をとってターゲットの前後へ、時には空中をジャンプしつつ⾃在に回り込む。⽔中ミッションではシーポッド（いわゆる⽔中スクーター）がこの役割を担う。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_03.jpg" alt="" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_04.jpg" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="../orca/" hrefNext="../bounty-kit/" isDisabledPrev={false} isDisabledNext={false}  number={2} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
