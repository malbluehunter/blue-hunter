import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextLeading from "../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../components/atoms/TextAnnotation"
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

const WorldPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/bluehunter/guilds/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/bluehunter/guilds/" />
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
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="ブルーハンター組織図 - ハンターギルド組織図" />
        <WorldContentsInner>
          <MainContentsTop text="ブルーハンター組織図" />
          <MainContentsMiddleWorld>
            <TextHeading text="ハンターギルド組織図" />
            <ContentsLine />
            <TextMedium text="ハンターはチーム単位（ギルド）で⾏動し、役割分担がある。また船（ゼロシップ）はギルドと独⽴で運営され、乗組員は3交代制で運航を司る。環境DNA分析などで情報を収集し、船を導く役割を「シーカー（誘導⼠）」、⾄近距離へ接近し、調査あるいは捕獲（保護）する役割を「プロテクター（保護⼠）」という。この2⼈が最⼩単位。船の上と⽔中に分かれ、ミッションを遂⾏するため船に乗る。捕獲した⽣物の分析・管理（飼育）を担う「サーチャー（⽣物⼠）」は、保護⼠およびカデットが兼ねるケースが多い。乗船せずリモートでプロジェクトに参加する場合もある。ギルドによっては、海底のUGを操作する「オペレイター（操縦⼠）」が参加するケースもある。保護⼠とコンビを組み、壮⼤なプロジェクトを遂⾏する。" />
            </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="" hrefNext="../classes/" isDisabledPrev={true} isDisabledNext={false}  number={1} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
