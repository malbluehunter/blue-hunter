import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextLeading from "../../../../../components/atoms/TextLeading"
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
import LocalNavWorld03En from "../../../../../components/templates/LocalNavWorld03En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/bluehunter/classes/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/bluehunter/classes/" />
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
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Road to Blue Hunter - Classes for Officially-Recognized Marine Conservationists: Blue Hunters" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Road to Blue Hunter" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Classes for Officially-Recognized Marine Conservationists: Blue Hunters" />
            <ContentsLine pathname={location.pathname} />
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Classes" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Hunters belonging to the Hunter Council are split into classes. Classes are determined by the Hunter's Lv, Dp and Bk, as well as their achievements, which are appraised in a special conference. Ourai belongs to Class 5. JAZz and Billy belong to Class 4. Nagisa belongs to Class 3. Tsukito and Hawk belong to Class 2, and Kakeru is in the lowest class, Class 0." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Hunter Ranking" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Rankings are published for each class. There are five characteristics taken into account when advancing to the next class — simply accumulating Tk is not enough. Kakeru is hovering around 50th place within Class 0. Tsukito is the youngest person to ever be promoted to Class 1, and together with Hawk ranks in the top 20 of their Class. It is said that they are close to being promoted to Class 2." />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_ bluehunter_01_en.png" alt="" />
            </div>
            </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/bluehunter/guilds/" hrefNext="" isDisabledPrev={false} isDisabledNext={true}  number={2} TotalNumber={2} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld03En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
