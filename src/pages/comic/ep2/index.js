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
    "/comic/02_ja/ep02_edit_001.png",
    "/comic/02_ja/ep02_edit_002.png",
    "/comic/02_ja/ep02_edit_003.png",
    "/comic/02_ja/ep02_edit_004.png",
    "/comic/02_ja/ep02_edit_005.png",
    "/comic/02_ja/ep02_edit_006.png",
    "/comic/02_ja/ep02_edit_007.png",
    "/comic/02_ja/ep02_edit_008.png",
    "/comic/02_ja/ep02_edit_009.png",
    "/comic/02_ja/ep02_edit_010.png",
    "/comic/02_ja/ep02_edit_011.png",
    "/comic/02_ja/ep02_edit_012.png",
    "/comic/02_ja/ep02_edit_013.png",
    "/comic/02_ja/ep02_edit_014.png",
    "/comic/02_ja/ep02_edit_015.png",
    "/comic/02_ja/ep02_edit_016.png",
    "/comic/02_ja/ep02_edit_017.png",
    "/comic/02_ja/ep02_edit_018.png",
    "/comic/02_ja/ep02_edit_019.png",
    "/comic/02_ja/ep02_edit_020.png",
    "/comic/02_ja/ep02_edit_021.png",
    "/comic/02_ja/ep02_edit_022.png",
    "/comic/02_ja/ep02_edit_023.png",
    "/comic/02_ja/ep02_edit_024.png",
    "/comic/02_ja/ep02_edit_025.png",
    "/comic/02_ja/ep02_edit_026.png",
    "/comic/02_ja/ep02_edit_027.png",
    "/comic/02_ja/ep02_edit_028.png",
    "/comic/02_ja/ep02_edit_029.png",
    "/comic/02_ja/ep02_edit_030.png",
    "/comic/02_ja/ep02_edit_031.png",
    "/comic/02_ja/ep02_edit_032.png",
    "/comic/02_ja/ep02_edit_033.png",
    "/comic/02_ja/ep02_edit_034.png",
    "/comic/02_ja/ep02_edit_035.png",
    "/comic/02_ja/ep02_edit_036.png",
    "/comic/02_ja/ep02_edit_037.png",
    "/comic/02_ja/ep02_edit_038.png",
    "/comic/02_ja/ep02_edit_039.png",
    "/comic/02_ja/ep02_edit_040.png",
    "/comic/02_ja/ep02_edit_041.png",
    "/comic/02_ja/ep02_edit_042.png",
    "/comic/02_ja/ep02_edit_043.png",
    "/comic/02_ja/ep02_edit_044.png",
    "/comic/02_ja/ep02_edit_045.png",
    "/comic/02_ja/ep02_edit_046.png",
    "/comic/02_ja/ep02_edit_047.png",
    "/comic/02_ja/ep02_edit_048.png",
    "/comic/02_ja/ep02_edit_049.png",
    "/comic/02_ja/ep02_edit_050.png",
    "/comic/02_ja/ep02_edit_051.png",
    "/comic/02_ja/ep02_edit_052.png",
    "/comic/02_ja/ep02_edit_053.png",
    "/comic/02_ja/ep02_edit_054.png",
    "/comic/02_ja/ep02_edit_055.png",
    "/comic/02_ja/ep02_edit_056.png",
    "/comic/02_ja/ep02_edit_057.png",
    "/comic/02_ja/ep02_edit_058.png",
    "/comic/02_ja/ep02_edit_059.png",
    "/comic/02_ja/ep02_edit_060.png",
    "/comic/02_ja/ep02_edit_061.png",
    "/comic/02_ja/ep02_edit_062.png",
    "/comic/02_ja/ep02_edit_063.png",
    "/comic/02_ja/ep02_edit_064.png",
    "/comic/02_ja/ep02_edit_065.png",
    "/comic/02_ja/ep02_edit_066.png",
    "/comic/02_ja/ep02_edit_067.png",
    "/comic/02_ja/ep02_edit_068.png",
    "/comic/02_ja/ep02_edit_069.png",
    "/comic/02_ja/ep02_edit_070.png",
    "/comic/02_ja/ep02_edit_071.png",
    "/comic/02_ja/ep02_edit_072.png",
    "/comic/02_ja/ep02_edit_073.png",
    "/comic/02_ja/ep02_edit_074.png",
    "/comic/02_ja/ep02_edit_075.png",
    "/comic/02_ja/ep02_edit_076.png",
    "/comic/02_ja/ep02_edit_077.png",
    "/comic/02_ja/ep02_edit_078.png",
    "/comic/02_ja/ep02_edit_079.png",
    "/comic/02_ja/ep02_edit_080.png",
    "/comic/02_ja/ep02_edit_081.png",
    "/comic/02_ja/ep02_edit_082.png",
    "/comic/02_ja/ep02_edit_083.png",
    "/comic/02_ja/ep02_edit_084.png",
    "/comic/02_ja/ep02_edit_085.png",
    "/comic/02_ja/ep02_edit_086.png",
    "/comic/02_ja/ep02_edit_087.png",
    "/comic/02_ja/ep02_edit_088.png",
    "/comic/02_ja/ep02_edit_089.png",
    "/comic/02_ja/ep02_edit_090.png",
    "/comic/02_ja/ep02_edit_091.png",
    "/comic/02_ja/ep02_edit_092.png",
    "/comic/02_ja/ep02_edit_093.png",
    "/comic/02_ja/ep02_edit_094.png",
    "/comic/02_ja/ep02_edit_095.png",
    "/comic/02_ja/ep02_edit_096.png",
    "/comic/02_ja/ep02_edit_097.png",
    "/comic/02_ja/ep02_edit_098.png",
    "/comic/02_ja/ep02_edit_099.png",
    "/comic/02_ja/ep02_edit_100.png",
    "/comic/02_ja/ep02_edit_101.png",
    "/comic/02_ja/ep02_edit_102.png",
    "/comic/02_ja/ep02_edit_103.png",
    "/comic/02_ja/ep02_edit_104.png",
    "/comic/02_ja/ep02_edit_105.png"
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
        <Label01 text="次回1/17 配信予定" />
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
