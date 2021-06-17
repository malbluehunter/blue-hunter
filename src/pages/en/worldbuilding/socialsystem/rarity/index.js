import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
import LocalNavWorld02En from "../../../../../components/templates/LocalNavWorld02En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/socialsystem/rarity/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/socialsystem/rarity/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" /><meta name="robots" content="noindex" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/en/" page02="The World of BH" href02="/en/worldbuilding/" page03="Social System - Rarity (Rrt)" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Social System" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Rarity (Rrt)" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Split into four levels which are: Light( ★ )/Normal( ★★ )/Deep( ★★★ )/Extreme( ★★★★ )" />
            <TextMedium text="In the case of living things, a shade of blue can be seen on the card which corresponds with how important the achievement is." />
            <TextMedium text="Those worth less than 1000Lk are Light, 1000-100,000Lk are Normal, and 100,000-1,000,000 are Deep. There are also some creatures with double rarities, such as those that are classed as both green and blue." />
            <TextMedium text="Rrt-certified tasks are known as 'Colored Tasks'. Tasks which are associated with the ocean are blue, and those associated with the land are green. Some Tasks may be assigned multiple colors." />
            <TextMedium text="'Aiming for Blue' and 'I want Blue' means to carry out a Task corresponding to a progressive achievement, and the Lk will increase as a result (or in advance), thus leading to the AI judge on the Rrt based on the Lk growth curve." />
            <div className={styles.textHeading_wrapper}>
              <TextHeading text="Color Criteria" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="1st Order: Powder Blue" />
              <TextLeading pathname={location.pathname} text="Specimens needing research" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_02_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_02.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_02.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Adjustment request. Physical evidence such as DNA is combined with photographic evidence and eyewitness testimonies to make an informed hypothesis as to the existence of a specimen, even if already extinct. Hunters call these cards “Undiscovered” or “Targets”. They have no official names and so are often called by temporary names based on their physical traits, such as “6 feathers” or “needle scales”." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="2nd Order: Aqua Blue" />
              <TextLeading pathname={location.pathname} text="3rd Order: Sky Blue" />
              <TextLeading pathname={location.pathname} text="4th Order: Royal Blue" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_03_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_03.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_03.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Adjustment request. Either a living or recently deceased specimen has been captured and is considered an extant isolated system and must be thoroughly protected (i.e. Blue-certified cards) due to their scientific importance. Cards registered as Power Blue will be upgraded or even destroyed (if the information was proven to be false) after the Hunter has taken action. AI will certify these cards on a scale of Aqua to Royal Blue." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="5th Order: Taboo Navy" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_04_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_04.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_04.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Groups of organisms for which a specimen has been recovered and environmental pollution has been reported. May not be captured by anybody other than a Hunter. In some rare cases these have been upgraded from Blue." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="6th Order: Enemy Purple" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_05_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_05.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_05.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Groups of organisms for which a specimen has been recovered and environmental pollution as well as serious harm has been reported. Hunters are to exterminate such organisms. In some rare cases these have been upgraded from Navy." />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading pathname={location.pathname} text="7th Order: Disaster Black" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_06_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_06.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_06.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Of the millions of species in existence, less than 10 species are suspected dangerous enough for this classification. If one encounters such a creature, evacuation of its habitat is mandatory.  Blacklisted. These cards are usually kept secret." />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="/en/worldbuilding/socialsystem/colored-tasks/" hrefNext="/en/worldbuilding/socialsystem/road-to-blue/" isDisabledPrev={false} isDisabledNext={false} number={7} TotalNumber={8} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld02En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
