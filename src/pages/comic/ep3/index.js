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
    "/comic/03_ja/bh_003_01.png",
    "/comic/03_ja/bh_003_02.png",
    "/comic/03_ja/bh_003_03.png",
    "/comic/03_ja/bh_003_04.png",
    "/comic/03_ja/bh_003_05.png",
    "/comic/03_ja/bh_003_06.png",
    "/comic/03_ja/bh_003_07.png",
    "/comic/03_ja/bh_003_08.png",
    "/comic/03_ja/bh_003_09.png",
    "/comic/03_ja/bh_003_10.png",
    "/comic/03_ja/bh_003_11.png",
    "/comic/03_ja/bh_003_12.png",
    "/comic/03_ja/bh_003_13.png",
    "/comic/03_ja/bh_003_14.png",
    "/comic/03_ja/bh_003_15.png",
    "/comic/03_ja/bh_003_16.png",
    "/comic/03_ja/bh_003_17.png",
    "/comic/03_ja/bh_003_18.png",
    "/comic/03_ja/bh_003_19.png",
    "/comic/03_ja/bh_003_20.png",
    "/comic/03_ja/bh_003_21.png",
    "/comic/03_ja/bh_003_22.png",
    "/comic/03_ja/bh_003_23.png",
    "/comic/03_ja/bh_003_24.png",
    "/comic/03_ja/bh_003_25.png",
    "/comic/03_ja/bh_003_26.png",
    "/comic/03_ja/bh_003_27.png",
    "/comic/03_ja/bh_003_28.png",
    "/comic/03_ja/bh_003_29.png",
    "/comic/03_ja/bh_003_30.png",
    "/comic/03_ja/bh_003_31.png",
    "/comic/03_ja/bh_003_32.png",
    "/comic/03_ja/bh_003_33.png",
    "/comic/03_ja/bh_003_34.png",
    "/comic/03_ja/bh_003_35.png",
    "/comic/03_ja/bh_003_36.png",
    "/comic/03_ja/bh_003_37.png",
    "/comic/03_ja/bh_003_38.png",
    "/comic/03_ja/bh_003_39.png",
    "/comic/03_ja/bh_003_40.png",
    "/comic/03_ja/bh_003_41.png",
    "/comic/03_ja/bh_003_42.png",
    "/comic/03_ja/bh_003_43.png",
    "/comic/03_ja/bh_003_44.png",
    "/comic/03_ja/bh_003_45.png",
    "/comic/03_ja/bh_003_46.png",
    "/comic/03_ja/bh_003_47.png",
    "/comic/03_ja/bh_003_48.png",
    "/comic/03_ja/bh_003_49.png",
    "/comic/03_ja/bh_003_50.png",
    "/comic/03_ja/bh_003_51.png",
    "/comic/03_ja/bh_003_52.png",
    "/comic/03_ja/bh_003_53.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第3話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep3/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep3/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第3話" />
        </div>
        <Label01 text="次回7/30 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep4/" isDisabled={false}>
                  第4話を読む
                </Button>
              </div>
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
