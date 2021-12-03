import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../components/atoms/TextHeading"
import TextMediumTrim from "../../../components/atoms/TextMediumTrim"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumnEn"
import PageTitle from "../../../components/atoms/PageTitle"
import MainContentsTop from "../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../components/organisms/MainContentsBottom"
import NewsContentsInner from "../../../components/organisms/NewsContentsInnerEn"
import BreadShort from "../../../components/molecules/BreadShort"

const NewsPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>News | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/news/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/news/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
          <PageTitle src="/news/ttl_news.png" alt="NEWS" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/en/" page02="News" />
        <NewsContentsInner>
          <div className={styles.contents_02} id="news_10">
            <MainContentsTop pathname={location.pathname} text="November 4, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 9 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The ninth chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep9/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
        <div className={styles.contents_02} id="news_09">
          <MainContentsTop pathname={location.pathname} text="October 14, 2021" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Shortlist of winners revealed; voting for MAL User Prize open!" />
            <ContentsLine pathname={location.pathname} />
            <TextMediumTrim>We are very happy to announce the BLUE HUNTER Art Contest shortlist. Despite receiving so many wonderful entries, the judging panel have narrowed things down to 29 nominees. These works will move on to the final selection process. We have also opened voting for the MAL User Prize, so don’t forget to vote for your favorite nominated work!</TextMediumTrim>
            <div className={styles.img_wrapper}>
              <a href="/en/special/">
                <img src="/common/bnr_art_en.png" alt="" />
              </a>
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
         </div>
         <div className={styles.contents_02} id="news_08">
            <MainContentsTop pathname={location.pathname} text="September 29, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 8 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The eighth chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep8/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_07">
            <MainContentsTop pathname={location.pathname} text="September 9, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Applications to the art contest are now closed" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
              As of September 9, applications for the BLUE HUNTER art competition are now closed. Thank you so much to all of our entrants! Nominees will be announced on October 14.
              </TextMediumTrim>
              <TextMediumTrim>
              We hope you look forward to the announcement!
              </TextMediumTrim>
              <TextMediumTrim>
                The schedule for the remainder of the event is as follows:
              </TextMediumTrim>
              <TextMediumTrim>
                ●Results of Preliminary Selection
              </TextMediumTrim>
              <TextMediumTrim>
                October 14, 2021
              </TextMediumTrim>
              <TextMediumTrim>
                ●Final Selection
              </TextMediumTrim>
              <TextMediumTrim>
                October 14 - October 21, 2021
              </TextMediumTrim>
              <TextMediumTrim>
                ●MAL User Web Vote Selection
              </TextMediumTrim>
              <TextMediumTrim>
                October 14 - October 21, 2021
              </TextMediumTrim>
              <TextMediumTrim>
                ●Announcement of Winning Works
              </TextMediumTrim>
              <TextMediumTrim>
                December 9, 2021
              </TextMediumTrim>
              <TextMediumTrim>
                ※Date of announcements subject to change.
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_06">
            <MainContentsTop pathname={location.pathname} text="August 5, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 7 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The seventh chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep7/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_05">
            <MainContentsTop pathname={location.pathname} text="July 29, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 6 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The sixth chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep6/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_04">
            <MainContentsTop pathname={location.pathname} text="July 20, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 5 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The fifth chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep5/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_03">
            <MainContentsTop pathname={location.pathname} text="July 16, 2021" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="Chapter 4 of the BLUE HUNTER manga now available!" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                The fourth chapter of BLUE HUNTER has been published! <a className={styles.textlink} href="/en/comic/ep4/">Read the latest chapter here &gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
           <div className={styles.contents_02} id="news_02">
              <MainContentsTop pathname={location.pathname} text="July 9, 2021" />
              <MainContentsMiddleWorld pathname={location.pathname}>
                <TextHeading text="500,000 JPY of prizes up for grabs in BLUE HUNTER Art Contest!" />
                <ContentsLine pathname={location.pathname} />
                <TextMediumTrim>To celebrate the launch of BLUE HUNTER, a specially-themed art contest is being opened.</TextMediumTrim>
                <TextMediumTrim>We are looking for works in various different categories showcasing original ideas, forms and settings that will lead to the future technology of the ocean!</TextMediumTrim>
                <TextMediumTrim>We will have plenty of prize categories suitable for people of all ages, so we hope to see many people taking part!</TextMediumTrim>
              </MainContentsMiddleWorld>
              <MainContentsBottom pathname={location.pathname} />
            </div>
            <div className={styles.contents_02} id="news_01">
              <MainContentsTop pathname={location.pathname} text="July 9, 2021" />
              <MainContentsMiddleWorld pathname={location.pathname}>
                <TextHeading text="Welcome to the BLUE HUNTER homepage" />
                <ContentsLine pathname={location.pathname} />
                <TextMediumTrim>The BLUE HUNTER website is now officially open! Here you can find all you need to know about BLUE HUNTER, including all the latest news.</TextMediumTrim>
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
              <TextMediumTrim><a className={styles.textlink} href="#">テキストリンク</a></TextMediumTrim>
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
