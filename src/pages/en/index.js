import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import ComicArea from "../../components/organisms/ComicArea"
import ShareArea from "../../components/molecules/ShareArea"
import LayoutTop from "../../components/templates/LayoutTopEn"
import Button from "../../components/atoms/ButtonEn"
import BnrArt from "../../components/atoms/BnrArtEn"

const TopPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = [
    "/top/img_top_ep1_en.png",
    "/comic/01_en/BH_ep001_english_001.png",
    "/comic/01_en/BH_ep001_english_002.png",
    "/comic/01_en/BH_ep001_english_003.png",
    "/comic/01_en/BH_ep001_english_004.png",
    "/comic/01_en/BH_ep001_english_005.png",
    "/comic/01_en/BH_ep001_english_006.png",
    "/comic/01_en/BH_ep001_english_007.png",
    "/comic/01_en/BH_ep001_english_008.png",
    "/comic/01_en/BH_ep001_english_009.png",
    "/comic/01_en/BH_ep001_english_010.png",
    "/comic/01_en/BH_ep001_english_011.png",
    "/comic/01_en/BH_ep001_english_012.png",
    "/comic/01_en/BH_ep001_english_013.png",
    "/comic/01_en/BH_ep001_english_014.png",
    "/comic/01_en/BH_ep001_english_015.png",
    "/comic/01_en/BH_ep001_english_016.png",
    "/comic/01_en/BH_ep001_english_017.png",
    "/comic/01_en/BH_ep001_english_018.png",
    "/comic/01_en/BH_ep001_english_019.png",
    "/comic/01_en/BH_ep001_english_020.png",
    "/comic/01_en/BH_ep001_english_021.png",
    "/comic/01_en/BH_ep001_english_022.png",
    "/comic/01_en/BH_ep001_english_023.png",
    "/comic/01_en/BH_ep001_english_024.png",
    "/comic/01_en/BH_ep001_english_025.png",
    "/comic/01_en/BH_ep001_english_026.png",
    "/comic/01_en/BH_ep001_english_027.png",
    "/comic/01_en/BH_ep001_english_028.png",
    "/comic/01_en/BH_ep001_english_029.png",
    "/comic/01_en/BH_ep001_english_030.png",
    "/comic/01_en/BH_ep001_english_031.png",
    "/comic/01_en/BH_ep001_english_032.png",
    "/comic/01_en/BH_ep001_english_033.png",
    "/comic/01_en/BH_ep001_english_034.png",
    "/comic/01_en/BH_ep001_english_035.png",
    "/comic/01_en/BH_ep001_english_036.png",
    "/comic/01_en/BH_ep001_english_037.png",
    "/comic/01_en/BH_ep001_english_038.png",
    "/comic/01_en/BH_ep001_english_039.png",
    "/comic/01_en/BH_ep001_english_040.png",
    "/comic/01_en/BH_ep001_english_041.png",
    "/comic/01_en/BH_ep001_english_042.png",
    "/comic/01_en/BH_ep001_english_043.png",
    "/comic/01_en/BH_ep001_english_044.png",
    "/comic/01_en/BH_ep001_english_045.png",
    "/comic/01_en/BH_ep001_english_046.png",
    "/comic/01_en/BH_ep001_english_047.png",
    "/comic/01_en/BH_ep001_english_048.png",
    "/comic/01_en/BH_ep001_english_049.png",
    "/comic/01_en/BH_ep001_english_050.png",
    "/comic/01_en/BH_ep001_english_051.png",
    "/comic/01_en/BH_ep001_english_052.png",
    "/comic/01_en/BH_ep001_english_053.png",
    "/comic/01_en/BH_ep001_english_054.png",
    "/comic/01_en/BH_ep001_english_055.png",
    "/comic/01_en/BH_ep001_english_056.png",
    "/comic/01_en/BH_ep001_english_057.png",
    "/comic/01_en/BH_ep001_english_058.png",
    "/comic/01_en/BH_ep001_english_059.png",
    "/comic/01_en/BH_ep001_english_060.png",
    "/comic/01_en/BH_ep001_english_061.png",
    "/comic/01_en/BH_ep001_english_062.png",
    "/comic/01_en/BH_ep001_english_063.png",
    "/comic/01_en/BH_ep001_english_064.png",
    "/comic/01_en/BH_ep001_english_065.png",
    "/comic/01_en/BH_ep001_english_066.png",
    "/comic/01_en/BH_ep001_english_067.png",
    "/comic/01_en/BH_ep001_english_068.png",
    "/comic/01_en/BH_ep001_english_069.png",
    "/comic/01_en/BH_ep001_english_070.png",
    "/comic/01_en/BH_ep001_english_071.png",
    "/comic/01_en/BH_ep001_english_072.png",
    "/comic/01_en/BH_ep001_english_073.png",
    "/comic/01_en/BH_ep001_english_074.png",
    "/comic/01_en/BH_ep001_english_075.png",
    "/comic/01_en/BH_ep001_english_076.png",
    "/comic/01_en/BH_ep001_english_077.png",
    "/comic/01_en/BH_ep001_english_078.png",
    "/comic/01_en/BH_ep001_english_079.png",
    "/comic/01_en/BH_ep001_english_080.png",
    "/comic/01_en/BH_ep001_english_081.png",
    "/comic/01_en/BH_ep001_english_082.png",
    "/comic/01_en/BH_ep001_english_083.png",
    "/comic/01_en/BH_ep001_english_084.png",
    "/comic/01_en/BH_ep001_english_085.png",
    "/comic/01_en/BH_ep001_english_086.png",
    "/comic/01_en/BH_ep001_english_087.png",
    "/comic/01_en/BH_ep001_english_088.png",
    "/comic/01_en/BH_ep001_english_089.png",
    "/comic/01_en/BH_ep001_english_090.png",
    "/comic/01_en/BH_ep001_english_091.png",
    "/comic/01_en/BH_ep001_english_092.png",
    "/comic/01_en/BH_ep001_english_093.png",
    "/comic/01_en/BH_ep001_english_094.png",
    "/comic/01_en/BH_ep001_english_095.png",
    "/comic/01_en/BH_ep001_english_096.png",
    "/comic/01_en/BH_ep001_english_097.png",
    "/comic/01_en/BH_ep001_english_098.png",
    "/comic/01_en/BH_ep001_english_099.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/" />
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
            <div className={styles.btn_next}>
              <Button href="/en/comic/ep2/" isDisabled={false}>
                Read Chapter 2
              </Button>
            </div>
            {/* <div className={styles.btn_plan}>
              <Button isDisabled={true}>Next chapter out 28 Jun</Button>
            </div> */}
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
