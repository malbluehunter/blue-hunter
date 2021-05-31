import React from "react"
import * as styles from "./index.module.scss"
import TextMedium from "../../../components/atoms/TextMedium"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumn"
import TextHeadingCharacters from "../../../components/atoms/TextHeadingCharacters"
import Label02 from "../../../components/molecules/Label02"
import SliderCharacters from "../../../components/organisms/SliderCharacters"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../components/atoms/BnrArt"
import PagerAreaCharacters from "../../../components/organisms/PagerAreaCharacters"

const CharactersPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>キャラクター | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/characters/kakeru/" />
        <meta property="og:url" content="https://manga.uminohi.jp/characters/kakeru/" />
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
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/characters/ttl_characters.png" alt="Characters" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="キャラクター - カケル" />
        <SliderCharacters pathname={location.pathname} />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.text_area}>
                <TextHeadingCharacters text="カケル" />
                <div className={styles.lavel02_wrapper}>
                  <Label02 text="保護士/プロテクター" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="プロテクター（保護⼠）を志す１５歳の少年。主⼈公。" />
                  <TextMedium text="ウェイクライドの達⼈で勉強は苦⼿。ガーデンで⽣物の写真を撮る孤児達の夢＝新種⽣物の発⾒（ブルーの獲得）を、保護⼠として⾃分の⼿で叶えてやりたいと考えている。" />
                  <TextMedium text="10年前のヴァルハラ事故において、研究者である⽗親が⾏⽅不明となり、以来ATL1にて⺟親と⼆⼈暮らし。いつか正式なブルーハンターとなり、都市間を移動しながら⽗親を捜索する、という夢がある。ハンターギルド「ψ 」の下っ端（カデット）だが、時に⼤⼈以上の能⼒を発揮し、皆を魅了していく。" />
                  <TextMedium text="⾜の裏に紋章のような⼿術跡がある。" />
                </div>
              </div>
              <div className={styles.img_area}>
                <img src="/characters/kakeru.png" alt="" />
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
        {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
        <PagerAreaCharacters hrefPrev="" hrefNext="./marine-metropolitan-areas/" isDisabledPrev={false} isDisabledNext={false} />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default CharactersPage
