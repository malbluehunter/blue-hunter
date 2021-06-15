import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextLeading from "../../../../../components/atoms/TextLeading"
import TextMediumSub from "../../../../../components/atoms/TextMediumSub"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../../../components/atoms/PageTitle"
import Bread from "../../../../../components/molecules/Bread"
import MainContentsTop from "../../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInner"
import PagerArea from "../../../../../components/organisms/PagerArea"
import LocalNavWorld01En from "../../../../../components/templates/LocalNavWorld01En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/grandmw/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/grandmw/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
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
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="/en/worldbuilding/" page03="Background - GRAND/MW" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Background" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="GRAND/MW" />
            <TextMediumSub text="Pronunciation: 'Gran Mu'" />
            <ContentsLine pathname={location.pathname} />
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Overview" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="A marine metropolitan area developed with the aim of both making use of the resource-abundant marine area CCZ as well as to protect the environment. It began expanding from near Kiribati's Line Islands." />
              <TextMediumSub text="GRAND/MW is the first area to be recognised by the UN as an 'Independent City' and is not under the jurisdiction of any nation." />
              <TextMediumSub text="The first city to be completed was Tetra/M in 2041, followed by Penta/M and later Hexa/M. The fourth city, Octa/M, bagan operation in 2059 and is currently the central city." />
              <TextMediumSub text="The fifth city, Deca/M is being built over the course of 10 years with plans for it to be double the size of Octa/M. (A figure of Octa/M can be seen below)." />
              <TextMediumSub text="GRAND/MW is the oldest of the Marine Metropolitan Areas, and together with Paxiora (located in the eastern part of the CCZ, starting from near Clarion island off the east coast of Central America) forms a central part of the UiC." />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_03.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Population" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="GRAND/MW is currently home to 136,000 residents. They are of varying descent such as Japanese, French, American, Micronesian/Polynesian and so on. Currently 20,000 people have relocated to Octa/M." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Location" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="GRAND/MW spreads 500km east from the easternmost tip of the Republic of Kiribati (Christmas Island). It is planned to expand to 1000km with the addition of Deca/M." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Finance/Government" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="GRAND/MW’s  developmental organization is the MW Vision Committee (MWVC), which is made up of over 100 enterprises and research organisations. The first city attained self-sufficiency in agriculture, fishing, mineral resources, and energy, as well as advocated a high-degree of self-governing autonomy (MW Method) based on the Fairchain system." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/background/marine-metropolitan-areas/" hrefNext="/en/worldbuilding/background/nation-or-city/" isDisabledPrev={false} isDisabledNext={false}  number={3} TotalNumber={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld01En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
