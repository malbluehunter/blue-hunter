import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
import TextLeading from "../../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../../components/atoms/TextAnnotation"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/machinery/netbow/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/machinery/netbow/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Machinery - Netbow" />
        <WorldContentsInner>
          <MainContentsTop text="Machinery" />
          <MainContentsMiddleWorld>
            <TextHeading text="Netbow" />
            <ContentsLine />
            <TextMedium text="A net generator that can capture living creatures without harming them. It usually takes the shape of an archery bow. It will expand into a spherical shape at the user’s command word “Netbow!”. The pressure and oxygen levels inside the sphere can be adjusted so as not to harm the captured specimen and to also keep it sheltered from foreign objects or creatures. The net itself consists of a water-based electromagnetic net which is a mesh of normal temperature ice created using the structural factors of water molecules." />
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Personal Netbows can expand to a max diameter of around 5m, but requires considerable strength from the wielder" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="Organisms containing water will be repelled by the water molecule film formed by the bow, and so always be located either outside or inside the net will not be hit during deployment. This makes the Netbow an extremely safe piece of equipment. If the Netbow loses power, the net will simply return to being regular water. The Netbow is powered by solar energy and can float on water." />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="It is based on an idea by molecular fluid dynamics expert Professor Unabara, and was developed for practical use by Tomino Spective Company." />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_06.png" alt="" />
            </div>
           </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../nano-ball/" hrefNext="../phrem/" isDisabledPrev={false} isDisabledNext={false}  number={5} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
