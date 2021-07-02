import React from "react"
import * as styles from "./index.module.scss"
import TextMedium from "../../../../components/atoms/TextMedium"
import { Helmet } from "react-helmet"
import PageTitle from "../../../../components/atoms/PageTitle"
import BreadShort from "../../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../../components/templates/LayoutTwoColumnEn"
import TextHeadingCharacters from "../../../../components/atoms/TextHeadingCharacters"
import Label02 from "../../../../components/molecules/Label02"
import SliderCharacters from "../../../../components/organisms/SliderCharactersEn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../../components/atoms/BnrArtEn"
import PagerAreaCharacters from "../../../../components/organisms/PagerAreaCharacters"

const CharactersPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Characters | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/characters/skull/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/characters/skull/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/characters/ttl_characters.png" alt="Characters" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/en/" page02="Characters - Skull" />
        <SliderCharacters pathname={location.pathname} />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.text_area}>
                <TextHeadingCharacters text="Skull" />
                <div className={styles.lavel02_wrapper}>
                  <Label02 text="Head of strategic operations" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="An android equipped with AI that allows him to become one with the boats. The heart of ψ." />
                </div>
              </div>
              <div className={styles.img_area}>
                <img src="/characters/skull.png" alt="Skull" />
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
        {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
        <PagerAreaCharacters hrefPrev="/en/characters/yoshinori/" hrefNext="/en/characters/jazz/" isDisabledPrev={false} isDisabledNext={false} />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default CharactersPage
