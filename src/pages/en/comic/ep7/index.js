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
    "/comic/07_en/BH_ep007_english_001.png",
    "/comic/07_en/BH_ep007_english_002.png",
    "/comic/07_en/BH_ep007_english_003.png",
    "/comic/07_en/BH_ep007_english_004.png",
    "/comic/07_en/BH_ep007_english_005.png",
    "/comic/07_en/BH_ep007_english_006.png",
    "/comic/07_en/BH_ep007_english_007.png",
    "/comic/07_en/BH_ep007_english_008.png",
    "/comic/07_en/BH_ep007_english_009.png",
    "/comic/07_en/BH_ep007_english_010.png",
    "/comic/07_en/BH_ep007_english_011.png",
    "/comic/07_en/BH_ep007_english_012.png",
    "/comic/07_en/BH_ep007_english_013.png",
    "/comic/07_en/BH_ep007_english_014.png",
    "/comic/07_en/BH_ep007_english_015.png",
    "/comic/07_en/BH_ep007_english_016.png",
    "/comic/07_en/BH_ep007_english_017.png",
    "/comic/07_en/BH_ep007_english_018.png",
    "/comic/07_en/BH_ep007_english_019.png",
    "/comic/07_en/BH_ep007_english_020.png",
    "/comic/07_en/BH_ep007_english_021.png",
    "/comic/07_en/BH_ep007_english_022.png",
    "/comic/07_en/BH_ep007_english_023.png",
    "/comic/07_en/BH_ep007_english_024.png",
    "/comic/07_en/BH_ep007_english_025.png",
    "/comic/07_en/BH_ep007_english_026.png",
    "/comic/07_en/BH_ep007_english_027.png",
    "/comic/07_en/BH_ep007_english_028.png",
    "/comic/07_en/BH_ep007_english_029.png",
    "/comic/07_en/BH_ep007_english_030.png",
    "/comic/07_en/BH_ep007_english_031.png",
    "/comic/07_en/BH_ep007_english_032.png",
    "/comic/07_en/BH_ep007_english_033.png",
    "/comic/07_en/BH_ep007_english_034.png",
    "/comic/07_en/BH_ep007_english_035.png",
    "/comic/07_en/BH_ep007_english_036.png",
    "/comic/07_en/BH_ep007_english_037.png",
    "/comic/07_en/BH_ep007_english_038.png",
    "/comic/07_en/BH_ep007_english_039.png",
    "/comic/07_en/BH_ep007_english_040.png",
    "/comic/07_en/BH_ep007_english_041.png",
    "/comic/07_en/BH_ep007_english_042.png",
    "/comic/07_en/BH_ep007_english_043.png",
    "/comic/07_en/BH_ep007_english_044.png",
    "/comic/07_en/BH_ep007_english_045.png",
    "/comic/07_en/BH_ep007_english_046.png",
    "/comic/07_en/BH_ep007_english_047.png",
    "/comic/07_en/BH_ep007_english_048.png",
    "/comic/07_en/BH_ep007_english_049.png",
    "/comic/07_en/BH_ep007_english_050.png",
    "/comic/07_en/BH_ep007_english_051.png",
    "/comic/07_en/BH_ep007_english_052.png",
    "/comic/07_en/BH_ep007_english_053.png",
    "/comic/07_en/BH_ep007_english_054.png",
    "/comic/07_en/BH_ep007_english_055.png",
    "/comic/07_en/BH_ep007_english_056.png",
    "/comic/07_en/BH_ep007_english_057.png",
    "/comic/07_en/BH_ep007_english_058.png",
    "/comic/07_en/BH_ep007_english_059.png",
    "/comic/07_en/BH_ep007_english_060.png",
    "/comic/07_en/BH_ep007_english_061.png",
    "/comic/07_en/BH_ep007_english_062.png",
    "/comic/07_en/BH_ep007_english_063.png",
    "/comic/07_en/BH_ep007_english_064.png",
    "/comic/07_en/BH_ep007_english_065.png",
    "/comic/07_en/BH_ep007_english_066.png",
    "/comic/07_en/BH_ep007_english_067.png",
    "/comic/07_en/BH_ep007_english_068.png",
    "/comic/07_en/BH_ep007_english_069.png",
    "/comic/07_en/BH_ep007_english_070.png",
    "/comic/07_en/BH_ep007_english_071.png",
    "/comic/07_en/BH_ep007_english_072.png",
    "/comic/07_en/BH_ep007_english_073.png",
    "/comic/07_en/BH_ep007_english_074.png",
    "/comic/07_en/BH_ep007_english_075.png",
    "/comic/07_en/BH_ep007_english_076.png",
    "/comic/07_en/BH_ep007_english_077.png",
    "/comic/07_en/BH_ep007_english_078.png",
    "/comic/07_en/BH_ep007_english_079.png",
    "/comic/07_en/BH_ep007_english_080.png",
    "/comic/07_en/BH_ep007_english_081.png",
    "/comic/07_en/BH_ep007_english_082.png",
    "/comic/07_en/BH_ep007_english_083.png",
    "/comic/07_en/BH_ep007_english_084.png",
    "/comic/07_en/BH_ep007_english_085.png",
    "/comic/07_en/BH_ep007_english_086.png",
    "/comic/07_en/BH_ep007_english_087.png",
    "/comic/07_en/BH_ep007_english_088.png",
    "/comic/07_en/BH_ep007_english_089.png",
    "/comic/07_en/BH_ep007_english_090.png",
    "/comic/07_en/BH_ep007_english_091.png",
    "/comic/07_en/BH_ep007_english_092.png",
    "/comic/07_en/BH_ep007_english_093.png",
    "/comic/07_en/BH_ep007_english_094.png",
    "/comic/07_en/BH_ep007_english_095.png",
    "/comic/07_en/BH_ep007_english_096.png",
    "/comic/07_en/BH_ep007_english_097.png",
    "/comic/07_en/BH_ep007_english_098.png",
    "/comic/07_en/BH_ep007_english_099.png",
    "/comic/07_en/BH_ep007_english_100.png",
    "/comic/07_en/BH_ep007_english_101.png",
    "/comic/07_en/BH_ep007_english_102.png",
    "/comic/07_en/BH_ep007_english_103.png",
    "/comic/07_en/BH_ep007_english_104.png",
    "/comic/07_en/BH_ep007_english_105.png",
    "/comic/07_en/BH_ep007_english_106.png",
    "/comic/07_en/BH_ep007_english_107.png",
    "/comic/07_en/BH_ep007_english_108.png",
    "/comic/07_en/BH_ep007_english_109.png",
    "/comic/07_en/BH_ep007_english_110.png",
    "/comic/07_en/BH_ep007_english_111.png",
    "/comic/07_en/BH_ep007_english_112.png",
    "/comic/07_en/BH_ep007_english_113.png",
    "/comic/07_en/BH_ep007_english_114.png",
    "/comic/07_en/BH_ep007_english_115.png",
    "/comic/07_en/BH_ep007_english_116.png",
    "/comic/07_en/BH_ep007_english_117.png",
    "/comic/07_en/BH_ep007_english_118.png",
    "/comic/07_en/BH_ep007_english_119.png",
    "/comic/07_en/BH_ep007_english_120.png",
    "/comic/07_en/BH_ep007_english_121.png",
    "/comic/07_en/BH_ep007_english_122.png",
    "/comic/07_en/BH_ep007_english_123.png",
    "/comic/07_en/BH_ep007_english_124.png",
    "/comic/07_en/BH_ep007_english_125.png",
    "/comic/07_en/BH_ep007_english_126.png",
    "/comic/07_en/BH_ep007_english_127.png",
    "/comic/07_en/BH_ep007_english_128.png",
    "/comic/07_en/BH_ep007_english_129.png",
    "/comic/07_en/BH_ep007_english_130.png",
    "/comic/07_en/BH_ep007_english_131.png",
    "/comic/07_en/BH_ep007_english_132.png",
    "/comic/07_en/BH_ep007_english_133.png",
    "/comic/07_en/BH_ep007_english_134.png",
    "/comic/07_en/BH_ep007_english_135.png",
    "/comic/07_en/BH_ep007_english_136.png",
    "/comic/07_en/BH_ep007_english_137.png",
    "/comic/07_en/BH_ep007_english_138.png",
    "/comic/07_en/BH_ep007_english_139.png",
    "/comic/07_en/BH_ep007_english_140.png",
    "/comic/07_en/BH_ep007_english_141.png",
    "/comic/07_en/BH_ep007_english_142.png",
    "/comic/07_en/BH_ep007_english_143.png",
    "/comic/07_en/BH_ep007_english_144.png",
    "/comic/07_en/BH_ep007_english_145.png",
    "/comic/07_en/BH_ep007_english_146.png",
    "/comic/07_en/BH_ep007_english_147.png",
    "/comic/07_en/BH_ep007_english_148.png",
    "/comic/07_en/BH_ep007_english_149.png",
    "/comic/07_en/BH_ep007_english_140.png",
    "/comic/07_en/BH_ep007_english_141.png",
    "/comic/07_en/BH_ep007_english_142.png",
    "/comic/07_en/BH_ep007_english_143.png",
    "/comic/07_en/BH_ep007_english_144.png",
    "/comic/07_en/BH_ep007_english_145.png",
    "/comic/07_en/BH_ep007_english_146.png",
    "/comic/07_en/BH_ep007_english_147.png",
    "/comic/07_en/BH_ep007_english_148.png",
    "/comic/07_en/BH_ep007_english_149.png",
    "/comic/07_en/BH_ep007_english_150.png",
    "/comic/07_en/BH_ep007_english_151.png",
    "/comic/07_en/BH_ep007_english_152.png",
    "/comic/07_en/BH_ep007_english_153.png",
    "/comic/07_en/BH_ep007_english_154.png",
    "/comic/07_en/BH_ep007_english_155.png",
    "/comic/07_en/BH_ep007_english_156.png",
    "/comic/07_en/BH_ep007_english_157.png",
    "/comic/07_en/BH_ep007_english_158.png",
    "/comic/07_en/BH_ep007_english_159.png",
    "/comic/07_en/BH_ep007_english_160.png",
    "/comic/07_en/BH_ep007_english_161.png",
    "/comic/07_en/BH_ep007_english_162.png",
    "/comic/07_en/BH_ep007_english_163.png",
    "/comic/07_en/BH_ep007_english_164.png",
    "/comic/07_en/BH_ep007_english_165.png",
    "/comic/07_en/BH_ep007_english_166.png",
    "/comic/07_en/BH_ep007_english_167.png",
    "/comic/07_en/BH_ep007_english_168.png",
    "/comic/07_en/BH_ep007_english_169.png",
    "/comic/07_en/BH_ep007_english_170.png",
    "/comic/07_en/BH_ep007_english_171.png",
    "/comic/07_en/BH_ep007_english_172.png",
    "/comic/07_en/BH_ep007_english_173.png",
    "/comic/07_en/BH_ep007_english_174.png",
    "/comic/07_en/BH_ep007_english_175.png",
    "/comic/07_en/BH_ep007_english_176.png",
    "/comic/07_en/BH_ep007_english_177.png",
    "/comic/07_en/BH_ep007_english_178.png",
    "/comic/07_en/BH_ep007_english_179.png",
    "/comic/07_en/BH_ep007_english_180.png",
    "/comic/07_en/BH_ep007_english_181.png",
    "/comic/07_en/BH_ep007_english_182.png",
    "/comic/07_en/BH_ep007_english_183.png",
    "/comic/07_en/BH_ep007_english_184.png",
    "/comic/07_en/BH_ep007_english_185.png",
    "/comic/07_en/BH_ep007_english_186.png",
    "/comic/07_en/BH_ep007_english_187.png",
    "/comic/07_en/BH_ep007_english_188.png",
    "/comic/07_en/BH_ep007_english_189.png",
    "/comic/07_en/BH_ep007_english_190.png",
    "/comic/07_en/BH_ep007_english_191.png",
    "/comic/07_en/BH_ep007_english_192.png",
    "/comic/07_en/BH_ep007_english_193.png",
    "/comic/07_en/BH_ep007_english_194.png",
    "/comic/07_en/BH_ep007_english_195.png",
    "/comic/07_en/BH_ep007_english_196.png",
    "/comic/07_en/BH_ep007_english_197.png",
    "/comic/07_en/BH_ep007_english_198.png",
    "/comic/07_en/BH_ep007_english_199.png",
    "/comic/07_en/BH_ep007_english_200.png",
    "/comic/07_en/BH_ep007_english_201.png",
    "/comic/07_en/BH_ep007_english_202.png",
    "/comic/07_en/BH_ep007_english_203.png",
    "/comic/07_en/BH_ep007_english_204.png",
    "/comic/07_en/BH_ep007_english_205.png",
    "/comic/07_en/BH_ep007_english_206.png",
    "/comic/07_en/BH_ep007_english_207.png",
    "/comic/07_en/BH_ep007_english_208.png",
    "/comic/07_en/BH_ep007_english_209.png",
    "/comic/07_en/BH_ep007_english_210.png",
    "/comic/07_en/BH_ep007_english_211.png",
    "/comic/07_en/BH_ep007_english_212.png",
    "/comic/07_en/BH_ep007_english_213.png",
    "/comic/07_en/BH_ep007_english_214.png",
    "/comic/07_en/BH_ep007_english_215.png",
    "/comic/07_en/BH_ep007_english_216.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Episode 7 | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest  " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/comic/ep7/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/comic/ep7/" />
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
          <BreadShort page01="TOP" href01="/en/" page02="Comic - Episode 7" />
        </div>
        <Label01 text="Next chapter out December 9" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/en/comic/ep8/" isDisabled={false}>
                  Read Chapter 8
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>Next chapter out October 6</Button>
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
