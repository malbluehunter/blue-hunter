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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/machinery/netbow/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/machinery/netbow/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="メカ・アイテム - -ネットボウ-" />
        <WorldContentsInner>
          <MainContentsTop text="メカ・アイテム" />
          <MainContentsMiddleWorld>
            <TextHeading text="-ネットボウ-" />
            <ContentsLine />
            <TextMedium text="⽣き物を傷つけず捕らえられるネット発⽣器。普段は⼸（ボウ）の形状をしている。「ネットボウ！」のかけ声とともに球形に展開する。球体の内側の圧⼒や酸素量などを調整できるため、とらえた⽣体を傷つけず、かつ外敵からも守る。" />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="構造⽔を利⽤した電磁柵（⽔分⼦の構造因⼦を利⽤して常温氷の網⽬を作ることができる）であり、保護⼠たちが⽣物捕獲に利⽤する。個⼈タイプは最⼤で直径5メートル程に拡張できるが、かなりの腕⼒が必要。" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="体内に⽔分を持つ⽣物たちは、ボウが形成する⽔分⼦膜と反発し合うため、網の内側か外側に必ず位置し、展開時に貫通することがないので安全性が⾼い。太陽電池で充電を⾏い、半分の電⼒を失うと、⽔と⼸に戻る。⼸は⽔に浮かぶ。" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="分⼦流体⼒学の権威・海原博⼠のアイデアが元になり、トミノ・スペクティヴ社が実⽤化した。" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_06.png" alt="" />
            </div>
           </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../nano-ball/" hrefNext="../phrem/" isDisabledPrev={false} isDisabledNext={false}  number={5} TotalNumber={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
