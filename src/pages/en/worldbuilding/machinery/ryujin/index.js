import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/machinery/ryujin/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/machinery/ryujin/" />
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
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Machinery - Wake Rider Ryujin" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Machinery" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Wake Rider Ryujin" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Wake Riders consist of a remotely controlled jet ski and an attached wakeboard behind it. Ryujin is a Wake Rider that boasts a top speed of over 100km. In missions that take place on the surface of the water, the noise of the Wake Rider will be used to escape, i.e drive creatures to certain points, and Hunters can freely surround the target at distances of no more than 100 meters. At times the Hunters may even jump into the air." />
            <TextMedium text="For underwater missions, Sea Pods (underwater scooters) perform the same function as Wake Riders." />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_03.jpg" alt="" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_04.jpg" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/machinery/orca/" hrefNext="/en/worldbuilding/machinery/bounty-kit/" isDisabledPrev={false} isDisabledNext={false}  number={2} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
