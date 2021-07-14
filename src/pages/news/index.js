import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../components/atoms/TextHeading"
import TextMediumTrim from "../../components/atoms/TextMediumTrim"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../components/templates/LayoutTwoColumn"
import PageTitle from "../../components/atoms/PageTitle"
import MainContentsTop from "../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../components/molecules/ContentsLine"
import MainContentsBottom from "../../components/organisms/MainContentsBottom"
import NewsContentsInner from "../../components/organisms/NewsContentsInner"
import BreadShort from "../../components/molecules/BreadShort"

const NewsPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>ニュース | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/news/" />
        <meta property="og:url" content="https://manga.uminohi.jp/news/" />
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
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/news/ttl_news.png" alt="NEWS" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="ニュース" />
        <NewsContentsInner>
          <div className={styles.contents_02} id="news_03">
            <MainContentsTop pathname={location.pathname} text="2021.7.16" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第4話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第4話を公開しました。<a className={styles.textlink} href="/comic/ep4/">マンガの最新話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_02">
            <MainContentsTop pathname={location.pathname} text="2021.7.9" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="賞金総額50万円『BLUE HUNTER アートコンペティション』開催！" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                BLUE HUNTER公開を記念して、BLUE HUNTERをテーマにしたアートコンペの開催が決定いたしました。『BLUE HUNTERアートコンペティション』では「海洋の未来技術を牽引するような、独創的な発想・造形・設定が表現された作品」を、部門別に募集いたします。キッズを対象にした賞もご用意がありますで、幅広い年齢の方にご参加いただけます。たくさんのご応募をお待ちしております！
              </TextMediumTrim>
              <div className={styles.img_wrapper}>
                <a href="https://bha.myanimelist.net">
                  <img src="/common/bnr_art.png" alt="" />
                </a>
              </div>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_01">
            <MainContentsTop pathname={location.pathname} text="2021.7.9" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="サイト公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>このたび、「BLUE HUNTER」の公式Webサイトを公開しました。Webサイトでは、「BLUE HUNTER」の情報や大切なお知らせを随時発信してまいります。</TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          {/* 投稿例をコメントアウト
          <div className={styles.contents_01}>
            <MainContentsTop pathname={location.pathname} text="2021.6.8" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Blue Hunter公式アートコンペ開催Blue Hunter公式アートコンペ開催2行の場合" />
              <ContentsLine pathname={location.pathname} />
              <div className={styles.img_wrapper}>
                <img src="/news/news_img01.png" alt="" />
              </div>
              <div className={styles.text_wrapper}>
                <TextMediumTrim text="「「Blue Hunter」のアートコンペの公募を開始しました。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。「「Blue Hunter」のアートコンペの公募を開始しました。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。ニュースの記事がはいりますダミーテキスト200文字以上は省略して続きを読むボタンが表示される想定です。" />
              </div>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02}>
            <MainContentsTop pathname={location.pathname} text="2021.6.7" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="サイト公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim text="このたび、「Blue Hunter」の公式Webサイトを公開しました。Webサイトでは、「Blue Hunter」の情報や大切なお知らせを随時発信してまいります。" />
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div> */}
        </NewsContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default NewsPage
