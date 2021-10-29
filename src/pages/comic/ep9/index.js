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
    "/comic/09_ja/BH_ep9_edit_01_v001__001.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__002.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__003.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__004.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__005.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__006.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__007.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__008.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__009.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__010.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__011.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__012.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__013.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__014.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__015.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__016.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__017.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__018.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__019.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__020.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__021.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__022.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__023.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__024.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__025.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__026.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__027.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__028.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__029.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__030.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__031.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__032.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__033.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__034.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__035.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__036.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__037.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__038.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__039.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__040.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__041.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__042.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__043.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__044.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__045.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__046.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__047.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__048.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__049.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__050.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__051.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__052.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__053.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__054.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__055.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__056.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__057.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__058.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__059.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__060.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__061.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__062.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__063.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__064.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__065.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__066.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__067.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__068.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__069.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__070.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__071.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__072.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__073.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__074.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__075.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__076.png",
    "/comic/09_ja/BH_ep9_edit_01_v001__077.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第9話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep9/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep9/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第9話" />
        </div>
        <Label01 text="次回12/3 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              {/* <div className={styles.btn_next}>
                <Button href="/comic/ep10/" isDisabled={false}>
                  第10話を読む
                </Button>
              </div> */}
              <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回11/1 配信予定</Button>
              </div>
            </div>
          </div>
        </ComicContentsInner>
      </LayoutTwoColumnComic>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default ComicPage
