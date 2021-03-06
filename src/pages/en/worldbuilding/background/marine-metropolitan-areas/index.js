import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextAnnotation from "../../../../../components/atoms/TextAnnotation"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../../components/templates/LayoutTwoColumnEn"
import PageTitle from "../../../../../components/atoms/PageTitle"
import Bread from "../../../../../components/molecules/Bread"
import MainContentsTop from "../../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInnerEn"
import PagerArea from "../../../../../components/organisms/PagerArea"
import LocalNavWorld01En from "../../../../../components/templates/LocalNavWorld01En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/marine-metropolitan-areas/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/marine-metropolitan-areas/" />
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
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Background - 1. Birth of Marine Metropolitan Areas" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Background" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="1. Birth of Marine Metropolitan Areas" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Although it took until 2020 to really become apparent, a serious oversight had been creeping up for many years. The exhaustion of common metals such as iron and copper was becoming a possibility, and it became clear that they could not continued to be mined at current rates. In the 2030s, it became necessary to mine manganese nodules for their copper, and thus came the envisioning of the sustainable marine base GRAND/MW. Researchers and engineers came from across the globe with their families to the Republic of Kiribati. They built and ran Tetra/M on the eastern coast of Christmas Island, and 10 years of research resulted in the birth of the first fully sustainable marine living sphere free of outside influence, with a population of approximately 1000." />
            <TextMedium text="Like CERN* before it, GRAND/MW transcended its initial purpose by making significant progress in more than 100 interdisciplinary research subjects. One of these was Fairchain, led by the participation of GRAND/MW's citizens (i.e. researchers and their families) in social experiments allowing them to become a blueprint for the future of human society." />
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="*CERN (European Organization for Nuclear Research) Established in 1954. The Large Hadron Collider (LHC), with a total circumference of 27km, was built near the border between Switzerland and France. Physics researchers from all over the world moved to this area for research at the time, and it is said that they had an economic effect of several hundred million dollars on both countries." />
              <TextAnnotation text="This kind of international joint research is expected to have a huge impact on the economy. In addition to the progress of particle physics, CERN is also the birthplace of the World Wide Web. It could similarly be said that Fairchain is the WWW of GRAND/MW." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/background/ccz/" hrefNext="/en/worldbuilding/background/grandmw/" isDisabledPrev={false} isDisabledNext={false} number={2} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld01En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
