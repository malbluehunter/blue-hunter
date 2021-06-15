import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
import LocalNavWorld03En from "../../../../../components/templates/LocalNavWorld03En"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/bluehunter/guilds/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/bluehunter/guilds/" />
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
        <Bread page01="TOP" href01="/en" page02="The World of BH" href02="../../index.html" page03="Road to Blue Hunter - The Organisation of Hunter Guilds" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="Road to Blue Hunter" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="The Organisation of Hunter Guilds" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="Hunters act in teams known as Guilds, of which each member is assigned a role. Each Guild runs a type of ship called a ZEROship, and work is split into 3 rotating shifts." />
            <TextMedium text="Seekers take on the role of collecting data via the analysis of environmental DNA (eDNA) and guide the ship. Protectors take on the role of getting close to specimens in order to investigate or capture them." />
            <TextMedium text="A unit must contain at least one Protector and one Seeker, boarding the ship to complete the mission with somebody above and somebody below the water’s surface." />
            <TextMedium text="Searchers are responsible for analyzing or taking care of captured specimens. It is not uncommon for Cadets or Protectors to also take on the role of Searcher." />
            <TextMedium text="It's also possible to take part in a mission remotely, without boarding the ship. Some guilds also have an Operator take part, who controls UG on the seabed. By teaming up with Protectors, it’s possible to take on large-scale projects." />
            <div className={styles.table_sub_wrapper}>
              <table className={styles.table_sub}>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>
                    Guild
                    <br />
                    (Research Team)
                  </td>
                  <td className={styles.td_item}>
                    Guild Master
                    <br />
                    (Also acts as Captain)
                  </td>
                  <td className={styles.td_item}>
                    Seeker
                  </td>
                  <td className={styles.td_item}>
                    Draws up a plan of action based on eDNA analysis /&nbsp;
                    <br className={styles.view_sp} />
                    Guides the Protectors from onboard the ship.
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    Protector
                  </td>
                  <td className={styles.td_item}>
                    Responsible for the safe capture of specimens.&nbsp;
                    <br className={styles.view_sp} />
                    Works both above and under the water.&nbsp;
                    <br className={styles.view_sp} />
                    For underwater missions, it is legally required&nbsp;
                    <br className={styles.view_sp} />
                    that at least two Protectors work together
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    Searcher
                  </td>
                  <td className={styles.td_item}>
                    Responsible for the organisation&nbsp;
                    <br className={styles.view_sp} />
                    and analysis of captured specimens&nbsp;
                    <br className={styles.view_sp} />
                    and acts as all-round brains for the Guild.
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    Cadet
                  </td>
                  <td className={styles.td_item}>
                    All-round support. Acts as a crewman&nbsp;
                    <br className={styles.view_sp} />
                    and apprentice. Usually made up of&nbsp;
                    <br className={styles.view_sp} />
                    students and part-timers
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>
                    Guild
                    <br />
                    (Deck Team・7)
                  </td>
                  <td className={styles.td_item}>
                    Captain
                  </td>
                  <td className={styles.td_item}>
                    Navigation Officer 
                    <br />
                    (1st, 2nd, 3rd)
                  </td>
                  <td className={styles.td_item}>
                    Operate the ship in a cycle of 3 shifts.&nbsp;
                    <br className={styles.view_sp} />
                    Act as both Navigation Officers&nbsp;
                    <br className={styles.view_sp} />
                    and Engineers.
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>
                    Guild
                    <br />
                    (Strategy Team・4)
                  </td>
                  <td className={styles.td_item}>
                    Commander
                    <br />
                    (Fishing Chief)
                  </td>
                  <td className={styles.td_item}>
                    Strategists x3
                  </td>
                  <td className={styles.td_item}>
                    Operates underwater vessels.&nbsp;
                    <br className={styles.view_sp} />
                    Support fishing (via fishing nets)&nbsp;
                    <br className={styles.view_sp} />
                    and diving.
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>
                    Guild
                    <br />
                    (General Affairs・5)
                  </td>
                  <td className={styles.td_item}>
                    Head Chef
                    <br />
                    Medical manager
                  </td>
                  <td className={styles.td_item}>
                    Chef
                    <br />
                    Nurse
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
              </table>
            </div>
            </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="../classes/" isDisabledPrev={true} isDisabledNext={false}  number={1} TotalNumber={2} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld03En pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
