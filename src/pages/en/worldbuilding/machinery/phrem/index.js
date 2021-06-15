import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextMediumSub from "../../../../../components/atoms/TextMediumSub"
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
import LocalNavWorld04En from "../../../../../components/templates/LocalNavWorld04En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/machinery/phrem/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/machinery/phrem/" />
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
        <Bread page01="TOP" href01="/en" page02="The World of BH" href02="../../index.html" page03="Machinery - PHREM" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Machinery" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="PHREM" />
            <TextMedium text="(Peripheral devices for Human Resource Encoder and Memory)" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="An AI device with a Tk encoder and memory function that individuals wear on their body. Kakeru wears his on his arm. By equipping a PHREM device with My-AI, it's possible to assign it a nickname (for example, Kakeru activates his with the name 'OYAJI'), but the official names of each My-AI are linked to the individual's identification number (one per person)." />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="PHREM devices are divided into low-end (±144), middle range (±720), and high-end (±1440) devices based on the amount of Tk they can store. Kakeru's PHREM device is in the middle range and can accumulate up to 720Tk per day. So for example, if Kakeru had accumulated 100Tk that day, he can ask “How many dollars did I earn today” and will get 20 as the answer." />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Middle-range PHREM devices usually display in monochrome in order to reduce power consumption as well as to make it easier to view when out in the sunlight. Σglasses can also be used to improve visibility. Hunters often go for PHREM devices with high water pressure resistance, and Kakeru's OYAJI has a coating that lets it withstand depths of 300 meters. OYAJI is also able to project holograms." />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_01.png" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="../netbow/" hrefNext="../my-ai/" isDisabledPrev={false} isDisabledNext={false}  number={6} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
