import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import ComicArea from "../../components/organisms/ComicArea"
import ShareArea from "../../components/molecules/ShareArea"
import LayoutTop from "../../components/templates/LayoutTopEn"
import Button from "../../components/atoms/Button"
import BnrArt from "../../components/atoms/BnrArtEn"

const TopPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = [
    "/comic/01_en/001_blue_001.jpg",
    "/comic/01_en/001_blue_002.jpg",
    "/comic/01_en/001_blue_003.jpg",
    "/comic/01_en/001_blue_004.jpg",
    "/comic/01_en/001_blue_005.jpg",
    "/comic/01_en/001_blue_006.jpg",
    "/comic/01_en/001_blue_007.jpg",
    "/comic/01_en/001_blue_008.jpg",
    "/comic/01_en/001_blue_009.jpg",
    "/comic/01_en/001_blue_010.jpg",
    "/comic/01_en/001_blue_011.jpg",
    "/comic/01_en/001_blue_012.jpg",
    "/comic/01_en/001_blue_013.jpg",
    "/comic/01_en/001_blue_014.jpg",
    "/comic/01_en/001_blue_015.jpg",
    "/comic/01_en/001_blue_016.jpg",
    "/comic/01_en/001_blue_017.jpg",
    "/comic/01_en/001_blue_018.jpg",
    "/comic/01_en/001_blue_019.jpg",
    "/comic/01_en/001_blue_020.jpg",
    "/comic/01_en/001_blue_021.jpg",
    "/comic/01_en/001_blue_022.jpg",
    "/comic/01_en/001_blue_023.jpg",
    "/comic/01_en/001_blue_024.jpg",
    "/comic/01_en/001_blue_025.jpg",
    "/comic/01_en/001_blue_026.jpg",
    "/comic/01_en/001_blue_027.jpg",
    "/comic/01_en/001_blue_028.jpg",
    "/comic/01_en/001_blue_029.jpg",
    "/comic/01_en/001_blue_030.jpg",
    "/comic/01_en/001_blue_031.jpg",
    "/comic/01_en/001_blue_032.jpg",
    "/comic/01_en/001_blue_033.jpg",
    "/comic/01_en/001_blue_034.jpg",
    "/comic/01_en/001_blue_035.jpg",
    "/comic/01_en/001_blue_036.jpg",
    "/comic/01_en/001_blue_037.jpg",
    "/comic/01_en/001_blue_038.jpg",
    "/comic/01_en/001_blue_039.jpg",
    "/comic/01_en/001_blue_040.jpg",
    "/comic/01_en/001_blue_041.jpg",
    "/comic/01_en/001_blue_042.jpg",
    "/comic/01_en/001_blue_043.jpg",
    "/comic/01_en/001_blue_044.jpg",
    "/comic/01_en/001_blue_045.jpg",
    "/comic/01_en/001_blue_046.jpg",
    "/comic/01_en/001_blue_047.jpg",
    "/comic/01_en/001_blue_048.jpg",
    "/comic/01_en/001_blue_049.jpg",
    "/comic/01_en/001_blue_050.jpg",
    "/comic/01_en/001_blue_051.jpg",
    "/comic/01_en/001_blue_052.jpg",
    "/comic/01_en/001_blue_053.jpg",
    "/comic/01_en/001_blue_054.jpg",
    "/comic/01_en/001_blue_055.jpg",
    "/comic/01_en/001_blue_056.jpg",
    "/comic/01_en/001_blue_057.jpg",
    "/comic/01_en/001_blue_058.jpg",
    "/comic/01_en/001_blue_059.jpg",
    "/comic/01_en/001_blue_060.jpg",
    "/comic/01_en/001_blue_061.jpg",
    "/comic/01_en/001_blue_062.jpg",
    "/comic/01_en/001_blue_063.jpg",
    "/comic/01_en/001_blue_064.jpg",
    "/comic/01_en/001_blue_065.jpg",
    "/comic/01_en/001_blue_066.jpg",
    "/comic/01_en/001_blue_067.jpg",
    "/comic/01_en/001_blue_068.jpg",
    "/comic/01_en/001_blue_069.jpg",
    "/comic/01_en/001_blue_070.jpg",
    "/comic/01_en/001_blue_071.jpg",
    "/comic/01_en/001_blue_072.jpg",
    "/comic/01_en/001_blue_073.jpg",
    "/comic/01_en/001_blue_074.jpg",
    "/comic/01_en/001_blue_075.jpg",
    "/comic/01_en/001_blue_076.jpg",
    "/comic/01_en/001_blue_077.jpg",
    "/comic/01_en/001_blue_078.jpg",
    "/comic/01_en/001_blue_079.jpg",
    "/comic/01_en/001_blue_080.jpg",
    "/comic/01_en/001_blue_081.jpg",
    "/comic/01_en/001_blue_082.jpg",
    "/comic/01_en/001_blue_083.jpg",
    "/comic/01_en/001_blue_084.jpg",
    "/comic/01_en/001_blue_085.jpg",
    "/comic/01_en/001_blue_086.jpg",
    "/comic/01_en/001_blue_087.jpg",
    "/comic/01_en/001_blue_088.jpg"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <LayoutTop pathname={location.pathname}>
        <div className={styles.contents_inner}>
          <div className={styles.description}>
            <img src="/top/description_top_en.png" alt="" />
          </div>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <ShareArea />
          <div className={styles.btn_wrapper}>
            {/* <div className={styles.btn_next}>
              <Button href="/en/comic/ep2/" isDisabled={false}>
                Read Chapter 2
              </Button>
            </div> */}
            <div className={styles.btn_plan}>
              <Button isDisabled={true}>Next chapter out 28 Jun</Button>
            </div>
          </div>
          <div className={styles.bnr_area}>
            <BnrArt />
          </div>
        </div>
      </LayoutTop>
    </>
  )
}

export default TopPage
