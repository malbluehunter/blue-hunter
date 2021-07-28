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
    "/comic/02_ja/bh_002_01.png",
    "/comic/02_ja/bh_002_02.png",
    "/comic/02_ja/bh_002_03.png",
    "/comic/02_ja/bh_002_04.png",
    "/comic/02_ja/bh_002_05.png",
    "/comic/02_ja/bh_002_06.png",
    "/comic/02_ja/bh_002_07.png",
    "/comic/02_ja/bh_002_08.png",
    "/comic/02_ja/bh_002_09.png",
    "/comic/02_ja/bh_002_10.png",
    "/comic/02_ja/bh_002_11.png",
    "/comic/02_ja/bh_002_12.png",
    "/comic/02_ja/bh_002_13.png",
    "/comic/02_ja/bh_002_14.png",
    "/comic/02_ja/bh_002_15.png",
    "/comic/02_ja/bh_002_16.png",
    "/comic/02_ja/bh_002_17.png",
    "/comic/02_ja/bh_002_18.png",
    "/comic/02_ja/bh_002_19.png",
    "/comic/02_ja/bh_002_20.png",
    "/comic/02_ja/bh_002_21.png",
    "/comic/02_ja/bh_002_22.png",
    "/comic/02_ja/bh_002_23.png",
    "/comic/02_ja/bh_002_24.png",
    "/comic/02_ja/bh_002_25.png",
    "/comic/02_ja/bh_002_26.png",
    "/comic/02_ja/bh_002_27.png",
    "/comic/02_ja/bh_002_28.png",
    "/comic/02_ja/bh_002_29.png",
    "/comic/02_ja/bh_002_30.png",
    "/comic/02_ja/bh_002_31.png",
    "/comic/02_ja/bh_002_32.png",
    "/comic/02_ja/bh_002_33.png",
    "/comic/02_ja/bh_002_34.png",
    "/comic/02_ja/bh_002_35.png",
    "/comic/02_ja/bh_002_36.png",
    "/comic/02_ja/bh_002_37.png",
    "/comic/02_ja/bh_002_38.png",
    "/comic/02_ja/bh_002_39.png",
    "/comic/02_ja/bh_002_40.png",
    "/comic/02_ja/bh_002_41.png",
    "/comic/02_ja/bh_002_42.png",
    "/comic/02_ja/bh_002_43.png",
    "/comic/02_ja/bh_002_44.png",
    "/comic/02_ja/bh_002_45.png",
    "/comic/02_ja/bh_002_46.png",
    "/comic/02_ja/bh_002_47.png",
    "/comic/02_ja/bh_002_48.png",
    "/comic/02_ja/bh_002_49.png",
    "/comic/02_ja/bh_002_50.png",
    "/comic/02_ja/bh_002_51.png",
    "/comic/02_ja/bh_002_52.png",
    "/comic/02_ja/bh_002_53.png",
    "/comic/02_ja/bh_002_54.png",
    "/comic/02_ja/bh_002_55.png",
    "/comic/02_ja/bh_002_56.png",
    "/comic/02_ja/bh_002_57.png",
    "/comic/02_ja/bh_002_58.png",
    "/comic/02_ja/bh_002_59.png",
    "/comic/02_ja/bh_002_60.png",
    "/comic/02_ja/bh_002_61.png",
    "/comic/02_ja/bh_002_62.png",
    "/comic/02_ja/bh_002_63.png",
    "/comic/02_ja/bh_002_64.png",
    "/comic/02_ja/bh_002_65.png",
    "/comic/02_ja/bh_002_66.png",
    "/comic/02_ja/bh_002_67.png",
    "/comic/02_ja/bh_002_68.png",
    "/comic/02_ja/bh_002_69.png",
    "/comic/02_ja/bh_002_70.png",
    "/comic/02_ja/bh_002_71.png",
    "/comic/02_ja/bh_002_72.png",
    "/comic/02_ja/bh_002_73.png",
    "/comic/02_ja/bh_002_74.png",
    "/comic/02_ja/bh_002_75.png",
    "/comic/02_ja/bh_002_76.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第2話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep2/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep2/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第2話" />
        </div>
        <Label01 text="次回8/6 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep3/" isDisabled={false}>
                  第3話を読む
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
