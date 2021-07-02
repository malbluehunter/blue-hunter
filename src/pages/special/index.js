import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../components/atoms/PageTitle"
import BreadShort from "../../components/molecules/BreadShort"
import MainContentsMiddle from "../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../components/templates/LayoutTwoColumn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TextHeading from "../../components/atoms/TextHeading"
import TextMedium from "../../components/atoms/TextMedium"
import LineImg from "../../components/atoms/LineImg"
import LineImgSp from "../../components/atoms/LineImgSp"
import Label05 from "../../components/molecules/Label05"
import Label04 from "../../components/molecules/Label04"
import TextLarge from "../../components/atoms/TextLarge"

const SpecialPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>スペシャル | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/special/" />
        <meta property="og:url" content="https://manga.uminohi.jp/special/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/special/ttl_special.png" alt="Special" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="スペシャル" />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.section01}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text="最終選考審査会(仮）" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="表彰イベントの当日の様子を公開しています。などの簡単な説明文が入ります。表彰イベントの当日の様子を公開しています。などの簡単な説明文が入ります。" />
                </div>
                <div className={styles.video}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/0jqxkDfmvYo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.section02}>
                <div className={`${styles.textHeading_wrapper} ${styles.view_pc}`}>
                  <TextHeading text={"アートコンペ受賞者結果発表"} />
                </div>
                <div className={`${styles.textHeading_wrapper} ${styles.view_sp}`}>
                  <TextHeading text={"アートコンペ受賞者\n結果発表"} />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="Blue Hunter 大賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 50万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/special_img01.jpg" alt="" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="作品タイトルが入ります" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="山田 太郎" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "受賞者による作品の説明が入ります。（ナラティブです。）\n私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。"
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="審査員特別賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 10万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/special_img01.jpg" alt="" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="作品タイトルが入ります" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="山田 太郎" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "受賞者による作品の説明が入ります。（ナラティブです。）\n私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。"
                    }
                  />
                </div>
              </div>
              <div className={styles.dot_wrapper}>
                <img src="/special/dot_img.png" alt="・・・" />
              </div>
              <div className={styles.section02}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text="アートコンペ概要" />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                {/* テーブル(見出しなし) 開始 */}
                <div className={styles.table_sub_wrapper}>
                  <table className={styles.table_sub}>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>テーマ</td>
                      <td className={styles.td_item}>
                        ブルーハンターの世界を4つのテーマに分けて、アート作品を募集。
                        <br />
                        （１）メカ部門・・・ハンターたちが使いそうなアイテムや乗り物
                        <br />
                        （２）生物部門・・・ブルーハンターの世界に存在しそうな生き物
                        <br />
                        （３）ランドスケープ部門・・・温暖化や海面上昇が進んだ都市風景、温暖化が解消された建造物やインフラなど
                        <br />
                        （４）ブルーハンター部門・・・あなたが考える新キャラクターのデザイン
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>賞</td>
                      <td className={styles.td_item}>
                        ・BH大賞　賞金50万円
                        <br />
                        ・審査員特別賞　賞金10万円
                        <br />
                        ・ナラティブ賞　賞金10万円
                        <br />
                        ・MALユーザー賞　賞金5万円
                        <br />
                        ・メカ部門賞　賞金5万円
                        <br />
                        ・生物部門賞　賞金5万円
                        <br />
                        ・ランドスケープ部門賞　賞金5万円
                        <br />
                        ・ブルーハンター部門賞　賞金5万円
                        <br />
                        ・キッズ部門賞　賞金5万円
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>応募期間</td>
                      <td className={styles.td_item}>2020年6月7日（月）〜8月30日（月）</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Web投票期間</td>
                      <td className={styles.td_item}>2020年8月x日（x）〜x月x日（x）</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>応募総数</td>
                      <td className={styles.td_item}>1000件</td>
                    </tr>
                  </table>
                </div>
                {/* テーブル(見出しなし) 終了 */}
                <div className={styles.text_wrapper}>
                  <TextMedium text={"受賞者におかれましては、おめでとうございます。また、今回アートコンペに参加していただいたすべての皆さまに、心より感謝申し上げます。"} />
                </div>
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default SpecialPage
