import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextLeading from "../../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../../components/atoms/TextAnnotation"
import TextMediumSub from "../../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../../components/templates/LayoutTwoColumnEn"
import PageTitle from "../../../../../components/atoms/PageTitle"
import Bread from "../../../../../components/molecules/Bread"
import MainContentsTop from "../../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInnerEn"
import PagerArea from "../../../../../components/organisms/PagerArea"
import LocalNavWorld01En from "../../../../../components/templates/LocalNavWorld01En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta
          name="description"
          content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here."
        />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/ccz/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/ccz/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Background - 0. Background Knowledge: CCZ" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Background" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="0. Background Knowledge: CCZ" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium
              text="The Clarion-Clipperton Zone is a submarine fracture zone located between Hawaii and the Clipperton Islands in the Pacific ocean. The area is rich in a type of resource called manganese nodules, the mining of which must be authorised by the International Seabed Authority (based in Kingston, Jamaica). Japan has acquired some mining rights through the private enterprise Deep Oceans Resource Development (DORD). Other countries overseen by the ISA include the UK, Russia, Germany, France, India, China and South Korea. The United States has not ratified the United Nations Convention of the Sea and as such claims mining rights through its own channels.
"
            />
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
          <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="/en/worldbuilding/background/marine-metropolitan-areas/" isDisabledPrev={true} isDisabledNext={false} number={1} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld01En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
