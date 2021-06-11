import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../components/atoms/TextHeading"
import TextMediumTrim from "../../../components/atoms/TextMediumTrim"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../components/atoms/PageTitle"
import MainContentsTop from "../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../components/organisms/MainContentsBottom"
import NewsContentsInner from "../../../components/organisms/NewsContentsInner"
import BreadShort from "../../../components/molecules/BreadShort"

const NewsPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>News | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/news/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/news/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
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
          <PageTitle src="/news/ttl_news.png" alt="NEWS" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="News" />
        <NewsContentsInner>
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
          </div>
        </NewsContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default NewsPage
