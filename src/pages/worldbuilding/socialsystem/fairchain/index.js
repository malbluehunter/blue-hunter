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

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/socialsystem/fairchain/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/socialsystem/fairchain/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../" page03="社会制度 - フェアチェーン" />
        <WorldContentsInner>
          <MainContentsTop text="社会制度" />
          <MainContentsMiddleWorld>
            <TextHeading text="フェアチェーン" />
            <ContentsLine />
            <TextMedium text="全世界のタスクは⾰新的なブロックチェーン技術である量⼦情報分散システム「フェアチェーン」で管理され、あらゆる営みが超⾼速量⼦演算網を使い、秒単位で更新されている。個⼈のIDと各タスクは厳密に結び付けられており、改竄不可能。その中で、特に価値があると認定されたタスクには、多い時で数万〜数⼗万ものノーマルなタスクが連結（エンゲージ）される。" />
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../losses/" hrefNext="../colored-tasks/" isDisabledPrev={false} isDisabledNext={false}  number={5} TotalNumber={8} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
