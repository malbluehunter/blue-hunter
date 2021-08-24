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
    "/comic/02_en/BH_ep002_english_001.png",
    "/comic/02_en/BH_ep002_english_002.png",
    "/comic/02_en/BH_ep002_english_003.png",
    "/comic/02_en/BH_ep002_english_004.png",
    "/comic/02_en/BH_ep002_english_005.png",
    "/comic/02_en/BH_ep002_english_006.png",
    "/comic/02_en/BH_ep002_english_007.png",
    "/comic/02_en/BH_ep002_english_008.png",
    "/comic/02_en/BH_ep002_english_009.png",
    "/comic/02_en/BH_ep002_english_010.png",
    "/comic/02_en/BH_ep002_english_011.png",
    "/comic/02_en/BH_ep002_english_012.png",
    "/comic/02_en/BH_ep002_english_013.png",
    "/comic/02_en/BH_ep002_english_014.png",
    "/comic/02_en/BH_ep002_english_015.png",
    "/comic/02_en/BH_ep002_english_016.png",
    "/comic/02_en/BH_ep002_english_017.png",
    "/comic/02_en/BH_ep002_english_018.png",
    "/comic/02_en/BH_ep002_english_019.png",
    "/comic/02_en/BH_ep002_english_020.png",
    "/comic/02_en/BH_ep002_english_021.png",
    "/comic/02_en/BH_ep002_english_022.png",
    "/comic/02_en/BH_ep002_english_023.png",
    "/comic/02_en/BH_ep002_english_024.png",
    "/comic/02_en/BH_ep002_english_025.png",
    "/comic/02_en/BH_ep002_english_026.png",
    "/comic/02_en/BH_ep002_english_027.png",
    "/comic/02_en/BH_ep002_english_028.png",
    "/comic/02_en/BH_ep002_english_029.png",
    "/comic/02_en/BH_ep002_english_030.png",
    "/comic/02_en/BH_ep002_english_031.png",
    "/comic/02_en/BH_ep002_english_032.png",
    "/comic/02_en/BH_ep002_english_033.png",
    "/comic/02_en/BH_ep002_english_034.png",
    "/comic/02_en/BH_ep002_english_035.png",
    "/comic/02_en/BH_ep002_english_036.png",
    "/comic/02_en/BH_ep002_english_037.png",
    "/comic/02_en/BH_ep002_english_038.png",
    "/comic/02_en/BH_ep002_english_039.png",
    "/comic/02_en/BH_ep002_english_040.png",
    "/comic/02_en/BH_ep002_english_041.png",
    "/comic/02_en/BH_ep002_english_042.png",
    "/comic/02_en/BH_ep002_english_043.png",
    "/comic/02_en/BH_ep002_english_044.png",
    "/comic/02_en/BH_ep002_english_045.png",
    "/comic/02_en/BH_ep002_english_046.png",
    "/comic/02_en/BH_ep002_english_047.png",
    "/comic/02_en/BH_ep002_english_048.png",
    "/comic/02_en/BH_ep002_english_049.png",
    "/comic/02_en/BH_ep002_english_050.png",
    "/comic/02_en/BH_ep002_english_051.png",
    "/comic/02_en/BH_ep002_english_052.png",
    "/comic/02_en/BH_ep002_english_053.png",
    "/comic/02_en/BH_ep002_english_054.png",
    "/comic/02_en/BH_ep002_english_055.png",
    "/comic/02_en/BH_ep002_english_056.png",
    "/comic/02_en/BH_ep002_english_057.png",
    "/comic/02_en/BH_ep002_english_058.png",
    "/comic/02_en/BH_ep002_english_059.png",
    "/comic/02_en/BH_ep002_english_060.png",
    "/comic/02_en/BH_ep002_english_061.png",
    "/comic/02_en/BH_ep002_english_062.png",
    "/comic/02_en/BH_ep002_english_063.png",
    "/comic/02_en/BH_ep002_english_064.png",
    "/comic/02_en/BH_ep002_english_065.png",
    "/comic/02_en/BH_ep002_english_066.png",
    "/comic/02_en/BH_ep002_english_067.png",
    "/comic/02_en/BH_ep002_english_068.png",
    "/comic/02_en/BH_ep002_english_069.png",
    "/comic/02_en/BH_ep002_english_070.png",
    "/comic/02_en/BH_ep002_english_071.png",
    "/comic/02_en/BH_ep002_english_072.png",
    "/comic/02_en/BH_ep002_english_073.png",
    "/comic/02_en/BH_ep002_english_074.png",
    "/comic/02_en/BH_ep002_english_075.png",
    "/comic/02_en/BH_ep002_english_076.png",
    "/comic/02_en/BH_ep002_english_077.png",
    "/comic/02_en/BH_ep002_english_078.png",
    "/comic/02_en/BH_ep002_english_079.png",
    "/comic/02_en/BH_ep002_english_080.png",
    "/comic/02_en/BH_ep002_english_081.png",
    "/comic/02_en/BH_ep002_english_082.png",
    "/comic/02_en/BH_ep002_english_083.png",
    "/comic/02_en/BH_ep002_english_084.png",
    "/comic/02_en/BH_ep002_english_085.png",
    "/comic/02_en/BH_ep002_english_086.png",
    "/comic/02_en/BH_ep002_english_087.png",
    "/comic/02_en/BH_ep002_english_088.png",
    "/comic/02_en/BH_ep002_english_089.png",
    "/comic/02_en/BH_ep002_english_090.png",
    "/comic/02_en/BH_ep002_english_091.png",
    "/comic/02_en/BH_ep002_english_092.png",
    "/comic/02_en/BH_ep002_english_093.png",
    "/comic/02_en/BH_ep002_english_094.png",
    "/comic/02_en/BH_ep002_english_095.png",
    "/comic/02_en/BH_ep002_english_096.png",
    "/comic/02_en/BH_ep002_english_097.png",
    "/comic/02_en/BH_ep002_english_098.png",
    "/comic/02_en/BH_ep002_english_099.png",
    "/comic/02_en/BH_ep002_english_100.png",
    "/comic/02_en/BH_ep002_english_101.png",
    "/comic/02_en/BH_ep002_english_102.png",
    "/comic/02_en/BH_ep002_english_103.png",
    "/comic/02_en/BH_ep002_english_104.png",
    "/comic/02_en/BH_ep002_english_105.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Episode 2 | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest  " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/comic/ep2/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/comic/ep2/" />
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
          <BreadShort page01="TOP" href01="/en/" page02="Comic - Episode 2" />
        </div>
        <Label01 text="Next chapter out October 6" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/en/comic/ep3/" isDisabled={false}>
                  Read Chapter 3
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>Next chapter out July 21</Button>
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
