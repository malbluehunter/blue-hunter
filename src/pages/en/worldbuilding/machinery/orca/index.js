import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/machinery/orca/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/machinery/orca/" />
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
        <Bread page01="TOP" href01="/en" page02="The World of BH" href02="../../index.html" page03="Machinery - ψOrca" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Machinery" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="ψOrca" />
            <TextMediumSub text="Pronunciation: 'Psi-Orca'" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="A self-sufficient ship used by Blue Hunters. As well as making full use of solar batteries, wind power and tidal force, it also creates and stores hydrogen by breaking down surrounding seawater. Not only is it self-sufficient, but it also supplies energy to the underwater power grid (Sea Force). Completing missions using ZEROships such as the ψOrca usually leads to more Gains and are seen very positively. Completing a mission at a Loss (i.e. plus emissions) is acceptable in the event of necessary withdrawal from a dangerous or life-threatening situation." />
            
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_01.png" alt="" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_02.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="1. First Bridge: Headbridge" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="A small bridge which also serves as storage for cargo needed for maintenance of the Ryujin and Kouten. It has a see-through canopy that can open up fully. Generally used as an observation deck or banquet hall." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="2. Step" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Connects to the 1st Bridge Headbridge" />
              <TextMediumSub text="There is a hatch entry, so you can enter/exit the craft while it is in semi-sub mode. Kakeru once hit his head on this door." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="3. Second deck: Bottom Deck" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="A flat deck designed for the loading of mission packages. There are many different types of packages from ones for capturing live specimens, for exterminating specimens, for combat and more." />
              <TextMediumSub text="This part is underwater when the ψOrca is in semi-sub mode, and there is a package which turns the deck into something of a sight-seeing bus with windows. The maximum package height is up to the 1st Bridge." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="4. Cargo Bay" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The cargo stores all equipment as well as Raijin (probe) and Kouten (drone car suitable for both land and sea). Either of these can be taken to the 2nd Deck as a passion package." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Normal Mode" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="This is the mode used when replacing or maintaining mission packages, charging solar cells or navigating shallow waters such as harbors. The waterline can be adjusted using extremely small ballast tanks." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Semi-sub Mode" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="This mode is used for submerged mission packages. There is no need for a crane when lowering ROVs. The 1st Deck and Bridge are located above sea level, so from above water it just seems like quite a large pleasure craft. The two 'forelegs' are used to move forwards and backwards, and can be used alternately to steer. Pods near the bottom of the hull contain propellers used to propel the ship." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="Burst Mode" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The ship runs at full throttle with 4 water jets. Pseudo-hydrofoils are formed using electromotive force in the upper arms. If the ship surpasses 50km/h, the hull begins to rise (the rear part lifts using rigid hydrofoils). When the two jets at the back are running, the pod at the bottom of the hull will intake water." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="../ryujin/" isDisabledPrev={true} isDisabledNext={false}  number={1} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld04En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
