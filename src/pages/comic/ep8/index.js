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
    "/comic/08_ja/BH_ep8_edit_01_v001_001.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_002.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_003.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_004.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_005.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_006.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_007.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_008.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_009.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_010.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_011.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_012.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_013.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_014.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_015.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_016.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_017.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_018.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_019.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_020.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_021.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_022.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_023.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_024.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_025.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_026.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_027.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_028.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_029.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_030.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_031.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_032.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_033.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_034.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_035.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_036.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_037.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_038.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_039.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_040.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_041.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_042.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_043.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_044.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_045.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_046.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_047.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_048.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_049.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_050.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_051.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_052.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_053.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_054.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_055.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_056.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_057.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_058.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_059.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_060.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_061.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_062.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_063.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_064.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_065.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_066.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_067.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_068.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_069.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_070.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_071.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_072.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_073.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_074.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_075.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_076.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_077.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_078.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_079.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_080.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_081.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_082.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_083.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_084.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_085.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_086.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_087.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_088.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_089.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_090.png",
    "/comic/08_ja/BH_ep8_edit_01_v001_091.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第8話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep8/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep8/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第8話" />
        </div>
        <Label01 text="次回3/30 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep9/" isDisabled={false}>
                  第9話を読む
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回11/1 配信予定</Button>
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
