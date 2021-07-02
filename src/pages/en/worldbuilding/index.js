import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumnEn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../components/atoms/BnrArtEn"
import WorldCategoryBtn from "../../../components/organisms/WorldCategoryBtn"

const WorldPage = ({ location }) => {
  const categoryInfo = [
    {
      src: "/world/bg_top_01.png",
      alt: "Background",
      text: "Read about the development of the Marine Metropolitan Area 'GRAND/MW'",
      btn: "/world/btn_top_01.png",
      href: "/en/worldbuilding/background/ccz/",
    },
    {
      src: "/world/bg_top_02.png",
      alt: "Social System",
      text: "What are Tasks and Fairchain? Learn some of the jargon that appears in Blue Hunter",
      btn: "/world/btn_top_02.png",
      href: "/en/worldbuilding/socialsystem/tk/",
    },
    {
      src: "/world/bg_top_03.png",
      alt: "Road to Blue Hunter",
      text: "Learn about Hunter Guilds and Hunter classes",
      btn: "/world/btn_top_03.png",
      href: "/en/worldbuilding/bluehunter/guilds/",
    },
    {
      src: "/world/bg_top_04.png",
      alt: "Machinery",
      text: "Learn about the Hunter Ship ψOrca and other tools used by Hunters",
      btn: "/world/btn_top_04.png",
      href: "/en/worldbuilding/machinery/orca/",
    },
    {
      src: "/world/bg_top_05.png",
      alt: "Technology",
      text: "Read about some of the technology that can be found in the 2050's",
      btn: "/world/btn_top_05.png",
      href: "/en/worldbuilding/technology/sigmar-sigmaview/",
    },
  ]

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>The World of BLUE HUNTER | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/worldbuilding/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/worldbuilding/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
        <BreadShort page01="TOP" href01="/en/" page02="The World of BLUE HUNTER" />
        <div className={styles.contents_inner}>
          <WorldCategoryBtn categoryInfo={categoryInfo} />
        </div>
        {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
