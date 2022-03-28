import React from "react"
import PageTitle from "../../../../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import BreadShort from "../../../../components/molecules/BreadShort"
import ComicArea from "../../../../components/organisms/ComicArea"
import ShareArea from "../../../../components/molecules/ShareArea"
import LayoutTwoColumnComic from "../../../../components/templates/LayoutTwoColumnComicEn"
import ComicContentsInner from "../../../../components/organisms/ComicContentsInnerEn"
import Button from "../../../../components/atoms/ButtonEn"
import Label01 from "../../../../components/molecules/Label01"

const ComicPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = [
    "/comic/13_en/BH_ep013_english_01.png",
    "/comic/13_en/BH_ep013_english_02.png",
    "/comic/13_en/BH_ep013_english_03.png",
    "/comic/13_en/BH_ep013_english_04.png",
    "/comic/13_en/BH_ep013_english_05.png",
    "/comic/13_en/BH_ep013_english_06.png",
    "/comic/13_en/BH_ep013_english_07.png",
    "/comic/13_en/BH_ep013_english_08.png",
    "/comic/13_en/BH_ep013_english_09.png",
    "/comic/13_en/BH_ep013_english_10.png",
    "/comic/13_en/BH_ep013_english_11.png",
    "/comic/13_en/BH_ep013_english_12.png",
    "/comic/13_en/BH_ep013_english_13.png",
    "/comic/13_en/BH_ep013_english_14.png",
    "/comic/13_en/BH_ep013_english_15.png",
    "/comic/13_en/BH_ep013_english_16.png",
    "/comic/13_en/BH_ep013_english_17.png",
    "/comic/13_en/BH_ep013_english_18.png",
    "/comic/13_en/BH_ep013_english_19.png",
    "/comic/13_en/BH_ep013_english_20.png",
    "/comic/13_en/BH_ep013_english_21.png",
    "/comic/13_en/BH_ep013_english_22.png",
    "/comic/13_en/BH_ep013_english_23.png",
    "/comic/13_en/BH_ep013_english_24.png",
    "/comic/13_en/BH_ep013_english_25.png",
    "/comic/13_en/BH_ep013_english_26.png",
    "/comic/13_en/BH_ep013_english_27.png",
    "/comic/13_en/BH_ep013_english_28.png",
    "/comic/13_en/BH_ep013_english_29.png",
    "/comic/13_en/BH_ep013_english_30.png",
    "/comic/13_en/BH_ep013_english_31.png",
    "/comic/13_en/BH_ep013_english_32.png",
    "/comic/13_en/BH_ep013_english_33.png",
    "/comic/13_en/BH_ep013_english_34.png",
    "/comic/13_en/BH_ep013_english_35.png",
    "/comic/13_en/BH_ep013_english_36.png",
    "/comic/13_en/BH_ep013_english_37.png",
    "/comic/13_en/BH_ep013_english_38.png",
    "/comic/13_en/BH_ep013_english_39.png",
    "/comic/13_en/BH_ep013_english_40.png",
    "/comic/13_en/BH_ep013_english_41.png",
    "/comic/13_en/BH_ep013_english_42.png",
    "/comic/13_en/BH_ep013_english_43.png",
    "/comic/13_en/BH_ep013_english_44.png",
    "/comic/13_en/BH_ep013_english_45.png",
    "/comic/13_en/BH_ep013_english_46.png",
    "/comic/13_en/BH_ep013_english_47.png",
    "/comic/13_en/BH_ep013_english_48.png",
    "/comic/13_en/BH_ep013_english_49.png",
    "/comic/13_en/BH_ep013_english_50.png",
    "/comic/13_en/BH_ep013_english_51.png",
    "/comic/13_en/BH_ep013_english_52.png",
    "/comic/13_en/BH_ep013_english_53.png",
    "/comic/13_en/BH_ep013_english_54.png",
    "/comic/13_en/BH_ep013_english_55.png",
    "/comic/13_en/BH_ep013_english_56.png",
    "/comic/13_en/BH_ep013_english_57.png",
    "/comic/13_en/BH_ep013_english_58.png",
    "/comic/13_en/BH_ep013_english_59.png",
    "/comic/13_en/BH_ep013_english_60.png",
    "/comic/13_en/BH_ep013_english_61.png",
    "/comic/13_en/BH_ep013_english_62.png",
    "/comic/13_en/BH_ep013_english_63.png",
    "/comic/13_en/BH_ep013_english_64.png",
    "/comic/13_en/BH_ep013_english_65.png",
    "/comic/13_en/BH_ep013_english_66.png",
    "/comic/13_en/BH_ep013_english_67.png",
    "/comic/13_en/BH_ep013_english_68.png",
    "/comic/13_en/BH_ep013_english_69.png",
    "/comic/13_en/BH_ep013_english_70.png",
    "/comic/13_en/BH_ep013_english_71.png",
    "/comic/13_en/BH_ep013_english_72.png",
    "/comic/13_en/BH_ep013_english_73.png",
    "/comic/13_en/BH_ep013_english_74.png",
    "/comic/13_en/BH_ep013_english_75.png",
    "/comic/13_en/BH_ep013_english_76.png",
    "/comic/13_en/BH_ep013_english_77.png",
    "/comic/13_en/BH_ep013_english_78.png",
    "/comic/13_en/BH_ep013_english_79.png",
    "/comic/13_en/BH_ep013_english_80.png",
    "/comic/13_en/BH_ep013_english_81.png",
    "/comic/13_en/BH_ep013_english_82.png",
    "/comic/13_en/BH_ep013_english_83.png",
    "/comic/13_en/BH_ep013_english_84.png",
    "/comic/13_en/BH_ep013_english_85.png",
    "/comic/13_en/BH_ep013_english_86.png",
    "/comic/13_en/BH_ep013_english_87.png",
    "/comic/13_en/BH_ep013_english_88.png",
    "/comic/13_en/BH_ep013_english_89.png",
    "/comic/13_en/BH_ep013_english_90.png",
    "/comic/13_en/BH_ep013_english_91.png",
    "/comic/13_en/BH_ep013_english_92.png",
    "/comic/13_en/BH_ep013_english_93.png",
    "/comic/13_en/BH_ep013_english_94.png",
    "/comic/13_en/BH_ep013_english_95.png",
    "/comic/13_en/BH_ep013_english_96.png",
    "/comic/13_en/BH_ep013_english_97.png",
    "/comic/13_en/BH_ep013_english_98.png",
    "/comic/13_en/BH_ep013_english_99.png",
    "/comic/13_en/BH_ep013_english_100.png",
    "/comic/13_en/BH_ep013_english_101.png",
    "/comic/13_en/BH_ep013_english_102.png",
    "/comic/13_en/BH_ep013_english_103.png",
    "/comic/13_en/BH_ep013_english_104.png",
    "/comic/13_en/BH_ep013_english_105.png",
    "/comic/13_en/BH_ep013_english_106.png",
    "/comic/13_en/BH_ep013_english_107.png",
    "/comic/13_en/BH_ep013_english_108.png",
    "/comic/13_en/BH_ep013_english_109.png",
    "/comic/13_en/BH_ep013_english_110.png",
    "/comic/13_en/BH_ep013_english_111.png",
    "/comic/13_en/BH_ep013_english_112.png",
    "/comic/13_en/BH_ep013_english_113.png",
    "/comic/13_en/BH_ep013_english_114.png",
    "/comic/13_en/BH_ep013_english_115.png",
    "/comic/13_en/BH_ep013_english_116.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Episode 13 | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest  " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/comic/ep13/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/comic/ep13/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
          <PageTitle src="/comic/ttl_comic.png" alt="" />
        </div>
        {/* パンクズリスト */}
        <div className={styles.bread_wrapper}>
          <BreadShort page01="TOP" href01="/en/" page02="Comic - Episode 13" />
        </div>
        {/* <Label01 text="Next chapter out March 29" /> */}
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              {/* <div className={styles.btn_next}>
                <Button href="/en/comic/ep13/" isDisabled={false}>
                  Read Chapter 13
                </Button>
              </div> */}
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>Next chapter out March 29</Button>
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
