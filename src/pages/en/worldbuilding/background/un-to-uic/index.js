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
import WorldContentsInner from "../../../../../components/organisms/WorldContentsInner"
import PagerArea from "../../../../../components/organisms/PagerArea"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest" />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/background/un-to-uic/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/background/un-to-uic/" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Background - 3. From UN to UiC" />
        <WorldContentsInner>
          <MainContentsTop text="Background" />
          <MainContentsMiddleWorld>
            <TextHeading text="3. From UN to UiC" />
            <ContentsLine />
            <TextMedium text="As its name suggests, the United Nations (UN) was responsible for coordinating the interests of nations. However, it did not play a significant enough role in the conservation of the environment and attracted much criticism in the 2020s-2040s, eventually becoming a mere shell of its former self." />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Mankind was approaching an age where it was time to question anything and everything, such as the 20th century idea of ‘the state’ consisting of economic liberalism and capitalism and its apathy to the environmental crisis." />
              <TextMediumSub text="It was around this time that GRAND/MW's style of ruling using Fairchain rose to prominence and became known as the MW Method. The system was adopted by other Independent Cities and they developed their own version of the UN known as iRCOT, and attracted a lot of attention from across the globe." />
              <div className={styles.textLeading_wrapper}>
              <TextLeading text="Independent Cities (iC)" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The term iC or iCities is used to denote relations between other Independent Cities in the same way 'international' is used to denote relationships between nations. For example, iRCOT and UiC Navy" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="iCities Representative Committee (iRCOT)" />
              <TextLeading text="United iCities (UiC)" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The mid-2040s saw the establishment of other marine metropolitan areas modelled after GRAND/MW, such as Paxiora on the easternmost part of the CCZ. This led to the dismantling of the MWVC, and the 2044 establishment of iRCOT, which united multiple metropolitan areas." />
              <TextMediumSub text="iRCOT launched a series of innovative measures based on Fairchain and endeavoured to map out the future of humankind. The United Nations absorbed iRCOT in 2047, leading to the creation of the UNiC (United Nations or iCities)." />
              <TextMediumSub text="This ultimately did not work, and instead led to the founding of UiC (United iCities) in 2050.UiC is essentially a successor to iRCOT, but differs in that it also includes Ortofran (formerly California, USA), which is an independent metropolitan area on land. The UiC Navy was launched to replace the United Nations Command. Representatives from each metropolitan area gather each year to participate in a general assembly to discuss environmental conservation and iC laws, and a Secretary General for the UiC is selected once every few years." />
            </div>
            </div>
            <div className={styles.table_leading_wrapper}>
              <table className={styles.table_leading}>
                <tr className={styles.table_tr}>
                  <th className={styles.table_th}>Year</th>
                  <th className={styles.table_th}>Global advancements</th>
                  <th className={styles.table_th}>Technological Advancements</th>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2033</td>
                  <td className={styles.td_item}>
                    onstruction begins on&nbsp;
                    <br className={styles.view_sp} />
                    GRAND/MW
                  </td>
                  <td className={styles.td_item}>
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2034</td>
                  <td className={styles.td_item}>
                    Construction begins on&nbsp;
                    <br className={styles.view_sp} />
                    Paxiora, Zeeg, Altlas,
                    <br className={styles.view_sp} />
                    Glasheim
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}></td>
                  <td className={styles.td_item}></td>
                  <td className={styles.td_item}>
                    Establishment of the&nbsp;
                    <br className={styles.view_sp} />
                    foundations for Fairchain and&nbsp;
                    <br className={styles.view_sp} />
                    SeaForce
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2041</td>
                  <td className={styles.td_item}>
                    GRAND/MW's first cities&nbsp;
                    <br className={styles.view_sp} />
                    established, construction&nbsp;
                    <br className={styles.view_sp} />
                    begins on second city
                  </td>
                  <td className={styles.td_item}>
                    MW Method begins operation
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2044</td>
                  <td className={styles.td_item}>
                    Paxiora's first city was&nbsp;
                    <br className={styles.view_sp} />
                    established. iRCOT&nbsp;
                    <br className={styles.view_sp} />
                    established
                  </td>
                  <td className={styles.td_item}>
                    MW System Task System&nbsp;
                    <br className={styles.view_sp} />
                    established across iCities
                  </td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2045</td>
                  <td className={styles.td_item}>
                    UN officially declares&nbsp;
                    <br className={styles.view_sp} />
                    GRAND/MW, Paxiora and 3&nbsp;
                    <br className={styles.view_sp} />
                    other marine metropolitan&nbsp;
                    <br className={styles.view_sp} />
                    areas as Independent Cities.
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2047</td>
                  <td className={styles.td_item}>
                    UNiC established
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
                <tr className={styles.table_tr}>
                  <td className={styles.td_leading}>2050</td>
                  <td className={styles.td_item}>
                    UiC established. Members&nbsp;
                    <br className={styles.view_sp} />
                    consist of 9 Marine&nbsp;
                    <br className={styles.view_sp} />
                    Metropolitan Areas and 12&nbsp;
                    <br className={styles.view_sp} />
                    on-land metropolitan areas.
                  </td>
                  <td className={styles.td_item}></td>
                </tr>
              </table>
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../nation-or-city/" hrefNext="../octam1/" isDisabledPrev={false} isDisabledNext={false}  number={5} TotalNumber={10} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
