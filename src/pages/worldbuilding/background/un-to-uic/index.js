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

const WorldPage = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/un-to-uic/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/un-to-uic/" />
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
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - 3.国連から超都連へ。" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddleWorld>
            <TextHeading text="3.国連から超都連へ。" />
            <ContentsLine />
            <TextMedium text="2020〜2040年にかけ、国家単位での利害調整を担う国連（UN = United Nations）は地球環境の保全において充分な役割を果たせず、形骸化し、その存在意義が問われていた。20世紀由来の国家という枠組み、その利害のベースにある⾃由経済／資本主義社会、それらの有り様を踏み越えた環境問題の解決。⼈類は何もかも問い直す時期に差し掛かっていたのである。" />
            <TextMedium text="そんな折、新たな統治スタイルとしてグラン＝ムーが確⽴したフェアチェーン由来の「MW⽅式」が脚光を浴び、それを共通基盤とする都市圏同⼠の交流＝iRCOT（超都代表委員会）もまた国連に変わり得る存在とみなされ、⼤きな期待を集めていく。" />
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="超都（iC = independent cities）" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="直訳は「独⽴都市」。国際連合の「国際」など、国家間を意味する⾔葉にかわり、都市と都市の間で結ばれる条約などに冠される接辞語。超都代表委員会、超都統海軍など。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="iRCOT（iCitiesRepresentative Committee・・・超都代表委員会）" />
              <TextLeading text="UiC（United iC・・・超都連" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="2040年代中盤にはグラン＝ムーを⼿本とする海洋都市圏パクシオラ（CCZ東端）などが次々と竣⼯。それを受けて初期の計画⺟体MWVCは解体され、複数都市圏を統括するiRCOTの発⾜が2044年に宣⾔された。" />
              <TextMediumSub text="iRCOTはフェアチェーンを基盤とする斬新な施策を次々と打ち出し、テストケースとして⼈類社会の未来図を描き続けている。国連はそのiRCOTを取り込む形で、2047年には国都連（UNiC・・・United Nations or iCities）を発⾜させた。しかし結局のところは機能せず、2050年のUiC（超都連）創⽴を促す呼び⽔となっただけであった。" />
              <TextMediumSub text="UiCはiRCOTの路線を継承したが、陸上の独⽴都市圏であるオルトフラン（旧・⽶国カリフォルニア州）などを含む点でやや異なり、また安全保障および警察機構の⾼度な連携についても議論を重ね、国連軍に代替するUiC Navy（超都統海軍）等を発⾜させた。例年、各都市圏は代表団を出して年次超都総会を開き、環境保全のガイドラインや超都法を議論し、数年に⼀度は事務総⻑を選んでいる。" />
            </div>
            <div className={styles.table_leading_wrapper}>
              <table className={styles.table_leading}>
                <tr className={styles.table_tr}>
                  <th></th>
                  <th className={styles.table_th}>世界の動向</th>
                  <th className={styles.table_th}>技術の動向</th>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2033</td>
                  <td className={styles.td_item}>
                    グラン＝ムー着⼯
                    <br className={styles.view_sp} />
                    （第１都市）
                  </td>
                  <td className={styles.td_item}>
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2034</td>
                  <td className={styles.td_item}>
                    パクシオラ、ジーグ、アトラス、
                    <br className={styles.view_sp} />
                    グラズヘイム着⼯
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    フェアチェーン・
                    <br className={styles.view_sp} />
                    シーフォースの基礎技術を確⽴
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2041</td>
                  <td className={styles.td_item}>
                    グラン＝ムー第１都市竣⼯、
                    <br className={styles.view_sp} />
                    第２都市着工
                  </td>
                  <td className={styles.td_item}>
                    MW式タスクシステム
                    <br className={styles.view_sp} />
                    運⽤開始
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2044</td>
                  <td className={styles.td_item}>
                    パクシオラ第１都市竣⼯、
                    <br className={styles.view_sp} />
                    iRCOT（超都代表委員会）発足
                  </td>
                  <td className={styles.td_item}>
                    超都連携型MW式タスクシステム
                    <br className={styles.view_sp} />
                    運⽤開始
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2045</td>
                  <td className={styles.td_item}>
                    国連がグラン＝ムー、パクシオラ
                    <br className={styles.view_sp} />
                    ほか５つの海洋都市圏について
                    <br className={styles.view_sp} />
                    ⾃治を承認
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2047</td>
                  <td className={styles.td_item}>
                    UNiC（国都連）発⾜
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2050</td>
                  <td className={styles.td_item}>
                    UiC（超都連）発⾜、
                    <br className={styles.view_sp} />
                    海洋9都市圏、
                    <br className={styles.view_sp} />
                    地上12都市圏が参画
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
              </table>
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../nation-or-city/" hrefNext="../octam1/" isDisabledPrev={false} isDisabledNext={false}  number={5} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
