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
    "/comic/11_ja/BH_ep11_edit__001.png",
    "/comic/11_ja/BH_ep11_edit__002.png",
    "/comic/11_ja/BH_ep11_edit__003.png",
    "/comic/11_ja/BH_ep11_edit__004.png",
    "/comic/11_ja/BH_ep11_edit__005.png",
    "/comic/11_ja/BH_ep11_edit__006.png",
    "/comic/11_ja/BH_ep11_edit__007.png",
    "/comic/11_ja/BH_ep11_edit__008.png",
    "/comic/11_ja/BH_ep11_edit__009.png",
    "/comic/11_ja/BH_ep11_edit__010.png",
    "/comic/11_ja/BH_ep11_edit__011.png",
    "/comic/11_ja/BH_ep11_edit__012.png",
    "/comic/11_ja/BH_ep11_edit__013.png",
    "/comic/11_ja/BH_ep11_edit__014.png",
    "/comic/11_ja/BH_ep11_edit__015.png",
    "/comic/11_ja/BH_ep11_edit__016.png",
    "/comic/11_ja/BH_ep11_edit__017.png",
    "/comic/11_ja/BH_ep11_edit__018.png",
    "/comic/11_ja/BH_ep11_edit__019.png",
    "/comic/11_ja/BH_ep11_edit__020.png",
    "/comic/11_ja/BH_ep11_edit__021.png",
    "/comic/11_ja/BH_ep11_edit__022.png",
    "/comic/11_ja/BH_ep11_edit__023.png",
    "/comic/11_ja/BH_ep11_edit__024.png",
    "/comic/11_ja/BH_ep11_edit__025.png",
    "/comic/11_ja/BH_ep11_edit__026.png",
    "/comic/11_ja/BH_ep11_edit__027.png",
    "/comic/11_ja/BH_ep11_edit__028.png",
    "/comic/11_ja/BH_ep11_edit__029.png",
    "/comic/11_ja/BH_ep11_edit__030.png",
    "/comic/11_ja/BH_ep11_edit__031.png",
    "/comic/11_ja/BH_ep11_edit__032.png",
    "/comic/11_ja/BH_ep11_edit__033.png",
    "/comic/11_ja/BH_ep11_edit__034.png",
    "/comic/11_ja/BH_ep11_edit__035.png",
    "/comic/11_ja/BH_ep11_edit__036.png",
    "/comic/11_ja/BH_ep11_edit__037.png",
    "/comic/11_ja/BH_ep11_edit__038.png",
    "/comic/11_ja/BH_ep11_edit__039.png",
    "/comic/11_ja/BH_ep11_edit__040.png",
    "/comic/11_ja/BH_ep11_edit__041.png",
    "/comic/11_ja/BH_ep11_edit__042.png",
    "/comic/11_ja/BH_ep11_edit__043.png",
    "/comic/11_ja/BH_ep11_edit__044.png",
    "/comic/11_ja/BH_ep11_edit__045.png",
    "/comic/11_ja/BH_ep11_edit__046.png",
    "/comic/11_ja/BH_ep11_edit__047.png",
    "/comic/11_ja/BH_ep11_edit__048.png",
    "/comic/11_ja/BH_ep11_edit__049.png",
    "/comic/11_ja/BH_ep11_edit__050.png",
    "/comic/11_ja/BH_ep11_edit__051.png",
    "/comic/11_ja/BH_ep11_edit__052.png",
    "/comic/11_ja/BH_ep11_edit__053.png",
    "/comic/11_ja/BH_ep11_edit__054.png",
    "/comic/11_ja/BH_ep11_edit__055.png",
    "/comic/11_ja/BH_ep11_edit__056.png",
    "/comic/11_ja/BH_ep11_edit__057.png",
    "/comic/11_ja/BH_ep11_edit__058.png",
    "/comic/11_ja/BH_ep11_edit__059.png",
    "/comic/11_ja/BH_ep11_edit__060.png",
    "/comic/11_ja/BH_ep11_edit__061.png",
    "/comic/11_ja/BH_ep11_edit__062.png",
    "/comic/11_ja/BH_ep11_edit__063.png",
    "/comic/11_ja/BH_ep11_edit__064.png",
    "/comic/11_ja/BH_ep11_edit__065.png",
    "/comic/11_ja/BH_ep11_edit__066.png",
    "/comic/11_ja/BH_ep11_edit__067.png",
    "/comic/11_ja/BH_ep11_edit__068.png",
    "/comic/11_ja/BH_ep11_edit__069.png",
    "/comic/11_ja/BH_ep11_edit__070.png",
    "/comic/11_ja/BH_ep11_edit__071.png",
    "/comic/11_ja/BH_ep11_edit__072.png",
    "/comic/11_ja/BH_ep11_edit__073.png",
    "/comic/11_ja/BH_ep11_edit__074.png",
    "/comic/11_ja/BH_ep11_edit__075.png",
    "/comic/11_ja/BH_ep11_edit__076.png",
    "/comic/11_ja/BH_ep11_edit__077.png",
    "/comic/11_ja/BH_ep11_edit__078.png",
    "/comic/11_ja/BH_ep11_edit__079.png",
    "/comic/11_ja/BH_ep11_edit__080.png",
    "/comic/11_ja/BH_ep11_edit__081.png",
    "/comic/11_ja/BH_ep11_edit__082.png",
    "/comic/11_ja/BH_ep11_edit__083.png",
    "/comic/11_ja/BH_ep11_edit__084.png",
    "/comic/11_ja/BH_ep11_edit__085.png",
    "/comic/11_ja/BH_ep11_edit__086.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第11話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep11/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep11/" />
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
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第11話" />
        </div>
        {/* <Label01 text="次回3/30 配信予定" /> */}
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep12/" isDisabled={false}>
                  第12話を読む
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回3/30 配信予定</Button>
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
