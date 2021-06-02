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
import HeadLink from "../../../../components/templates/Headlink"

const WorldPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/bluehunter/classes/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/bluehunter/classes/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
      </Helmet>
      <HeadLink />

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="ブルーハンター組織図 - 認定海洋保全官「BLUE HUNTER」の階級" />
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
