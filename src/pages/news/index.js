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
        <div className={styles.contents_02} id="news_11">
            <MainContentsTop pathname={location.pathname} text="2021.12.3" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第10話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第10話を公開しました。<a className={styles.textlink} href="/comic/ep10/">マンガの最新話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
         <div className={styles.contents_02} id="news_10">
            <MainContentsTop pathname={location.pathname} text="2021.11.1" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第9話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第9話を公開しました。<a className={styles.textlink} href="/comic/ep9/">マンガの最新話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_09">
            <MainContentsTop pathname={location.pathname} text="2021.10.15" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="ノミネート作品発表・Web投票開始しました！" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
              いよいよ『BLUE HUNTER アートコンペティション』のノミネート作品の発表です。アートコンペティション事務局による厳正な選考のもと、29作品が選ばれました！これから最終審査です。また、みんなの人気投票で決定するMAL賞のWeb投票も開始されました。MyAnimeListのアカウントをお持ちの方は自分の好きな作品をひとつ選んで投票してください。
              </TextMediumTrim>
              <TextMediumTrim>
              ※投票にはMyAnimeList IDが必要です。
              </TextMediumTrim>
              <div className={styles.img_wrapper}>
                <a href="/special/">
                  <img src="/common/bnr_art.png" alt="" />
                </a>
              </div>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_08">
            <MainContentsTop pathname={location.pathname} text="2021.9.30" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第8話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第8話を公開しました。<a className={styles.textlink} href="/comic/ep8/">第8話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_07">
            <MainContentsTop pathname={location.pathname} text="2021.9.10" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="作品の募集を締め切りました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
              『BLUE HUNTER アートコンペティション』の作品募集は、9月10日をもって締め切らせていただきました。たくさんのご応募、ありがとうございました！
              ノミネート作品発表は10月15日を予定しております。発表まで今しばらくお待ちください。
              </TextMediumTrim>
              <TextMediumTrim>
                今後のスケジュールは下記の通りです。
              </TextMediumTrim>
              <TextMediumTrim>
                ●一次選考結果発表
              </TextMediumTrim>
              <TextMediumTrim>
                2021年10月15日
              </TextMediumTrim>
              <TextMediumTrim>
                ●最終審査期間
              </TextMediumTrim>
              <TextMediumTrim>
                2021年10月15日〜10月22日
              </TextMediumTrim>
              <TextMediumTrim>
                ●MALユーザーWeb投票期間
              </TextMediumTrim>
              <TextMediumTrim>
                2021年10月15日〜10月22日
              </TextMediumTrim>
              <TextMediumTrim>
                ●受賞作品結果発表
              </TextMediumTrim>
              <TextMediumTrim>
                2021年12月10日
              </TextMediumTrim>
              <TextMediumTrim>
                ※結果発表は日時が変更される場合がございます
              </TextMediumTrim>
              
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_06">
            <MainContentsTop pathname={location.pathname} text="2021.8.6" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第7話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第7話を公開しました。<a className={styles.textlink} href="/comic/ep7/">第7話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_05">
            <MainContentsTop pathname={location.pathname} text="2021.7.30" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第6話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第6話を公開しました。<a className={styles.textlink} href="/comic/ep6/">第6話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_04">
            <MainContentsTop pathname={location.pathname} text="2021.7.21" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第5話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第5話を公開しました。<a className={styles.textlink} href="/comic/ep5/">第5話はこちら&gt;</a>
              </TextMediumTrim>
            </MainContentsMiddleWorld>
            <MainContentsBottom pathname={location.pathname} />
          </div>
          <div className={styles.contents_02} id="news_03">
            <MainContentsTop pathname={location.pathname} text="2021.7.16" />
            <MainContentsMiddleWorld pathname={location.pathname}>
              <TextHeading text="第4話を公開しました" />
              <ContentsLine pathname={location.pathname} />
              <TextMediumTrim>
                マンガ第4話を公開しました。<a className={styles.textlink} href="/comic/ep4/">第4話はこちら&gt;</a>
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
