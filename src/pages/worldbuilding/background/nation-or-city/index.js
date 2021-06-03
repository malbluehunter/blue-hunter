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

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/nation-or-city/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/nation-or-city/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - 2.国家か、都市か。" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddleWorld>
            <TextHeading text="2.国家か、都市か。" />
            <ContentsLine />
            <TextMedium text="CCZの鉱物資源であるマンガン団塊（多⾦属団塊）は海底の表⾯に広く分布しており、⽯油などとは違って採掘しきった後は⽔平移動を余儀なくされる。そのため、あらかじめ⽔平に拡張を⾒込んだ「海洋都市圏」が計画され、発展した。（下図はグラン＝ムー構想）" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_04.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="あくまで海洋資源の採掘テクノロジーを追求すべく着想されたグラン＝ムーであったが、結果として⾃給⾃⾜可能な⽣活圏の在り⽅、さらには世界的なトレンドであった「次世代ブロックチェーン（フェアチェーン）」の研究開発において劇的な成果を体現する。" />
              <TextMediumSub text="そもそもフェアチェーンの運⽤法たる「タスクシステム」は、2020〜2030年代までバルト3国およびヨーロッパを主体に学校や村といった単位で研究が進められたものであった。まずは初等教育機関において倫理⾯の成果をあげた後、その卒業⽣たちが⾏政および各種事業へ応⽤し、およそ10年をかけ実験的に先鞭をつけたものである。" />
              <TextMediumSub text="いずれは⼤都市、ひいては国家単位で運⽤できるものと期待を寄せられていたタスクシステム。しかしながら、圧倒的に⾼いセキュリティと超⾼速処理を可能にする「次世代ブロックチェーン技術」が不可⽋であり、その実現が最⼤のネックであった。" />
              <TextMediumSub text="2040年代に⼊り、量⼦コンピューティングに基づくブロックチェーン技術「フェアチェーン」が劇的な⾶躍を遂げた。壮⼤な社会実験場として全世界の⽿⽬を集めていたグラン＝ムーは、フェアチェーンを礎とするタスクシステムと⾼い⽣産性に裏打ちされた社会構造に⾒通しを⽴て、国家とは由来の異なる新たな⼈類の⾜場を樹⽴したのである。2045年、第2都市の竣⼯を前に、国連は海洋都市圏グラン＝ムーの独⽴⾃治を認めた。" />
              <TextMediumSub text="グラン＝ムーの成功を受け、2040年代後半には同じCCZ内に海洋都市圏パクシオラが、また⻄太平洋にはコバルトリッチクラスト採掘を⽬的としたジーグ、⼤⻄洋では海嶺のエネルギー利⽤を⽬的としたアトラス等も竣⼯。いずれもMW⽅式とよばれる、タスクシステム／フェアチェーンを基礎とする⾃治を標榜し、多くの学術系・技術系移⺠を募り、受け⼊れた。2050年代後半には北⽶のオルトフランなど地上都市でもMW⽅式の採⽤が進み、国家による旧態依然とした統治は形骸化しつつある。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../grandmw/" hrefNext="../un-to-uic/" isDisabledPrev={false} isDisabledNext={false}  number={4} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
