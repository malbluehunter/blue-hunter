import React from "react"
import PageTitle from "../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import BreadShort from "../components/molecules/BreadShort"
import ComicArea from "../components/organisms/ComicArea"
import ShareArea from "../components/molecules/ShareArea"
import LayoutTop from "../components/templates/LayoutTop"
import ComicContentsInner from "../components/organisms/ComicContentsInner"
import Button from "../components/atoms/Button"
import Label01 from "../components/molecules/Label01"
import HeadLink from "../components/templates/Headlink"
import BnrArt from "../components/atoms/BnrArt"

const TopPage = () => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = ["/comic/img_comic_01.jpg", "/comic/img_comic_02.jpg"]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/eq1/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/eq1/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
      </Helmet>
      <HeadLink />

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTop>
        <div className={styles.contents_inner}>
          <div className={styles.description}>
            <img src="/top/description_top.png" alt="" />
          </div>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <ShareArea />
          <div className={styles.btn_wrapper}>
            <div className={styles.btn_next}>
              <Button href="#" isDisabled={false}>
                第3話を読む
              </Button>
            </div>
            <div className={styles.btn_plan}>
              <Button isDisabled={true}>次回8/x 配信予定</Button>
            </div>
          </div>
          <div className={styles.bnr_area}>
            <BnrArt />
          </div>
        </div>
      </LayoutTop>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default TopPage
