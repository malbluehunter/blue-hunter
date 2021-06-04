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

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/bluehunter/classes/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/bluehunter/classes/" />
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
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="ブルーハンター組織図 - 認定海洋保全官「BLUE HUNTER」の階級" />
        <WorldContentsInner>
          <MainContentsTop text="ブルーハンター組織図" />
          <MainContentsMiddleWorld>
            <TextHeading text="認定海洋保全官「BLUE HUNTER」の階級" />
            <ContentsLine />
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="class -クラス-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ハンター評議会（カウンシル）に所属するハンターの階級。クラスアップはLv、DpやBkなど（後述）を総合し、かつ評議会が実績を値踏みして決定する。⽣頼とミネルヴァはclass=5、JAZzとビリー＝class4、渚＝class3、⽉⼈とホーク＝class１。カケルは⽬下、class0。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="ハンターランキング" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="各class毎に公開されているランキング。クラスアップに関わる5つの指標が計算に採⽤されており、善⾏（+Tk、ゲイン）を重ねただけでは伸びない。カケルはclass=0の中で50位前後をうろうろしている。史上最年少でclass=1に昇格を果たした⽉⼈とホークは現在トップ20にランクインし、class2への昇格間近と⾔われている。" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_ bluehunter_01.png" alt="" />
            </div>
            </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../guilds/" hrefNext="" isDisabledPrev={false} isDisabledNext={true}  number={2} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
