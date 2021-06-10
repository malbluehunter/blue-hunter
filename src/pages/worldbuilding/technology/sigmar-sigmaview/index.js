import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/technology/sigmar-sigmaview/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/technology/sigmar-sigmaview/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../" page03="テクノロジー - ΣＲ(シグマアール)/ΣV(シグマビュー)" />
        <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="テクノロジー" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="ΣＲ(シグマアール)/ΣV(シグマビュー)" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="ハンターが海中で使う仮想空間U/I（およびそれを使うための⾼性能⽔中ゴーグル）。脳波コマンドに反応し、⼼の中で「海転！」と呟くことでログイン。ログアウトは「転海」。" />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="視界の中で海が真っ⽩になり、メッシュ状に区切られたグリッド（座標世界）が出現する。現実の海に1対1で対応しており、区切られた範囲を⽰す「ブロック」の⾊情報を頼りにハンターは移動し、考え、捕獲すべきターゲット⽣物を追い詰めていく。" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="例）" />
              <TextMediumSub text="⾚ブロック・・・環境DNAの痕跡" />
              <TextMediumSub text="⻘ブロック・・・絞り込まれた予想エリア" />
              <TextMediumSub text="⼗字・・・⽣物反応" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ハンターギルドの開祖「Σ」が開発したものである。そもそもΣには数学的に「積分」の意味もあり、ハンターに不可⽋な全情報を⼀⽬で認識できるような集約されたUIを⽬指し、開発された。" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_01.png" alt="" />
            </div>
            </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="" hrefNext="../ug/" isDisabledPrev={true} isDisabledNext={false} number={1} TotalNumber={4} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
