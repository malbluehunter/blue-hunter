import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextLeading from "../../../../components/atoms/TextLeading"
import TextAnnotatioxn from "../../../../components/atoms/TextAnnotation"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="物語の背景 - 0.予備知識としてのCCZ" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
            <MainContentsTop pathname={location.pathname} text="物語の背景" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="0.予備知識としてのCCZ" />
              <ContentsLine pathname={location.pathname} />
              <TextMedium text="2020年現在、ハワイ南東沖にあるクラリオン断層帯とクリッパートン断層帯に囲まれたCCZ（クラリオン・クリッパートン領域）は、鉱物資源であるマンガン団塊が豊富に存在し、海洋法に基づく国際海底機構（本部はジャマイカ）がその採掘権を管理している。⽇本も⼀部、採掘権を⺠間企業DORD経由で取得。他に英国、ロシア、ドイツ、フランス、インド、中国、韓国など。アメリカは海洋法を批准しないが、独⾃のルートにて採掘権を主張している。" />
              {/* クライアント確認のためコメントアウト */}
              {/* <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="見出しパターン" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン。" />
            </div>
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="＊注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン。" />
            </div> */}
              {/* テーブル(見出しあり) 開始 */}
              {/* <div className={styles.table_leading_wrapper}>
              <table className={styles.table_leading}>
                <tr className={styles.table_tr}>
                  <th></th>
                  <th className={styles.table_th}>世界の動向</th>
                  <th className={styles.table_th}>技術の動向</th>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2033</td>
                  <td className={styles.td_item}>
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                  </td>
                  <td className={styles.td_item}>
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2034</td>
                  <td className={styles.td_item}>
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                  </td>
                  <td className={styles.td_item}>
                    ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。
                  </td>
                </tr>
              </table>
            </div> */}
              {/* テーブル(見出しあり) 終了 */}

              {/* テーブル(見出しなし) 開始 */}
              {/* <div className={styles.table_sub_wrapper}>
              <table className={styles.table_sub}>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>
                    ギルド
                    <br />
                    (調査部・2〜)
                  </td>
                  <td className={styles.td_item}>
                    ギルドマスター
                    <br />
                    （艦長が兼務）
                  </td>
                  <td className={styles.td_item}>
                    誘導士
                    <br />
                    Seeker
                  </td>
                  <td className={styles.td_item}>
                    ダミーテキストです。ダミーテキストです。ダミーテキストです。
                    <br className={styles.view_sp} />
                    ダミーテキストです。ダミーテキストです。ダミーテキストです。
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    保育士
                    <br />
                    Protector
                  </td>
                  <td className={styles.td_item}>ダミーテキストです。ダミーテキストです。</td>
                </tr>
              </table>
            </div> */}
              {/* テーブル(見出しなし) 終了 */}
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
            {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
            <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="/worldbuilding/background/marine-metropolitan-areas/" isDisabledPrev={true} isDisabledNext={false} number={1} TotalNumber={10} />
            {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
          </WorldContentsInner>
          <LocalNavWorld01 pathname={location.pathname} />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
