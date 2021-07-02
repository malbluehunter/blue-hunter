import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/grandmw/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/grandmw/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="物語の背景 - グラン=ムー【GRAND/MW】" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
            <MainContentsTop pathname={location.pathname} text="物語の背景" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="グラン=ムー【GRAND/MW】" />
              <ContentsLine pathname={location.pathname} />
              <div className={styles.textLeading_wrapper}>
                <TextLeading pathname={location.pathname} text="概要" />
              </div>
              <div className={styles.textMediumSub_wrapper}>
                <TextMediumSub text="ハワイ南東に位置する資源が豊富な海底領域「CCZ」の開発と環境保護を⽬的に展開された海洋都市圏の⼀つ。展開位置はキリバスのあるライン諸島に近い。特定の国家に従属しないことで国連に認定された初の「超都」である。" />
                <TextMediumSub text="2041年に竣⼯した第1都市テトラム（Tetra/M）に端を発し、第2都市ペンタム（Penta/M）、第3都市ヘキサム（Hexa/M）が相次いで建造され、2059年に稼働を開始した第4都市オクタム（Octa/M）が現在は都幹（ciggo）を担う。今後、10年をかけてオクタムの倍の広さを誇る第5都市デケイム（Deca/M）の竣⼯を⽬指している。（下図は「オクタム」）" />
                <TextMediumSub text="したがって数多ある海洋都市圏の中でもっとも古参に類し、同じCCZの東端にあるパクシオラ（Paxiora：北⽶沿岸のカリフォルニア沖クラリオン島近傍に展開）とともに、UiC（超都連）の中核を担っている。" />
              </div>
              <div className={styles.img_wrapper}>
                <img src="/world/world_img_background_03.png" alt="" />
              </div>
              <div className={styles.textLeading_wrapper}>
                <TextLeading pathname={location.pathname} text="民族" />
              </div>
              <div className={styles.textMediumSub_wrapper}>
                <TextMediumSub text="⽇系、フランス系、⽶国系、ポリネシア・ミクロネシア系、など多様な移⺠で構成される。現在、全都⺠は13.6万⼈。オクタムには2万⼈が移住を終えている。" />
              </div>
              <div className={styles.textLeading_wrapper}>
                <TextLeading pathname={location.pathname} text="位置" />
              </div>
              <div className={styles.textMediumSub_wrapper}>
                <TextMediumSub text="キリバス共和国の東端（クリスマス島）からさらに東へ500kmほど伸びる。デケイムで1000kmまで延伸予定。" />
              </div>
              <div className={styles.textLeading_wrapper}>
                <TextLeading pathname={location.pathname} text="経済・政治" />
              </div>
              <div className={styles.textMediumSub_wrapper}>
                <TextMediumSub text="開発⺟体となったのはMWVC (MwVisionComitee：CCZに関係する百以上の研究機関・事業体）。第1都市の段階で農産・⽔産・鉱物資源およびエネルギーの⾃給⾃⾜を達成し、またフェアチェーンを基礎とする⾼度な独⽴⾃治（MW⽅式）を標榜。壮⼤なモデルケースとなり、⼈類社会を牽引し続けている。" />
              </div>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
            {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
            <PagerArea pathname={location.pathname} hrefPrev="/worldbuilding/background/marine-metropolitan-areas/" hrefNext="/worldbuilding/background/nation-or-city/" isDisabledPrev={false} isDisabledNext={false} number={3} TotalNumber={10} />
            {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
          </WorldContentsInner>
          <LocalNavWorld01 pathname={location.pathname} />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
