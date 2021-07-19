import React from "react"
import PageTitle from "../../../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import BreadShort from "../../../components/molecules/BreadShort"
import ComicArea from "../../../components/organisms/ComicArea"
import ShareArea from "../../../components/molecules/ShareArea"
import LayoutTwoColumnComic from "../../../components/templates/LayoutTwoColumnComic"
import ComicContentsInner from "../../../components/organisms/ComicContentsInner"
import Button from "../../../components/atoms/Button"
import Label01 from "../../../components/molecules/Label01"

const ComicPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = [
    "/comic/06_ja/bh_006_01.png",
    "/comic/06_ja/bh_006_02.png",
    "/comic/06_ja/bh_006_03.png",
    "/comic/06_ja/bh_006_04.png",
    "/comic/06_ja/bh_006_05.png",
    "/comic/06_ja/bh_006_06.png",
    "/comic/06_ja/bh_006_07.png",
    "/comic/06_ja/bh_006_08.png",
    "/comic/06_ja/bh_006_09.png",
    "/comic/06_ja/bh_006_10.png",
    "/comic/06_ja/bh_006_11.png",
    "/comic/06_ja/bh_006_12.png",
    "/comic/06_ja/bh_006_13.png",
    "/comic/06_ja/bh_006_14.png",
    "/comic/06_ja/bh_006_15.png",
    "/comic/06_ja/bh_006_16.png",
    "/comic/06_ja/bh_006_17.png",
    "/comic/06_ja/bh_006_18.png",
    "/comic/06_ja/bh_006_19.png",
    "/comic/06_ja/bh_006_20.png",
    "/comic/06_ja/bh_006_21.png",
    "/comic/06_ja/bh_006_22.png",
    "/comic/06_ja/bh_006_23.png",
    "/comic/06_ja/bh_006_24.png",
    "/comic/06_ja/bh_006_25.png",
    "/comic/06_ja/bh_006_26.png",
    "/comic/06_ja/bh_006_27.png",
    "/comic/06_ja/bh_006_28.png",
    "/comic/06_ja/bh_006_29.png",
    "/comic/06_ja/bh_006_30.png",
    "/comic/06_ja/bh_006_31.png",
    "/comic/06_ja/bh_006_32.png",
    "/comic/06_ja/bh_006_33.png",
    "/comic/06_ja/bh_006_34.png",
    "/comic/06_ja/bh_006_35.png",
    "/comic/06_ja/bh_006_36.png",
    "/comic/06_ja/bh_006_37.png",
    "/comic/06_ja/bh_006_38.png",
    "/comic/06_ja/bh_006_39.png",
    "/comic/06_ja/bh_006_40.png",
    "/comic/06_ja/bh_006_41.png",
    "/comic/06_ja/bh_006_42.png",
    "/comic/06_ja/bh_006_43.png",
    "/comic/06_ja/bh_006_44.png",
    "/comic/06_ja/bh_006_45.png",
    "/comic/06_ja/bh_006_46.png",
    "/comic/06_ja/bh_006_47.png",
    "/comic/06_ja/bh_006_48.png",
    "/comic/06_ja/bh_006_49.png",
    "/comic/06_ja/bh_006_50.png",
    "/comic/06_ja/bh_006_51.png",
    "/comic/06_ja/bh_006_52.png",
    "/comic/06_ja/bh_006_53.png",
    "/comic/06_ja/bh_006_54.png",
    "/comic/06_ja/bh_006_55.png",
    "/comic/06_ja/bh_006_56.png",
    "/comic/06_ja/bh_006_57.png",
    "/comic/06_ja/bh_006_58.png",
    "/comic/06_ja/bh_006_59.png",
    "/comic/06_ja/bh_006_60.png",
    "/comic/06_ja/bh_006_61.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第6話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep6/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep6/" />
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
      <LayoutTwoColumnComic pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/comic/ttl_comic.png" alt=""/>
        </div>
        {/* パンクズリスト */}
        <div className={styles.bread_wrapper}>
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第6話" />
        </div>
        <Label01 text="次回7/30 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              {/* <div className={styles.btn_next}>
                <Button href="/comic/ep7/" isDisabled={false}>
                  第7話を読む
                </Button>
              </div> */}
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回7/21 配信予定</Button>
              </div> */}
            </div>
          </div>
        </ComicContentsInner>
      </LayoutTwoColumnComic>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default ComicPage
