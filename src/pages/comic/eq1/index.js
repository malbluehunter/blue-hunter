import React from "react"
import PageTitle from "../../../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import BreadShort from "../../../components/molecules/BreadShort"
import ComicArea from "../../../components/organisms/ComicArea"
import ComicSnsArea from "../../../components/molecules/ComicSnsArea"
import LayoutTwoColumnComic from "../../../components/templates/LayoutTwoColumnComic"
import ComicContentsInner from "../../../components/organisms/ComicContentsInner"
import Button from "../../../components/atoms/Button"
import Label01 from "../../../components/molecules/Label01"

const ComicPage = () => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = ["/comic/img_comic_01.jpg", "/comic/img_comic_02.jpg"]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
      {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第1話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/eq1/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/eq1/" />
      {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="../../../../static/common/nav_text_news_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_comic_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_world_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_characters_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_staff_hover.png"/>
        <link rel="preload" as="image" href="../../../../static/common/nav_text_special_hover.png"/>
      </Helmet>

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
        <Label01 text="【全13話】毎週x曜日最新話公開！" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ComicSnsArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="#" isDisabled={false}>
                  第3話を読む
                </Button>
              </div>
              <div className={styles.btn_plan}>
                <Button isDisabled={true}>
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
