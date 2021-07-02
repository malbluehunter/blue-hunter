import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/machinery/nano-ball/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/machinery/nano-ball/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="メカ・アイテム - -ナノボール-" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="メカ・アイテム" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="-ナノボール-" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="作戦遂⾏の切り札である変形ロボット。制御コアの周囲を⼈⼯昆⾍（ナノマシン）で被われたボール型ユーティリティ。ハンターの命令によって特定の⽣物や道具に変形（擬態）する。ターゲット⽣物が苦⼿なもの、あるいは好物へと変貌することで、捕獲ミッションをスムースに遂⾏できる。" />
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="＊どんな⽣物に変形するか、カード型ＵＩで指定。" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_machinery_05_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_machinery_05.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_machinery_05_sp.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="群体で形状を構築する⼤量の⼈⼯昆⾍（ナノボット）と制御核（コアボット）から成る擬態システム。第３世代（3rd.と呼ばれる）以降、⽣分解できるようになり環境負荷が著しく低減した。ルール上、ハンターが利⽤していいのは3rd.以降。" />
              <TextMediumSub text="コアボットが電⼒の⼤半を失うとボール状に強制収縮し、容れ物として使うと中⾝を傷つける可能性があって、ネットボウのように⽣物の捕獲網として利⽤することは禁じられている。セーフティ機能をONにしていれば、強制収縮せずバラバラに散る。逆にセーフティがOFFのとき、中⾝を⼋つ裂きにする凄まじい凶器となる。" />
              <TextMediumSub text="第3世代以降は⾷糧にもできるため、サバイバルキットとして常備されるようになった。「こんなもの⾷べるぐらいなら死んだほうがマシ（ヴィオラ・談）」" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/worldbuilding/machinery/bounty-kit/" hrefNext="/worldbuilding/machinery/netbow/" isDisabledPrev={false} isDisabledNext={false}  number={4} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
