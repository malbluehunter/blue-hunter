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
import LocalNavWorld04 from "../../../../components/templates/LocalNavWorld04"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/machinery/phrem/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/machinery/phrem/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="メカ・アイテム - -フレン-" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="メカ・アイテム" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="-フレン-" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="個⼈が⾝体に装着するTkエンコーダ＆メモリー機能付きAIデバイス。カケルの場合は腕に装着している。マイAIを搭載し、使役する個⼈が愛称で呼ぶことは可能（カケルのフレンは「オヤジ」で起動）だが、マイAIとしての正式名称は個⼈の識別番号に紐付けられている（1⼈あたり1体のみ）。" />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="フレンはTkの計測性能によってローエンド（±144）、ミドルレンジ（±720）、ハイエンド（±1440）と分かれている。カケルのフレンはミドルレンジで、1⽇あたり最⼤720Tkまでの蓄積が可能。たとえば蓄積されたTkが100だと、カケルが「本⽇の稼ぎはお幾ら万円？」と聞けば、0.1と表⽰してくれる。" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ミドルレンジのフレンは消費電⼒を抑える⽬的で（屋外での視認性も考慮されている）、モノクロ表⽰になっていることが多い。視認性を⾼めるにはΣグラスを使う。ハンターが使うフレンは耐⽔圧能に⾼いスペックが求められ、カケルのフレン「オヤジ」には300m級のコーティングが施されている。" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="また、カケルのフレンはホログラムプロジェクション機能を有している。" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_07.png" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/worldbuilding/machinery/netbow/" hrefNext="/worldbuilding/machinery/my-ai/" isDisabledPrev={false} isDisabledNext={false}  number={6} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
