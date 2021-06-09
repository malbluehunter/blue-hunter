import React from "react"
import * as styles from "./index.module.scss"
import TextMedium from "../../../../components/atoms/TextMedium"
import { Helmet } from "react-helmet"
import PageTitle from "../../../../components/atoms/PageTitle"
import BreadShort from "../../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../../components/templates/LayoutTwoColumn"
import TextHeadingCharacters from "../../../../components/atoms/TextHeadingCharacters"
import Label02 from "../../../../components/molecules/Label02"
import SliderCharacters from "../../../../components/organisms/SliderCharacters"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../../components/atoms/BnrArt"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/characters/tsukito/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/characters/tsukito/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
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
        <BreadShort page01="TOP" href01="/" page02="Characters - Tsukito" />
        <SliderCharacters pathname={location.pathname} />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.text_area}>
                <TextHeadingCharacters text="Tsukito" />
                <div className={styles.lavel02_wrapper}>
                  <Label02 text="Searcher" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="A 13-year-old Searcher. He already holds multiple Blues. He appears as an informant not affiliated with any particular guild." />
                  <TextMedium text="He earned a doctorate in environmental biology at the tender age of 10, but due to illness may not have that much longer to live. He is extremely mature for his age and comes across as more mature than Kakeru and Viola. He is actually intersex, and often finds himself talking about marine life which have the ability to easily change sexes as it reminds him of himself. He dreams of solving the mystery behind his birth." />
                  <TextMedium text="He lives with his mother while his father, Professor Shingyoji, is currently participating in a certain urban development project. He continues to turn down invitations to powerful guilds due to his illness." />
                  <TextMedium text="He can often be found in Gardens 3-6." />
                  <TextMedium text="Seeing Kakeru work towards fulfilling the dreams of the orphans in the Garden.Life support system" />
                </div>
              </div>
              <div className={styles.img_area}>
                <img src="/characters/tsukito.png" alt="Tsukito" />
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
        {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
        <PagerAreaCharacters hrefPrev="../viola/" hrefNext="../hawk/" isDisabledPrev={false} isDisabledNext={false} />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default CharactersPage
