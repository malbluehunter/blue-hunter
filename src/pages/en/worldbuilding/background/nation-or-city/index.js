import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
import LocalNavWorld01 from "../../../../../components/templates/LocalNavWorld01"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/nation-or-city/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/nation-or-city/" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Background - 2. A Nation? A City?" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Background" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="2. A Nation? A City?" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Manganese nodules (polymetallic clusters) are widely distributed on the surface of the seabed in the CCZ. Unlike when extracting petroleum, miners need to move horizontally after mining these nodules, which is why Marine Metropolitan Areas were designed with the foresight of being able to expand horizontally.  (Fig below is of GRAND/MW conceptual plan)" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_04.png" alt="" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Although GRAND/MW was additionally conceived to pursue the technology needed to mine marine resources, it had dramatic results that included not only becoming a model for self-sustainable living, but also the development of the 'next-generation blockchain' known as Fairchain." />
              <TextMediumSub text="The 'Task System' on which Fairchain operates was first tested in units such as villages and schools mainly in the Baltic States and other areas of Europe in the 2020s and 2030s. The experiment was pioneered over the course of 10 years, beginning with looking at the ethical results in primary education, then having those students apply it into government and a variety of projects after graduation." />
              <TextMediumSub text="The Task System was expected to be rolled out in self-contained units per city or nation. However, there became a need for 'next-generation blockchain technology', with extremely high security and ultra-high-speed processing as the system found itself hitting a bottle-neck." />
              <TextMediumSub text="The 2040s saw dramatic leaps in quantum computing-based blockchain technology 'Fairchain'." />
              <TextMediumSub text="Already attracting global attention for being the location of a huge social experiment, GRAND/MW found itself the center of a new type of social system for humankind thanks to its use of the Task System built using Fairchain; as well as its social structure backed by high productivity." />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="In 2045, before the completion of its second city, the Marine Metropolitan Area GRAND/MW was recognized by the United Nations as independent. Following the success of GRAND/MW, other Marine Metropolitan Areas began to pop up in the late 2040s." />
              <TextMediumSub text="These areas included Paxiora (located in the CCZ), Zeeg (which focuses on mining the cobalt-rich crust of the Western Pacific) and Atlas (which focuses on using energy from oceanic ridges)." />
              <TextMediumSub text="All these areas advocated autonomy based on the Task System/Fairchain system known as the MW Method, and also became the home of many academics and engineers." />
              <TextMediumSub text="In the late 2050s, the MW Method was also adopted by terrestrial cities such as Ortofran in North America, and the days of being ruled by the nation seemed to come to a close." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="../grandmw/" hrefNext="../un-to-uic/" isDisabledPrev={false} isDisabledNext={false}  number={4} TotalNumber={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld01 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
