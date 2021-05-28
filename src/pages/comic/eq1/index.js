import React from "react"
import PageTitle from "../../../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import PagerSp from "../../../components/molecules/PagerSp"
import { Helmet } from "react-helmet"
import BreadShort from "../../../components/molecules/BreadShort"
import ComicArea from "../../../components/organisms/ComicArea"
import PagerComic from "../../../components/molecules/PagerComic"
import ComicSnsArea from "../../../components/molecules/ComicSnsArea"
import LayoutTwoColumnComic from "../../../components/templates/LayoutTwoColumnComic"
import ComicContentsInner from "../../../components/organisms/ComicContentsInner"
import Button from "../../../components/atoms/Button"
import LabelComic from "../../../components/molecules/LabelComic"

const ComicPage = () => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = ["/comic/img_comic_01.jpg", "/comic/img_comic_02.jpg"]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumnComic>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/comic/ttl_comic.png" />
        </div>
        {/* パンクズリスト */}
        <div className={styles.bread_wrapper}>
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第2話" />
        </div>
        <LabelComic text="【全13話】毎週x曜日最新話公開！" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ComicSnsArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/" isGray={false}>
                  第3話を読む
                </Button>
              </div>
              <div className={styles.btn_plan}>
                <Button href="/" isGray={true}>
                  次回8/x 配信予定
                </Button>
              </div>
            </div>
          </div>
        </ComicContentsInner>
      </LayoutTwoColumnComic>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default ComicPage
