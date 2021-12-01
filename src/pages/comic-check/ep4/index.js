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
    "/comic/04_ja/bh_004_01.png",
    "/comic/04_ja/bh_004_02.png",
    "/comic/04_ja/bh_004_03.png",
    "/comic/04_ja/bh_004_04.png",
    "/comic/04_ja/bh_004_05.png",
    "/comic/04_ja/bh_004_06.png",
    "/comic/04_ja/bh_004_07.png",
    "/comic/04_ja/bh_004_08.png",
    "/comic/04_ja/bh_004_09.png",
    "/comic/04_ja/bh_004_10.png",
    "/comic/04_ja/bh_004_11.png",
    "/comic/04_ja/bh_004_12.png",
    "/comic/04_ja/bh_004_13.png",
    "/comic/04_ja/bh_004_14.png",
    "/comic/04_ja/bh_004_15.png",
    "/comic/04_ja/bh_004_16.png",
    "/comic/04_ja/bh_004_17.png",
    "/comic/04_ja/bh_004_18.png",
    "/comic/04_ja/bh_004_19.png",
    "/comic/04_ja/bh_004_20.png",
    "/comic/04_ja/bh_004_21.png",
    "/comic/04_ja/bh_004_22.png",
    "/comic/04_ja/bh_004_23.png",
    "/comic/04_ja/bh_004_24.png",
    "/comic/04_ja/bh_004_25.png",
    "/comic/04_ja/bh_004_26.png",
    "/comic/04_ja/bh_004_27.png",
    "/comic/04_ja/bh_004_28.png",
    "/comic/04_ja/bh_004_29.png",
    "/comic/04_ja/bh_004_30.png",
    "/comic/04_ja/bh_004_31.png",
    "/comic/04_ja/bh_004_32.png",
    "/comic/04_ja/bh_004_33.png",
    "/comic/04_ja/bh_004_34.png",
    "/comic/04_ja/bh_004_35.png",
    "/comic/04_ja/bh_004_36.png",
    "/comic/04_ja/bh_004_37.png",
    "/comic/04_ja/bh_004_38.png",
    "/comic/04_ja/bh_004_39.png",
    "/comic/04_ja/bh_004_40.png",
    "/comic/04_ja/bh_004_41.png",
    "/comic/04_ja/bh_004_42.png",
    "/comic/04_ja/bh_004_43.png",
    "/comic/04_ja/bh_004_44.png",
    "/comic/04_ja/bh_004_45.png",
    "/comic/04_ja/bh_004_46.png",
    "/comic/04_ja/bh_004_47.png",
    "/comic/04_ja/bh_004_48.png",
    "/comic/04_ja/bh_004_49.png",
    "/comic/04_ja/bh_004_50.png",
    "/comic/04_ja/bh_004_51.png",
    "/comic/04_ja/bh_004_52.png",
    "/comic/04_ja/bh_004_53.png",
    "/comic/04_ja/bh_004_54.png",
    "/comic/04_ja/bh_004_55.png",
    "/comic/04_ja/bh_004_56.png",
    "/comic/04_ja/bh_004_57.png",
    "/comic/04_ja/bh_004_58.png",
    "/comic/04_ja/bh_004_59.png",
    "/comic/04_ja/bh_004_60.png",
    "/comic/04_ja/bh_004_61.png",
    "/comic/04_ja/bh_004_62.png",
    "/comic/04_ja/bh_004_63.png",
    "/comic/04_ja/bh_004_64.png",
    "/comic/04_ja/bh_004_65.png",
    "/comic/04_ja/bh_004_66.png",
    "/comic/04_ja/bh_004_67.png",
    "/comic/04_ja/bh_004_68.png",
    "/comic/04_ja/bh_004_69.png",
    "/comic/04_ja/bh_004_70.png",
    "/comic/04_ja/bh_004_71.png",
    "/comic/04_ja/bh_004_72.png",
    "/comic/04_ja/bh_004_73.png",
    "/comic/04_ja/bh_004_74.png",
    "/comic/04_ja/bh_004_75.png",
    "/comic/04_ja/bh_004_76.png",
    "/comic/04_ja/bh_004_77.png",
    "/comic/04_ja/bh_004_78.png",
    "/comic/04_ja/bh_004_79.png",
    "/comic/04_ja/bh_004_80.png",
    "/comic/04_ja/bh_004_81.png",
    "/comic/04_ja/bh_004_82.png",
    "/comic/04_ja/bh_004_83.png",
    "/comic/04_ja/bh_004_84.png",
    "/comic/04_ja/bh_004_85.png",
    "/comic/04_ja/bh_004_86.png",
    "/comic/04_ja/bh_004_87.png",
    "/comic/04_ja/bh_004_88.png",
    "/comic/04_ja/bh_004_89.png",
    "/comic/04_ja/bh_004_90.png",
    "/comic/04_ja/bh_004_91.png",
    "/comic/04_ja/bh_004_92.png",
    "/comic/04_ja/bh_004_93.png",
    "/comic/04_ja/bh_004_94.png",
    "/comic/04_ja/bh_004_95.png",
    "/comic/04_ja/bh_004_96.png",
    "/comic/04_ja/bh_004_97.png",
    "/comic/04_ja/bh_004_98.png",
    "/comic/04_ja/bh_004_99.png",
    "/comic/04_ja/bh_004_100.png",
    "/comic/04_ja/bh_004_101.png",
    "/comic/04_ja/bh_004_102.png",
    "/comic/04_ja/bh_004_103.png",
    "/comic/04_ja/bh_004_104.png",
    "/comic/04_ja/bh_004_105.png",
    "/comic/04_ja/bh_004_106.png",
    "/comic/04_ja/bh_004_107.png",
    "/comic/04_ja/bh_004_108.png",
    "/comic/04_ja/bh_004_109.png",
    "/comic/04_ja/bh_004_110.png",
    "/comic/04_ja/bh_004_111.png",
    "/comic/04_ja/bh_004_112.png",
    "/comic/04_ja/bh_004_113.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第4話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep4/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep4/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第4話" />
        </div>
        <Label01 text="次回1/17 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              {/* <div className={styles.btn_next}>
                <Button href="/comic/ep5/" isDisabled={false}>
                  第5話を読む
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
