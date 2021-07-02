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
    "/comic/06_en/006_blue_001.jpg",
    "/comic/06_en/006_blue_002.jpg",
    "/comic/06_en/006_blue_003.jpg",
    "/comic/06_en/006_blue_004.jpg",
    "/comic/06_en/006_blue_005.jpg",
    "/comic/06_en/006_blue_006.jpg",
    "/comic/06_en/006_blue_007.jpg",
    "/comic/06_en/006_blue_008.jpg",
    "/comic/06_en/006_blue_009.jpg",
    "/comic/06_en/006_blue_010.jpg",
    "/comic/06_en/006_blue_011.jpg",
    "/comic/06_en/006_blue_012.jpg",
    "/comic/06_en/006_blue_013.jpg",
    "/comic/06_en/006_blue_014.jpg",
    "/comic/06_en/006_blue_015.jpg",
    "/comic/06_en/006_blue_016.jpg",
    "/comic/06_en/006_blue_017.jpg",
    "/comic/06_en/006_blue_018.jpg",
    "/comic/06_en/006_blue_019.jpg",
    "/comic/06_en/006_blue_020.jpg",
    "/comic/06_en/006_blue_021.jpg",
    "/comic/06_en/006_blue_022.jpg",
    "/comic/06_en/006_blue_023.jpg",
    "/comic/06_en/006_blue_024.jpg",
    "/comic/06_en/006_blue_025.jpg",
    "/comic/06_en/006_blue_026.jpg",
    "/comic/06_en/006_blue_027.jpg",
    "/comic/06_en/006_blue_028.jpg",
    "/comic/06_en/006_blue_029.jpg",
    "/comic/06_en/006_blue_030.jpg",
    "/comic/06_en/006_blue_031.jpg",
    "/comic/06_en/006_blue_032.jpg",
    "/comic/06_en/006_blue_033.jpg",
    "/comic/06_en/006_blue_034.jpg",
    "/comic/06_en/006_blue_035.jpg",
    "/comic/06_en/006_blue_036.jpg",
    "/comic/06_en/006_blue_037.jpg",
    "/comic/06_en/006_blue_038.jpg",
    "/comic/06_en/006_blue_039.jpg",
    "/comic/06_en/006_blue_040.jpg",
    "/comic/06_en/006_blue_041.jpg",
    "/comic/06_en/006_blue_042.jpg",
    "/comic/06_en/006_blue_043.jpg",
    "/comic/06_en/006_blue_044.jpg",
    "/comic/06_en/006_blue_045.jpg",
    "/comic/06_en/006_blue_046.jpg",
    "/comic/06_en/006_blue_047.jpg",
    "/comic/06_en/006_blue_048.jpg",
    "/comic/06_en/006_blue_049.jpg",
    "/comic/06_en/006_blue_050.jpg",
    "/comic/06_en/006_blue_051.jpg",
    "/comic/06_en/006_blue_052.jpg",
    "/comic/06_en/006_blue_053.jpg",
    "/comic/06_en/006_blue_054.jpg",
    "/comic/06_en/006_blue_055.jpg",
    "/comic/06_en/006_blue_056.jpg",
    "/comic/06_en/006_blue_057.jpg",
    "/comic/06_en/006_blue_058.jpg",
    "/comic/06_en/006_blue_059.jpg",
    "/comic/06_en/006_blue_060.jpg",
    "/comic/06_en/006_blue_061.jpg",
    "/comic/06_en/006_blue_062.jpg",
    "/comic/06_en/006_blue_063.jpg",
    "/comic/06_en/006_blue_064.jpg",
    "/comic/06_en/006_blue_065.jpg",
    "/comic/06_en/006_blue_066.jpg",
    "/comic/06_en/006_blue_067.jpg",
    "/comic/06_en/006_blue_068.jpg",
    "/comic/06_en/006_blue_069.jpg",
    "/comic/06_en/006_blue_070.jpg",
    "/comic/06_en/006_blue_071.jpg"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Episode 1 | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest  " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/comic/ep1/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/comic/ep1/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
          <BreadShort page01="TOP" href01="/en/" page02="Comic - Episode 6" />
        </div>
        <Label01 text="Updated every Monday!" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            {/* <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/en/comic-check/ep7/" isDisabled={false}>
                  Read Chapter 7
                </Button>
              </div>
            </div> */}
          </div>
        </ComicContentsInner>
      </LayoutTwoColumnComic>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default ComicPage
