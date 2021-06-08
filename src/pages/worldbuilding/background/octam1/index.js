import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
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

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/octam1/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/octam1/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - The Encyclopedia of ”Octa/M”(1)" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddleWorld>
            <TextHeading text="The Encyclopedia of ”Octa/M”(1)" />
            <ContentsLine />
            <TextMedium text="4層構造を基本とし、第1層と第2層は8本のビルで接続され、⼀体の「メガフロート」として⽔上に浮かぶ。" />
            <TextMedium text="第2〜第4層の間にある「ライン」＝2重螺旋のエレベーター（貨物列⾞・トロッコ）が鉱物資源等の運搬を担う。" />
            <TextMedium text="螺旋で囲われた部分は「シリンダー」と呼ばれ、- 1000m近傍まで（酸素極⼩層まで）は養殖等、⽔産事業が展開される。また、産業廃棄物はシリンダーの外へ漏れないように計算されている。" />
            <TextMedium text="8本あるタワーの最下層にエレベーターが8基（基本的に⼈間⽤）あり、ハイドロストラクチャーの応⽤（⽔圧を調整）で垂直⽅向へ⾏き来する。第2・第3層はワイヤーで海底にアンカリングされており、バラストとして機能するボールが上下に移動することで各層の⽔平を（独⽴して）保とうとする。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_05.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="各層の名称" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="第1層= ST. INSULAM （「島」という意味のラテン語）" />
              <TextMediumSub text="第2層= ST. VADUM （「浅い」という意味のラテン語）" />
              <TextMediumSub text="第3層= ST. ALTUM （「深い」という意味のラテン語）" />
              <TextMediumSub text="第4層= ST. SOL UM （「底」という意味のラテン語）" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="各ラインの名称" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="第2〜第3層・・・Vライン" />
              <TextMediumSub text="第3〜第4層・・・Sライン" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="各シリンダーの名称" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="第2〜第3層・・・Ｖシリンダー" />
              <TextMediumSub text="第3〜第4層・・・Ｓシリンダー" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../un-to-uic/" hrefNext="../octam2/" isDisabledPrev={false} isDisabledNext={false} number={6} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
