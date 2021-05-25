import React, { useEffect } from "react"
import PageTitle from "../../../components/atoms/PageTitle"
import Header from "../../../components/templates/Header"
import * as styles from "./index.module.scss"
import Pager from "../../../components/molecules/Pager"
import BnrArt from "../../../components/atoms/BnrArt"
import Footer from "../../../components/templates/Footer"
import LocalNav from "../../../components/templates/LocalNav"
import ScrollToTop from "../../../components/atoms/ScrollToTop"
import PagerSp from "../../../components/molecules/PagerSp"
import { Helmet } from "react-helmet"
import BreadShort from "../../../components/molecules/BreadShort"
import ComicArea from "../../../components/organisms/ComicArea"

const ComicPage = () => {
  // マンガ画像を表示順で設定
  const src = ["/comic/img_comic_01.jpg", "/comic/img_comic_02.jpg"]

  return (
    <>
      {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
      <Helmet>
        <html lang="ja" />
        <title>世界観・設定 | 「Blue Hunter」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「Blue Hunter」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="Blue Hunter, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/ccz/" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「Blue Hunter」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
      </Helmet>
      {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}

      <div className={styles.container}>
        <Header />
        <main>
          {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
          <div className={styles.contents_wrapper}>
            <div className={styles.page_title_wrapper}>
              <PageTitle src="/comic/ttl_comic.png" />
            </div>
            <div className={styles.bread_area}>
              {/* パンクズリスト */}
              <BreadShort page01="TOP" href01="/" page02="マンガ - 第2話" />
            </div>
            <div className={styles.contents_inner}>
              <div className={styles.main_contents_area}>
                <ComicArea src={src} />
                <ol class="step">
                  <li class="is-current">STEP1</li>
                  <li>STEP2</li>
                  <li>STEP3</li>
                </ol>
                {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
                <div>
                  <Pager hrefNext="/" hrefPrev="/" disabledNext={false} isDisabledPrev={true} />
                  <PagerSp />
                </div>
                <div className={styles.bnr_area}>
                  <BnrArt />
                </div>
              </div>
              <div className={styles.localNav_area}>
                <LocalNav />
              </div>
            </div>
          </div>
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ComicPage
