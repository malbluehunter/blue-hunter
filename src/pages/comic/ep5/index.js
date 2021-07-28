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
    "/comic/05_ja/ep05_edit_000_v001.png",
    "/comic/05_ja/ep05_edit_750_001.png",
    "/comic/05_ja/ep05_edit_750_002.png",
    "/comic/05_ja/ep05_edit_750_003.png",
    "/comic/05_ja/ep05_edit_750_004.png",
    "/comic/05_ja/ep05_edit_750_005.png",
    "/comic/05_ja/ep05_edit_750_006.png",
    "/comic/05_ja/ep05_edit_750_007.png",
    "/comic/05_ja/ep05_edit_750_008.png",
    "/comic/05_ja/ep05_edit_750_009.png",
    "/comic/05_ja/ep05_edit_750_010.png",
    "/comic/05_ja/ep05_edit_750_011.png",
    "/comic/05_ja/ep05_edit_750_012.png",
    "/comic/05_ja/ep05_edit_750_013.png",
    "/comic/05_ja/ep05_edit_750_014.png",
    "/comic/05_ja/ep05_edit_750_015.png",
    "/comic/05_ja/ep05_edit_750_016.png",
    "/comic/05_ja/ep05_edit_750_017.png",
    "/comic/05_ja/ep05_edit_750_018.png",
    "/comic/05_ja/ep05_edit_750_019.png",
    "/comic/05_ja/ep05_edit_750_020.png",
    "/comic/05_ja/ep05_edit_750_021.png",
    "/comic/05_ja/ep05_edit_750_022.png",
    "/comic/05_ja/ep05_edit_750_023.png",
    "/comic/05_ja/ep05_edit_750_024.png",
    "/comic/05_ja/ep05_edit_750_025.png",
    "/comic/05_ja/ep05_edit_750_026.png",
    "/comic/05_ja/ep05_edit_750_027.png",
    "/comic/05_ja/ep05_edit_750_028.png",
    "/comic/05_ja/ep05_edit_750_029.png",
    "/comic/05_ja/ep05_edit_750_030.png",
    "/comic/05_ja/ep05_edit_750_031.png",
    "/comic/05_ja/ep05_edit_750_032.png",
    "/comic/05_ja/ep05_edit_750_033.png",
    "/comic/05_ja/ep05_edit_750_034.png",
    "/comic/05_ja/ep05_edit_750_035.png",
    "/comic/05_ja/ep05_edit_750_036.png",
    "/comic/05_ja/ep05_edit_750_037.png",
    "/comic/05_ja/ep05_edit_750_038.png",
    "/comic/05_ja/ep05_edit_750_039.png",
    "/comic/05_ja/ep05_edit_750_040.png",
    "/comic/05_ja/ep05_edit_750_041.png",
    "/comic/05_ja/ep05_edit_750_042.png",
    "/comic/05_ja/ep05_edit_750_043.png",
    "/comic/05_ja/ep05_edit_750_044.png",
    "/comic/05_ja/ep05_edit_750_045.png",
    "/comic/05_ja/ep05_edit_750_046.png",
    "/comic/05_ja/ep05_edit_750_047.png",
    "/comic/05_ja/ep05_edit_750_048.png",
    "/comic/05_ja/ep05_edit_750_049.png",
    "/comic/05_ja/ep05_edit_750_050.png",
    "/comic/05_ja/ep05_edit_750_051.png",
    "/comic/05_ja/ep05_edit_750_052.png",
    "/comic/05_ja/ep05_edit_750_053.png",
    "/comic/05_ja/ep05_edit_750_054.png",
    "/comic/05_ja/ep05_edit_750_055.png",
    "/comic/05_ja/ep05_edit_750_056.png",
    "/comic/05_ja/ep05_edit_750_057.png",
    "/comic/05_ja/ep05_edit_750_058.png",
    "/comic/05_ja/ep05_edit_750_059.png",
    "/comic/05_ja/ep05_edit_750_060.png",
    "/comic/05_ja/ep05_edit_750_061.png",
    "/comic/05_ja/ep05_edit_750_062.png",
    "/comic/05_ja/ep05_edit_750_063.png",
    "/comic/05_ja/ep05_edit_750_064.png",
    "/comic/05_ja/ep05_edit_750_065.png",
    "/comic/05_ja/ep05_edit_750_066.png",
    "/comic/05_ja/ep05_edit_750_067.png",
    "/comic/05_ja/ep05_edit_750_068.png",
    "/comic/05_ja/ep05_edit_750_069.png",
    "/comic/05_ja/ep05_edit_750_070.png",
    "/comic/05_ja/ep05_edit_750_071.png",
    "/comic/05_ja/ep05_edit_750_072.png",
    "/comic/05_ja/ep05_edit_750_073.png",
    "/comic/05_ja/ep05_edit_750_074.png",
    "/comic/05_ja/ep05_edit_750_075.png",
    "/comic/05_ja/ep05_edit_999_corporaterogo.png"
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
        <Label01 text="次回8/6 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep6/" isDisabled={false}>
                  第6話を読む
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回7/30 配信予定</Button>
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
