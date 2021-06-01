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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/octam4/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/octam4/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - The Encyclopedia of ”Octa/M”(4)" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddleWorld>
            <TextHeading text="The Encyclopedia of ”Octa/M”(4)" />
            <ContentsLine />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_08.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMedium text="第1層（インスラム）の居住空間は主に⾼さ200mある8本のタワーと、20〜30mほど厚みのある外壁部。海⽔で満たされたケイヴ（空洞）を⾒下ろすのが主な景観で、ケイヴ⾃体には太陽電池をスルーする形でうまく外光が取り⼊れられており、適度に明るい。またケイヴは8箇所の⽳があいており、港と呼ばれ、外洋と繋がっている。" />
              <TextMedium text="8本のタワーはTower-1〜Tower-8まで番号が振られており、基本的に同じ機能を備えている。各々にマリーナがあり、⾼さ50m・⻑さ200mまでの船が停泊可能。マリーナはインスラム中央部のラグーンと地続きだが、外洋から来た船はラグーンへ⼊れない。" />
              <TextMedium text="また、ラグーン近傍には来客⽤の宿泊施設がある。8本のタワー上部にある⾵⼒発電機は、気象条件によってはインスラム内部へと格納される。" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_09.png" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../seaforce/" hrefNext="" isDisabledPrev={false} isDisabledNext={true}  number={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
