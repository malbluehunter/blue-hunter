import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../../components/atoms/TextHeading"
import TextMedium from "../../../../../components/atoms/TextMedium"
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
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/machinery/nano-ball/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/machinery/nano-ball/" />
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
        <Bread page01="TOP" href01="/" page02="The World of BH" href02="../../index.html" page03="Machinery - Nano Ball" />
        <WorldContentsInner>
          <MainContentsTop text="Machinery" />
          <MainContentsMiddleWorld>
            <TextHeading text="Nano Ball" />
            <ContentsLine />
            <TextMedium text="This transforming robot is a Hunter’s trump card during their operations. A ball-shaped utility consisting of a control core and covered in nanomachines. It can transform into other creatures and even objects at the Hunter's command. By mimicking things the target creature may like or even dislike, capture missions can run much more smoothly." />
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="* The transformation is determined using a card-shaped UI." />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_machinery_05_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_machinery_05.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_machinery_05_sp.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="The control nucleus (Core Bot) is covered in a huge number of artificial insects known as Nano Bots which can cluster together to form various shapes. Nano Balls that are 3rd Generation and later are also biodegradable, meaning their burden on the environment is significantly reduced." />
              <TextMediumSub text="As the Core Bot loses power, it forces the Nano Ball to contract back into a sphere. This means that anything held inside it could be hurt, and therefore it is not allowed to use the Nano Balls to capture creatures in place of a Netbow. Nano Balls also have a safety feature which, if switched on, means the Nano Ball will simply disintegrate when it loses power instead of contracting back into a sphere. However, switching the safety feature off means the Nano Ball could be used as a ferocious weapon that can tear apart whatever is unlucky to be inside it at the time." />
              <TextMediumSub text="3rd Gen. Nano Balls and later are able to provide edible rations, and therefore are also used as a survival kit. According to Viola “Starvation is the better option rather than this.”" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../bounty-kit/" hrefNext="../netbow/" isDisabledPrev={false} isDisabledNext={false}  number={4} TotalNumber={9} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
