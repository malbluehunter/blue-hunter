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
import LocalNavWorld01 from "../../../../components/templates/LocalNavWorld01"

const WorldPage = ({ location }) => {
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="物語の背景 - The Encyclopedia of ”Octa/M”(4)" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="物語の背景" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="The Encyclopedia of ”Octa/M”(4)" />
            <ContentsLine pathname={location.pathname} />
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_background_08_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_background_08.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_background_08_sp.png" alt="" />
              </picture>
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
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/worldbuilding/background/seaforce/" hrefNext="" isDisabledPrev={false} isDisabledNext={true}  number={10} TotalNumber={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld01 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
