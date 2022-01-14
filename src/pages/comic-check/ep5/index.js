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
    "/comic/05_ja/bh_005_01.png",
    "/comic/05_ja/bh_005_02.png",
    "/comic/05_ja/bh_005_03.png",
    "/comic/05_ja/bh_005_04.png",
    "/comic/05_ja/bh_005_05.png",
    "/comic/05_ja/bh_005_06.png",
    "/comic/05_ja/bh_005_07.png",
    "/comic/05_ja/bh_005_08.png",
    "/comic/05_ja/bh_005_09.png",
    "/comic/05_ja/bh_005_10.png",
    "/comic/05_ja/bh_005_11.png",
    "/comic/05_ja/bh_005_12.png",
    "/comic/05_ja/bh_005_13.png",
    "/comic/05_ja/bh_005_14.png",
    "/comic/05_ja/bh_005_15.png",
    "/comic/05_ja/bh_005_16.png",
    "/comic/05_ja/bh_005_17.png",
    "/comic/05_ja/bh_005_18.png",
    "/comic/05_ja/bh_005_19.png",
    "/comic/05_ja/bh_005_20.png",
    "/comic/05_ja/bh_005_21.png",
    "/comic/05_ja/bh_005_22.png",
    "/comic/05_ja/bh_005_23.png",
    "/comic/05_ja/bh_005_24.png",
    "/comic/05_ja/bh_005_25.png",
    "/comic/05_ja/bh_005_26.png",
    "/comic/05_ja/bh_005_27.png",
    "/comic/05_ja/bh_005_28.png",
    "/comic/05_ja/bh_005_29.png",
    "/comic/05_ja/bh_005_30.png",
    "/comic/05_ja/bh_005_31.png",
    "/comic/05_ja/bh_005_32.png",
    "/comic/05_ja/bh_005_33.png",
    "/comic/05_ja/bh_005_34.png",
    "/comic/05_ja/bh_005_35.png",
    "/comic/05_ja/bh_005_36.png",
    "/comic/05_ja/bh_005_37.png",
    "/comic/05_ja/bh_005_38.png",
    "/comic/05_ja/bh_005_39.png",
    "/comic/05_ja/bh_005_40.png",
    "/comic/05_ja/bh_005_41.png",
    "/comic/05_ja/bh_005_42.png",
    "/comic/05_ja/bh_005_43.png",
    "/comic/05_ja/bh_005_44.png",
    "/comic/05_ja/bh_005_45.png",
    "/comic/05_ja/bh_005_46.png",
    "/comic/05_ja/bh_005_47.png",
    "/comic/05_ja/bh_005_48.png",
    "/comic/05_ja/bh_005_49.png",
    "/comic/05_ja/bh_005_50.png",
    "/comic/05_ja/bh_005_51.png",
    "/comic/05_ja/bh_005_52.png",
    "/comic/05_ja/bh_005_53.png",
    "/comic/05_ja/bh_005_54.png",
    "/comic/05_ja/bh_005_55.png",
    "/comic/05_ja/bh_005_56.png",
    "/comic/05_ja/bh_005_57.png",
    "/comic/05_ja/bh_005_58.png",
    "/comic/05_ja/bh_005_59.png",
    "/comic/05_ja/bh_005_60.png",
    "/comic/05_ja/bh_005_61.png",
    "/comic/05_ja/bh_005_62.png",
    "/comic/05_ja/bh_005_63.png",
    "/comic/05_ja/bh_005_64.png",
    "/comic/05_ja/bh_005_65.png",
    "/comic/05_ja/bh_005_66.png",
    "/comic/05_ja/bh_005_67.png",
    "/comic/05_ja/bh_005_68.png",
    "/comic/05_ja/bh_005_69.png",
    "/comic/05_ja/bh_005_70.png",
    "/comic/05_ja/bh_005_71.png",
    "/comic/05_ja/bh_005_72.png",
    "/comic/05_ja/bh_005_73.png",
    "/comic/05_ja/bh_005_74.png",
    "/comic/05_ja/bh_005_75.png",
    "/comic/05_ja/bh_005_76.png",
    "/comic/05_ja/bh_005_77.png",
    "/comic/05_ja/bh_005_78.png",
    "/comic/05_ja/bh_005_79.png",
    "/comic/05_ja/bh_005_80.png",
    "/comic/05_ja/bh_005_81.png",
    "/comic/05_ja/bh_005_82.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第5話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep5/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep5/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第5話" />
        </div>
        <Label01 text="次回2/18 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              {/* <div className={styles.btn_next}>
                <Button href="/comic/ep6/" isDisabled={false}>
                  第6話を読む
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
